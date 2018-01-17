import Ember from 'ember';

export default Ember.Component.extend({
  message: '',
  actions: {
    backWheelVideo() {
      // this sends an action called getVideo up to the bike-video-container
      // template and passes '11' as an argument.
      // '11' represents the id of a tag which links this part to any number
      // of related videos. In the future I would like each bike part
      // to have multiple tags, so I will need to change getVideo to accept
      // an array of tags and iterate through them, finding all the correct
      // videos. In addition to that, the video that is most directly
      // related to the part that was clicked on should be displayed
      // as the first video.
      this.sendAction('getVideo', '11');
    },
    frontWheelVideo() {
      this.sendAction('getVideo', '11');
    },
    cassetteVideo() {
      this.sendAction('getVideo', '8');
    },
    cranksVideo() {
      this.sendAction('getVideo', '8');
    },
    chainVideo() {
      this.sendAction('getVideo', '8');
    },
    frontDerVideo() {
      this.sendAction('getVideo', '9');
    },
    rearDerVideo() {
      this.sendAction('getVideo', '9');
    },
    hubVideo() {
      this.sendAction('getVideo', '10');
    },
    brakesVideo() {
      this.sendAction('getVideo', '12');
    },
    bbVideo() {
      this.sendAction('getVideo', '10');
    },
    headsetVideo() {
      this.sendAction('getVideo', '10');
    },
    shiftingVideo() {
      this.sendAction('getVideo', '9');
    },
    cablesVideo() {
      this.sendAction('getVideo', '13');
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
