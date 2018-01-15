import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  rating: null,
  updatedRating: Ember.computed('rating', function () {
    return this.getProperties('rating').rating
  }),
  actions: {
    change(){
      console.log(this.get('updatedRating'));
    }
  }
});
