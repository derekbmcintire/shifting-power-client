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
    console.log('got to index.', rating)
    console.log('in index video id ', rating.video_id)
    let newRate = this.get('store').createRecord('userrating', rating)
    newRate.save()
  }
  }
});
