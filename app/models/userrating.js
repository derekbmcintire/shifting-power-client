import DS from 'ember-data';

export default DS.Model.extend({
  rating: DS.attr('number'),
  user: DS.belongsTo('user'),
  video: DS.belongsTo('video')
});
