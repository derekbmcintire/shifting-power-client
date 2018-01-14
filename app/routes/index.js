import Ember from 'ember';

export default Ember.Route.extend({
  tagId: '8',
  model () {
    return this.get('store').findRecord('tag', this.get('tagId'))
  },
  actions: {
    getVideos () {
      console.log('getVideos happens')
      this.set('tagId', '9')
    }
  }
});
