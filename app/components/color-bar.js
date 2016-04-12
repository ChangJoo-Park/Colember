import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['colorBar'],
  attributeBindings: ['style'],
  style: function() {
		return Ember.String.htmlSafe(`background-color: ${this.color}`);
  }.property('color'),
  init() {
    this._super();
  },
  didInsertElement() {
    this._super(...arguments);
  }
});
