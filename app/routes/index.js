import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('video');

  },
  classNames: ['text-center'],
  message: 'hello',
  auth: Ember.inject.service(),
  rate: Ember.inject.service('userrating'),
  user: Ember.computed.alias('auth.credentials.id'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  flashMessages: Ember.inject.service(),
  actions: {

    // transitions a user to a specific videos route
    getVideo(id) {
      return this.transitionTo('videos', id);
  },
  doRefresh() {
    this.refresh()
  },
  delRate(video) {
    this.get('rate').delRate(video);
   //  let self = this
   //  let promise = new Ember.RSVP.Promise(function(resolve, reject){
   //   resolve(self.get('rate').delRate(video));
   // });
   // promise.then(() => {
   //   console.log('promise resolved')
   //   self.refresh()
   // })

    // setTimeout(()=>{
    //   this.transitionTo('change-password')
    //   this.transitionTo('index')
    // }, 2000)

  },
  newRating(rating) {
    this.get('rate').newRating(rating);
  }
  }
});
