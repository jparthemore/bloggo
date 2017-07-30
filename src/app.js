const angular = require('angular');

//component imports
const NavigationComponent = require('./components/navigation');
const HomeComponent = require('./components/home');

angular.module('bloggo', [])
      .component('home', HomeComponent)
      .component('navigation', NavigationComponent);
