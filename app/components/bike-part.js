import Ember from 'ember';

export default Ember.Component.extend({
  message: '',
  messages: {
    backWheel: 'back wheel',
    frontWheel: 'front wheel',
    cranks: 'cranks',
    pedals: 'pedals'
  },
  actions: {
    backWheel() {
      this.set('message', this.get('messages.backWheel'))
    },
    frontWheel() {
      this.set('message', this.get('messages.frontWheel'))
    },
    cranks() {
      this.set('message', this.get('messages.cranks'))
    },
    pedals() {
      this.set('message', this.get('messages.pedals'))
    },
    resetMessage() {
      this.set('message', '')
    }
  }
});
