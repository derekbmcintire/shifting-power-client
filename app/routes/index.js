import Ember from 'ember';

export default Ember.Route.extend({

  model () {
    return this.get('store').findAll('video');
  },

  auth: Ember.inject.service(),
  user: Ember.computed.alias('auth.credentials.id'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  actions: {
    getVideo(id) {
      return this.transitionTo('videos', id)
  },
    newRating(rating) {
      // check id's are as expected
      // these are returning the correct id's
      console.log('user id ', this.getProperties('user').user)
      console.log('video id ', rating.video.id)

      // send a GET request to get userratings
      // filtered by user_id and video_id
      this.get('store').query('userrating', {
        filter: {
          // this is not properly filtering and always returns
          // all records
          // tried passing entire user and video objects
          // instead of id's but got errors
          user_id: this.getProperties('user').user,
          video_id: rating.video.id
        }
      }).then(function(result) {
        // when results are returned check to see what they are
        // having trouble seeing what the result is
        // tried result.userratings and got undefined
        console.log('result length is ', result.get('length'))
        // if result exists log that user has already rated video
        // i may need to check for length instead of simply existing
        if (result) {
          console.log('you already rated this video')
        } else {
          // if nothing is returned, create a new record
          let newRate = this.get('store').createRecord('userrating', rating)
          newRate.save().then(function() {
            console.log('rating saved')
          })
        }
      })
    }
  }
});
