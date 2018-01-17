import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('tag', params.tag_id)
  },
  auth: Ember.inject.service(),
  rate: Ember.inject.service('userrating'),
  user: Ember.computed.alias('auth.credentials.id'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  actions: {
    delRate(rating) {
      this.get('rate').delRate(rating)
    },
    newRating(rating) {
      this.get('rate').newRating(rating)
    }
  }
});
