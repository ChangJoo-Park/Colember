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
    this.sendAction('changePallet', this.get('colorSet'));
	},
	actions: {
    userChangeColor(index, oldColor, newColor) {
    	console.log("component userChangeColor")
      this.set(`colorSet.${index}`, newColor);
      this.sendAction('changePallet', this.get('colorSet'));
    },
	}
});
