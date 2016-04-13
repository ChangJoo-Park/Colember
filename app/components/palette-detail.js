import Ember from 'ember';

export default Ember.Component.extend({
	colorFormat: 1,
	formattedColorSet: Ember.computed('colorFormat', function(){
		let colors = this.get('colors');
		var formatted = [];
		colors.forEach(function(color){
			let colorValue = color.get('rgb');
			formatted.push(colorValue);
		});
		return formatted;
	}),
	colorFormatChanged: Ember.observer('colorFormat', function(){
		console.log(`${this.get('formattedColorSet')}`);
	}),
});