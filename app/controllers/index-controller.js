import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
      doRefresh: function () {
        this.get('target.router').refresh();
      }
    }
});
