import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  classNames: ['video-component'],

  actions: {
    // assign the video to the rating object that is passed to
    // create, update and delete and send the action up to the index
    // route template
    change(rating){
      this.sendAction('newRating', rating);
    },
    // assign the video to the rating object above
    // send action up to index route template
    delRate(video) {
      this.sendAction('delRate', video);
    }
  }
});
