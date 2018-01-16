import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('video');
  },
  actions: {
    getVideo(id) {
      return this.transitionTo('videos', id)
  },
  newRating(rating) {
    let newRate = this.get('store').createRecord('userrating', rating)
    newRate.save().then(function() {
      console.log('rating saved')
    })
  }
  }
});
