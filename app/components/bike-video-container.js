import Ember from 'ember';

export default Ember.Component.extend({
  featuredUrl: '',
  actions: {
    newVideo(url) {
      this.set('featuredUrl', url)
      console.log(this.get('featuredUrl'))
    }
  }

});
