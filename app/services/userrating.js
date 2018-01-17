import Ember from 'ember';

export default Ember.Service.extend({
  auth: Ember.inject.service(),
  user: Ember.computed.alias('auth.credentials.id'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  flashMessages: Ember.inject.service(),
  store: Ember.inject.service(),

  // action to delete a userrating
  delRate(rating) {
    // sends a request to the API to return any userrating where user_id and
    // video_id match what are passed to it
    // this should always be a DS.PromiseArray that contains a single object
    this.get('store').query('userrating', {
      filter: {
        user_id: this.getProperties('user').user,
        video_id: rating.video.id
      }
    })
      .then((result) => {
        // get the first (only) object in the returned array
        // delete that record
        result.get('firstObject').deleteRecord()
        result.get('firstObject').save()
      })
      .then(() => {
        // display successful delete message
        this.get('flashMessages')
          .success('Rating successfully deleted.');
      })
      .catch(() => {
        // display unsuccessful delete message
        this.get('flashMessages')
          .danger('Rating not deleted.');
      })
  },

  // action to create or update a userrating
  newRating(rating) {
    // send a GET request to get userratings
    // filtered by user_id and video_id
    // passingfilter as a param to the index action
    this.get('store').query('userrating', {
      filter: {
        user_id: this.getProperties('user').user,
        video_id: rating.video.id
      }
    })
      .then((result) => {
        // when results are returned check if length
        // is greater than 0
        // this will prevent any user from rating a video more than once
        // so when the above query is run there can never be more than
        // one object returned
        if (result.get('length') > 0) {
          // this result should always be a DS.PromiseArray
          // with only a single object
          // set the new rating for the first (only) object and save
          result.get('firstObject').set('rating', rating.rating)
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
        })
      } else {
        // if nothing is returned, create a new record
        result.get('store').createRecord('userrating', rating).save()
          .then(() => {
            // display success message
            this.get('flashMessages')
              .success('Rating successfully created.');
            }).catch(() => {
              // display failure message
              this.get('flashMessages')
                .danger('Rating not created.');
            })
      }
    })
  }
});
