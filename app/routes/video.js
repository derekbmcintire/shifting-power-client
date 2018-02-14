import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('video', params.video_id);
  },
  auth: Ember.inject.service(),
  rate: Ember.inject.service('userrating'),
  user: Ember.computed.alias('auth.credentials.id'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  actions: {
    // accesses the userrating service delRate function
    // deletes an existing userrating
    delRate(rating) {
      this.get('rate').delRate(rating);
    },
    // accesses the userrating service newRating function
    // updates an existing userrating, OR if a user has not already
    // rated the video, creates a new userrating
    newRating(rating) {
      this.get('rate').newRating(rating);
    }
  }
});
