/*global Ember */
import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  url: DS.attr('string'),
  ratings: DS.hasMany('userrating'),
  users: DS.hasMany('user'),
  rated: DS.attr('boolean'),
  // maps through ratings objects and pulls out the rating property
  // returns an array of integers that represent all of one videos ratings
  numRatings: Ember.computed.mapBy('ratings', 'rating'),
  // returns the sum of a videos ratings
  sum: Ember.computed.sum('numRatings'),
  // returns the number of ratings a video has
  length: Ember.computed('numRatings', function () {
    return this.get('numRatings').length;
  }),
  one: Ember.computed('length', function () {
    if (this.get('length') === 1) {
      return true
    }
  }),
  // returns the average rating of a video
  avg: Ember.computed('length', 'sum', function () {
    return Math.round(this.get('sum') / this.get('length'));
  })
});
