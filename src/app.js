const angular = require('angular');

//component imports
const NavigationComponent = require('./components/navigation');
const HomeComponent = require('./components/home');
const LoginComponent = require('./components/login');
const SignupComponent = require('./components/signup');
const PostReaderComponent = require('./components/post-reader');
const PostEditorComponent = require('./components/post-editor');

angular.module('bloggo', [])
      .component('home', HomeComponent)
      .component('navigation', NavigationComponent)
      .component('login', LoginComponent)
      .component('signup', SignupComponent)
      .component('postReader', PostReaderComponent)
      .component('postEditor', PostEditorComponent);
