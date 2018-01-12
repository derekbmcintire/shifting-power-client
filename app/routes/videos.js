import Ember from 'ember';

export default Ember.Route.extend({
  messages: {
    hello: 'hello'
  },
  actions: {
    backWheel() {
      console.log('backwheel')
    }
  }
});
