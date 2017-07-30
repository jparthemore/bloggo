const angular = require('angular');

//component imports
const NavigationComponent = require('./components/navigation');

angular.module('bloggo', [])
      .component('navigation', NavigationComponent);
