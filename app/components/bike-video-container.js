import Ember from 'ember';

export default Ember.Component.extend({
  featuredUrl: '',
  actions: {
    backWheelVideo(url) {
      console.log('backWheel in bike-video-container')
      this.set('featuredUrl', url)
      console.log(this.get('featuredUrl'))
    }
  }

});
