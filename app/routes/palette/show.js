import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('palette', params.id);
  },

  actions: {
    deletePalette(id) {
    	let that = this;
      this.store.findRecord('palette', id).then(function(palette) {
        palette.destroyRecord().then(function(){
        	that.transitionTo('palette.index');
        })
      });
    }
  }
});
