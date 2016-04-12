import Ember from 'ember';
import faker from 'faker';

export default Ember.Controller.extend({
  colorSet: [],
  actions: {
    savePallet() {
      let newPallet = this.store.createRecord('pallet', {
        createdAt: new Date()
      });

      // Color
      let colors = this.get('colorSet');
      let that = this;
      colors.forEach(function(color){
        let newColor = that.store.createRecord('color',{
          rgb: color,
          pallet: newPallet
        });
        newColor.save();
        newPallet.get('colors').pushObject(newColor);
      });
      newPallet.save();
      this.transitionToRoute('pallet');
    },
    userMovedColorPicker(index, oldColor, newColor) {
      this.set(`colorSet.${index}`, newColor);
    }
  },

  init(){
    let colorLength = 4;
    for(var i = 0 ; i < colorLength ; i++) {
      let newColor = faker.internet.color();
     this.colorSet.push(newColor);
    }
  }
});
