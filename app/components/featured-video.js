import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  user: Ember.computed.alias('auth.credentials.id'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  classNames: ['video-component'],

  // this picks out the rating property of the rating object that is passed
  // to create, update and delete
  // updatedRating: Ember.computed('rating', function () {
  //   return this.getProperties('rating').rating;
  // }),
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
