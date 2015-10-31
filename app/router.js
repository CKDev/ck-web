import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('view1');
  this.route('view2');
  this.route('view3');
  this.route('view4');
  this.route('view5');
  this.route('view6');
  this.route('view7');
  this.route('view8');
  this.route('view9');
});

export default Router;
