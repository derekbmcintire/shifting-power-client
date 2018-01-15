import Ember from 'ember';

export default Ember.Component.extend({
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
