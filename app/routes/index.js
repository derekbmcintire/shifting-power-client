import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('video');
  },
  actions: {
    getVideo(id) {
      return this.get('store').findRecord('video', id)
    }
  }
});
