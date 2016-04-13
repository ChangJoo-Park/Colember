import Ember from 'ember';

export default Ember.Component.extend({
  sortedPalettes: Ember.computed.sort('palettes', 'sortDefinition'),
  sortDefinition: ['createdAt:desc'],
});
