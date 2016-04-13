import Ember from 'ember';
import _ from 'lodash';

let colorList = [
  "#1abc9c",
  "#2ecc71",
  "#3498db",
  "#9b59b6",
  "#34495e",
  "#16a085",
  "#27ae60",
  "#2980b9",
  "#8e44ad",
  "#2c3e50",
  "#f1c40f",
  "#e67e22",
  "#e74c3c",
  "#ecf0f1",
  "#95a5a6",
  "#f39c12",
  "#d35400",
  "#c0392b",
  "#bdc3c7",
  "#7f8c8d"
];


export default Ember.Component.extend({
	colorSet: [],
	willRender() {
		this.set('colorSet', []);
    let colorLength = 4;
    for(var i = 0 ; i < colorLength ; i++) {
      let newColor = colorList[_.random(0,colorList.length)];
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
