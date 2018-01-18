import Ember from 'ember';

export default Ember.Component.extend({
  featuredUrl: '',
  classNames: ['text-center'],
  actions: {
    // send the getVideo action to the index route template
    getVideo(tagId) {
      this.sendAction('getVideo', tagId);
    }
  }

});
