import Ember from 'ember';
import tinyColor from 'npm:tinycolor2';

const formatType = {
  NAME: 1,
  HSV: 2,
  HSL: 3,
  HEX: 4,
  HEX8: 5,
  RGB: 6,
  RGBP: 7,
  Swift: 8,
  Android: 9,
  JAVA: 10,
  dotNet: 11,
};

export default Ember.Component.extend({
  colorFormat: 1,
  formattedColorSet: Ember.computed('colorFormat', function() {
    let colors = this.get('colors');
    let selectedFormat = this.get('colorFormat');
    var formatted = [];
    colors.forEach(function(color) {
      let colorValue = tinyColor(color.get('rgb'));
      var formattedColor = colorValue;
      switch (selectedFormat) {
        case formatType.NAME:
          formattedColor = colorValue;
          break;
        case formatType.HSV:
          formattedColor = colorValue.toHsvString();
          break;
        case formatType.HSL:
          formattedColor = colorValue.toHslString();
          break;
        case formatType.HEX:
          formattedColor = colorValue.toHexString();
          break;
        case formatType.HEX8:
          formattedColor = colorValue.toHex8String();
          break;
        case formatType.RGB:
          formattedColor = colorValue.toRgbString();
          break;
        case formatType.RGBP:
          formattedColor = colorValue.toPercentageRgbString();
          break;
        case formatType.Swift:
        	formattedColor = `UIColor(red: ${colorValue._r}, green: ${colorValue._g}, blue: ${colorValue._b}, alpha: 1.0)`;
          break;
        case formatType.Android:
        	formattedColor = `Color.argb(255, ${colorValue._r}, ${colorValue._g}, ${colorValue._b});`;
          break;
        case formatType.dotNet:
        	formattedColor = `Color.FromRgb(255, ${colorValue._r}, ${colorValue._g}, ${colorValue._b});`;
          break;
        case formatType.JAVA:
        	formattedColor = `new Color(255, ${colorValue._r}, ${colorValue._g}, ${colorValue._b});`;
          break;
        default:
          formattedColor = 'Please Select Color Type.'
          break;
      }
      formatted.push(formattedColor);
    });
    return formatted;
  }),
});
