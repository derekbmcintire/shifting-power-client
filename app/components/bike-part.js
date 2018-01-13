import Ember from 'ember';

export default Ember.Component.extend({
  message: '',
  actions: {
    backWheelVideo() {
      this.sendAction('newVideo', 'https://www.youtube.com/embed/r5krHXaKct0');
    },
    frontWheelVideo() {
      this.sendAction('newVideo', 'https://www.youtube.com/embed/YrGDT2HV6As');
    },
    cassetteVideo() {
      this.sendAction('newVideo', 'https://www.youtube.com/embed/7arx9VxVJpw');
    },
    cranksVideo() {
      this.sendAction('newVideo', 'https://www.youtube.com/embed/vHc4dTbo9r0');
    },
    chainVideo() {
      this.sendAction('newVideo', 'https://www.youtube.com/embed/cw8RemKLesw');
    },
    frontDerVideo() {
      this.sendAction('newVideo', 'https://www.youtube.com/embed/rt-DkIuwMf8');
    },
    rearDerVideo() {
      this.sendAction('newVideo', 'https://www.youtube.com/embed/3BX64Qh94e0');
    },
    hubVideo() {
      this.sendAction('newVideo', 'https://www.youtube.com/embed/9j-X7xvbMT0');
    },
    brakesVideo() {
      this.sendAction('newVideo', 'https://www.youtube.com/embed/lN-wU5wto2c');
    },
    bbVideo() {
      this.sendAction('newVideo', 'https://www.youtube.com/embed/0J7Mhk6Ue3E');
    },
    headsetVideo() {
      this.sendAction('newVideo', 'https://www.youtube.com/embed/83tMWwJXPE4');
    },
    shiftingVideo() {
      this.sendAction('newVideo', 'https://www.youtube.com/embed/3BX64Qh94e0');
    },
    cablesVideo() {
      this.sendAction('newVideo', 'https://www.youtube.com/embed/74PxfRcybfs');
    },
    backWheel() {
      this.set('message', 'Back Wheel');
    },
    frontWheel() {
      this.set('message', 'Front Wheel');
    },
    cranks() {
      this.set('message', 'Cranks');
    },
    pedals() {
      this.set('message', 'Pedals');
    },
    chain() {
      this.set('message', 'Chain');
    },
    frontDer() {
      this.set('message', 'Front Derailleur');
    },
    rearDer() {
      this.set('message', 'Rear Derailleur');
    },
    frontHub() {
      this.set('message', 'Front Hub');
    },
    rearHub() {
      this.set('message', 'Rear Hub');
    },
    frontBrake() {
      this.set('message', 'Front Brake');
    },
    rearBrake() {
      this.set('message', 'Rear Brake');
    },
    bottomBracket() {
      this.set('message', 'Bottom Bracket');
    },
    headset() {
      this.set('message', 'Headset');
    },
    paddles() {
      this.set('message', 'Shifters');
    },
    levers() {
      this.set('message', 'Brake Levers');
    },
    cables() {
      this.set('message', 'Cables and Housing');
    },
    cassette() {
      this.set('message', 'Cassette/Freewheel');
    },
    resetMessage() {
      this.set('message', '');
    }
  }
});
