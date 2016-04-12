import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('pallet');
  },

  actions: {
    newPallet() {
      console.log("New Pallet");
      // const pallet = this.store.createRecord('pallet', {
      //   createdAt: new Date()
      // });
      // pallet.save();

      this.transitionTo('pallet.new');
    }
  }
});
