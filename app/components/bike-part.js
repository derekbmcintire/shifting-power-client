import Ember from 'ember';

export default Ember.Component.extend({
  message: '',
  actions: {
    backWheel() {
      this.set('message', 'Back Wheel')
    },
    frontWheel() {
      this.set('message', 'Front Wheel')
    },
    cranks() {
      this.set('message', 'Cranks')
    },
    pedals() {
      this.set('message', 'Pedals')
    },
    chain() {
      this.set('message', 'Chain')
    },
    frontDer() {
      this.set('message', 'Front Derailleur')
    },
    rearDer() {
      this.set('message', 'Rear Derailleur')
    },
    frontHub() {
      this.set('message', 'Front Hub')
    },
    rearHub() {
      this.set('message', 'Rear Hub')
    },
    frontBrake() {
      this.set('message', 'Front Brake')
    },
    rearBrake() {
      this.set('message', 'Rear Brake')
    },
    bottomBracket() {
      this.set('message', 'Bottom Bracket')
    },
    resetMessage() {
      this.set('message', '')
    }
  }
});
