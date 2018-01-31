import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    onHover(name, msg) {
      console.log('hovering')
      this.sendAction('onHover', name, msg);
    }
  }
});
