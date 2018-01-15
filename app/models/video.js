import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  url: DS.attr('string'),
  ratings: DS.hasMany('userrating'),
  numRatings: Ember.computed.mapBy('ratings', 'rating'),
  sum: Ember.computed.sum('numRatings'),
  avg: Ember.computed('numRatings', 'sum', function () {
    let many = this.get('numRatings').length
    return Math.floor(sum / many)
  })
});
