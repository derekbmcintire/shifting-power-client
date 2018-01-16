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
        console.log('first result id is ', result.get('firstObject').id)
        // if result exists log that user has already rated video

        // find the first returned record by id
        // something is going wrong here
        if (result) {
          console.log(result.get('store'))
          result.get('store').findRecord('userrating', (result.get('firstObject').id)).then(function(singleResult) {
            // then set the 'rating' to the passed rating
            // console.logging to see current and new ratings
            console.log('result rating ', singleResult.get('rating'))
            console.log('new rating is ', rating.rating)
            // set the results rating to the new rating
            singleResult.set('rating', rating.rating)
            // save the result
            singleResult.save()
          }).then(function() {
            console.log('updated successfully')
          }).catch(console.error)
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
