import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['videos-wrap'],
  actions: {
    // assign the video to the rating object that is passed to
    // create, update and delete and send the action up to the index
    // route template
    newRating(rating){
      this.sendAction('newRating', rating);
    },
    // assign the video to the rating object above
    // send action up to index route template
    delRate(rating) {
      this.sendAction('delRate', rating);
    }
  }
});
