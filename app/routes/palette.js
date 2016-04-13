import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('palette',{ orderBy: 'createdAt'});
  },

  actions: {
    newPallet() {
      // this.transitionTo('palette.new');
    }
  }
});
