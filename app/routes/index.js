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
      console.log('user id ', this.getProperties('user').user)
      console.log('video id ', rating.video.id)
      console.log('this rating is ', rating.rating)
      // send a GET request to get userratings
      // filtered by user_id and video_id
      this.get('store').query('userrating', {
        // passes filter as a param to the index action
        filter: {
          user_id: this.getProperties('user').user,
          video_id: rating.video.id
        }
      }).then(function(result) {
        // when results are returned check to see what they are
        // returning the correct length
        console.log('first result is ', result.get('length'))
        // if result exists log that user has already rated video

        // find the first returned record by id
        // something is going wrong here
        if (result.get('length') !== 0) {
          console.log('get result is ', result.get('firstObject').id)
          result.get('store').findRecord('userrating', result.get('firstObject').id).then(function(result) {
            // then set the 'rating' to the passed rating
            // console.logging to see current and new ratings

            // set the results rating to the new rating
            result.set('rating', rating.rating)
            // save the result
            result.save()
          }).then(function() {
            console.log('updated successfully')
          }).catch(console.error)
          console.log('you already rated this video')
        } else {
          // if nothing is returned, create a new record

          result.get('store').createRecord('userrating', rating).save().then(function() {
            console.log('it maybe worked')
          })
        }
      })
    }
  }
});
