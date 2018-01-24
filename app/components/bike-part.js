import Ember from 'ember';

export default Ember.Component.extend({
  message: '',
  classNames: ['bike-wrap'],
  classNameBindings: ['wheelBg', 'crankBg', 'cableBg', 'leverBg', 'paddleBg', 'headsetBg', 'brakeBg', 'hubBg', 'rearDerBg', 'frontDerBg', 'chainBg', 'pedalBg', 'cassetteBg', 'bbBg', 'emptyBg'],
  wheelBg: false,
  crankBg: false,
  cableBg: false,
  leverBg: false,
  paddleBg: false,
  headsetBg: false,
  brakeBg: false,
  hubBg: false,
  rearDerBg: false,
  frontDerBg: false,
  chainBg: false,
  pedalBg: false,
  cassetteBg: false,
  bbBg: false,
  emptyBg: false,
  actions: {
    onHover(name, msg) {
      this.toggleProperty(name)
      this.set('message', msg);
    },
    // this sends an action called getVideo up to the bike-video-container
    // template and passes '11' as an argument.
    // '11' represents the id of a tag which links this part to any number
    // of related videos. In the future I would like each bike part
    // to have multiple tags, so I will need to change getVideo to accept
    // an array of tags and iterate through them, finding all the correct
    // videos. In addition to that, the video that is most directly
    // related to the part that was clicked on should be displayed
    // as the first video.
    getVideo(tagId) {
      this.sendAction('getVideo', tagId)
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
