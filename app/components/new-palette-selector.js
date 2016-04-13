import Ember from 'ember';
import faker from 'faker';

export default Ember.Component.extend({
	colorSet: [],
	willRender() {
		this.set('colorSet', []);
    let colorLength = 4;
    for(var i = 0 ; i < colorLength ; i++) {
      let newColor = faker.internet.color();
     this.colorSet.push(newColor);
    }
    this.sendAction('changePalette', this.get('colorSet'));
	},
	actions: {
    userChangeColor(index, oldColor, newColor) {
      this.set(`colorSet.${index}`, newColor);
      this.sendAction('changePalette', this.get('colorSet'));
    },
	}
});
