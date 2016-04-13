import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('palette', { path: '/' }, function() {
    this.route('new');
    this.route('show', { path: '/:id' });
  });
});

export default Router;
