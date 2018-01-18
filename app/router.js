import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('videos', {path: '/results/:tag_id'});
  this.route('video', { path: '/videos/:video_id'});
  this.route('index', {path: '/'})
});

export default Router;
