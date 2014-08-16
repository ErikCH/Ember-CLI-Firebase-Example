import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'firetest1', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'firetest1');

export default App;
