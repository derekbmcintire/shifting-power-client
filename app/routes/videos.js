import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('tag', params.tag_id)
  },
  actions: {
  newRating(rating) {
    let newRate = this.get('store').createRecord('userrating', rating)
    newRate.save().then(function() {
      console.log('rating saved')
    })
  }
  }
});
