import Ember from 'ember';

export default Ember.Component.extend({
  featuredUrl: '',
  classNames: ['text-center'],
  actions: {
    newVideo(url) {
      this.set('featuredUrl', url)
      console.log(this.get('featuredUrl'))
    }
  }

});
