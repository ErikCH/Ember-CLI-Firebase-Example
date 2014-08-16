import Ember from 'ember';

var Router = Ember.Router.extend({
  location: Firetest1ENV.locationType
});

Router.map(function() {

this.route('posts');
});

export default Router;
