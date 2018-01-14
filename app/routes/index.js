import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('video');
  },
  actions: {
    getVideo(id) {
      return this.transitionTo('videos', id)
  }
  }
});
