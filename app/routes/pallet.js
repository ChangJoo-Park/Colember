import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('pallet',{ orderBy: 'createdAt'});
  },

  actions: {
    newPallet() {
      this.transitionTo('pallet.new');
    }
  }
});
