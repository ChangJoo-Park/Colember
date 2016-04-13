import Ember from 'ember';

export default Ember.Component.extend({
  sortedPallets: Ember.computed.sort('pallets', 'sortDefinition'),
  sortDefinition: ['createdAt:desc'],
});
