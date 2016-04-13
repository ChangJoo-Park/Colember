import Ember from 'ember';
import faker from 'faker';

export default Ember.Controller.extend({
  colorSet: [],
  actions: {
    savePalette() {
      let newPalette = this.store.createRecord('palette', {
        createdAt: new Date()
      });

      // Color
      let colors = this.get('colorSet');
      let that = this;
      colors.forEach(function(color){
        let newColor = that.store.createRecord('color',{
          rgb: color,
          palette: newPalette
        });
        newColor.save();
        newPalette.get('colors').pushObject(newColor);
      });
      newPalette.save();
      this.transitionToRoute('palette');
    },
    userChangeColor(index, oldColor, newColor) {
      this.set(`colorSet.${index}`, newColor);
    },
    changePalette(colors) {
      this.set('colorSet', colors);
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
