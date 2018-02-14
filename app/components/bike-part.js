import Ember from 'ember';

export default Ember.Component.extend({
  message: '',
  classNames: ['bike-wrap'],
  // classes are bound to property of same name and change image
  // background when toggled
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
    // toggles passed class and displays bike part name in message element
    onHover(name, msg) {
      this.toggleProperty(name)
      this.set('message', msg);
    },
    // sends action getVideo up to bike-video-container component
    // template and passes tagId as an argument.
    // tagId represents the id of a tag which links this part to any number
    // of related videos. In the future I would like each bike part
    // to have multiple tags, so I will need to change getVideo to accept
    // an array of tags and iterate through them, finding all the correct
    // videos. In addition to that, the video that is most directly
    // related to the part that was clicked on should be displayed
    // as the first video.
    getVideo(tagId) {
      this.sendAction('getVideo', tagId)
    }
  }
});
