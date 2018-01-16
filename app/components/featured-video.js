import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  user: Ember.computed.alias('auth.credentials.id'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  rating: {
    rating: null,
    video: null
  },
  updatedRating: Ember.computed('rating', function () {
    return this.getProperties('rating').rating
  }),
  actions: {
    change(video){
      this.set('rating.video', video)
      this.sendAction('newRating', this.get('rating'))
      console.log('rating is: ', this.get('rating'));
      console.log('video id is: ', this.get('rating').video)
    }
  }
});
