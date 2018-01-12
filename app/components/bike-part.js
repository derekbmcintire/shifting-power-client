import Ember from 'ember';

export default Ember.Component.extend({
  message: '',
  messages: {
    backWheel: 'back wheel'
  },
  actions: {
    backWheel() {
      this.set('message', this.get('messages.backWheel'))
      // return this.sendAction('backWheel')
    },
    resetMessage() {
      this.set('message', '')
    }
  }
});
