import Ember from 'ember';

export default Ember.Component.extend({
  // build the rating object that will be passed to create, udpate and delete
  rating: {
    rating: null,
    video: null
  },
  actions: {
    clearForm() {
      setTimeout(() => {
        this.set('rating.rating', null)
      }, 1000)

    },
    // assign the video to the rating object that is passed to
    // create, update and delete and send the action up to the index
    // route template
    change(video){
      this.set('rating.video', video);
      this.sendAction('change', this.get('rating'));
    },
    // assign the video to the rating object above
    // send action up to index route template
    delRate(video){
      this.sendAction('delRate', video);
    }
  }
});
