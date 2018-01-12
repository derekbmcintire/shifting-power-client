import Ember from 'ember';

export default Ember.Route.extend({
  message: {
    hello: 'hello'
  },
  actions: {
    backWheel() {
      console.log('backwheel')
    }
  }
});
