import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('video');
  },
  classNames: ['text-center'],
  auth: Ember.inject.service(),
  rate: Ember.inject.service('userrating'),
  user: Ember.computed.alias('auth.credentials.id'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  flashMessages: Ember.inject.service(),
  actions: {
  // transitions a user to a specific videos route
  getVideo(id) {
    return this.transitionTo('videos', id);
  },
  // accesses the userrating service delRate function
  // deletes an existing userrating
  delRate(video) {
    this.get('rate').delRate(video);
  },
  // accesses the userrating service newRating function
  // updates an existing userrating, OR if a user has not already
  // rated the video, creates a new userrating
  newRating(rating) {
    this.get('rate').newRating(rating);
  }
  }
});
