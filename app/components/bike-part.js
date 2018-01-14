import Ember from 'ember';

export default Ember.Component.extend({
  message: '',
  actions: {
    backWheelVideo() {
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
