import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('video', params.video_id)
  },
  auth: Ember.inject.service(),
  user: Ember.computed.alias('auth.credentials.id'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  actions: {
    delRate(rating) {
      this.get('store').query('userrating', {
        filter: {
          user_id: this.getProperties('user').user,
          video_id: rating.video.id
        }
      })
        .then(function(result) {
          result.get('firstObject').deleteRecord()
          result.get('firstObject').save()
        })
        .then(function() {
          console.log('Rating deleted')
        })
        .catch(console.error)
    },
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
        .then(function(result) {
          // when results are returned check if length
          // is greater than 0
          if (result.get('length') > 0) {
            // this result should always be a DS.PromiseArray
            // with only a single object
            // set the new rating for the first (only) object and save
            result.get('firstObject').set('rating', rating.rating)
            result.get('firstObject').save()
          .then(function() {
            console.log('Rating updated')})
          .catch(console.error)
        } else {
          // if nothing is returned, create a new record
          result.get('store').createRecord('userrating', rating).save()
            .then(function() {
              console.log('Rating created')})
        }
      })
    }
  }
});
