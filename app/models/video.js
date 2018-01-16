import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  url: DS.attr('string'),
  ratings: DS.hasMany('userrating'),
  numRatings: Ember.computed.mapBy('ratings', 'rating'),
  sum: Ember.computed.sum('numRatings'),
  length: Ember.computed('numRatings', function () {
    return this.get('numRatings').length
  }),
  avg: Ember.computed('length', 'sum', function () {
    return Math.round(this.get('sum') / this.get('length'))
  })
});
