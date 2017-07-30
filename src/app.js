const angular = require('angular');

//component imports
const NavigationComponent = require('./components/navigation');
const HomeComponent = require('./components/home');
const LoginComponent = require('./components/login');


angular.module('bloggo', [])
      .component('home', HomeComponent)
      .component('navigation', NavigationComponent)
      .component('login', LoginComponent);
