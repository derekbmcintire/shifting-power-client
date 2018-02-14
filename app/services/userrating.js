import Ember from 'ember';

export default Ember.Service.extend({
  auth: Ember.inject.service(),
  user: Ember.computed.alias('auth.credentials.id'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  flashMessages: Ember.inject.service(),
  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),
  beenRated: null,

  userVideoRating(video) {
    // sends a request to the API to return any userrating where user_id and
    // video_id match what are passed to it
    // this should always be a DS.PromiseArray that contains a single object
    return this.get('store').query('userrating', {
      filter: {
        user_id: this.getProperties('user').user,
        video_id: video.id
      }
    }).then((result)=>{
      // when results are returned check if length
      // is greater than 0
      // this will prevent any user from rating a video more than once
      // so when the above query is run there can never be more than
      // one object returned
      // set beenRated to boolean T or F to represent if
      // current user has rated the video
      if (result.get('length') > 0) {
        this.set('beenRated', true);
        return result;
      } else {
        this.set('beenRated', false);
        return result;
      }
    });
  },

  // action to delete a userrating
  delRate(video) {
    this.userVideoRating(video)
      .then((result) => {
        // delete first (only) object returned
        result.get('firstObject').deleteRecord();
        result.get('firstObject').save();
      })
      .then(() => {
        // display successful delete message
        this.get('flashMessages')
          .success('Rating successfully deleted.');
      })
      .then(() => {
        // this makes the delete radio button disappear after half a second
        // Ember does not provide a way to set checked or unchecked state
        // of a radio button, so there is no way to clear an ember
        // radio button helper without adding a dependency
        // in the future something like https://www.npmjs.com/package/ember-radio-buttons could be used
        setTimeout(() => {
          return this.get('store').findRecord('video', video.id);
        }, 500);
      })
      .catch(() => {
        // display unsuccessful delete message
        this.get('flashMessages')
          .danger('Rating not deleted.');
      });
  },

  // action to create or update a userrating
  newRating(rating) {
    if (rating.rating == null) {
      this.delRate(rating.video)
    } else {
    this.userVideoRating(rating.video)
      .then((result) => {
        // check if current user has previously
        // rated this video
        if (this.get('beenRated')) {
          // this result should always be a DS.PromiseArray
          // with only a single object
          // set the new rating for the first (only) object and save
          result.get('firstObject').set('rating', rating.rating);
          result.get('firstObject').save()
        .then(() => {
          // display success message
          this.get('flashMessages')
            .success('Rating successfully updated.');
          })
        .catch(() => {
          // display failure message
          this.get('flashMessages')
            .danger('Rating not updated.');
        });
      } else {
        // if nothing is returned, create a new record
        result.get('store').createRecord('userrating', rating)
          .save()
          .then(() => {
            // display success message
            this.get('flashMessages')
              .success('Rating successfully created.');
            })
            .then(() => {
              return this.get('store').findRecord('video', rating.video.id);
            })
            .catch(() => {
              // display failure message
              this.get('flashMessages')
                .danger('Rating not created.');
            });
      }
    });
  }
}
});
