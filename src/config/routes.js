const PostDataResolve = require('./resolves/post-data.resolve');

function RouterConfig($routeProvider){
  $routeProvider//current page for front end
    .when('/',{
      template: '<home posts="$resolve.postData"></home>',
      resolve: {
        postData: PostDataResolve
      }
    })
    .when('/signup',{
      template: '<signup>/<signup>'
    })
    .when('/login',{
      template: '<login>/<login>'
    })
    .when('/profile',{
      template: '<profile>/<profile>'
    })
    .when('/create',{
      template: '<post-creator>/<post-creator>'
    })
    .when('/edit/:postId',{
      template: '<post-editor>/<post-editor>'
    })
    .when('/read/:postId',{
      template: '<post-reader>/<post-reader>'
    })
    .otherwise({
      redirectTo: '/'
    });
}

RouterConfig.$inject = ['$routeProvider']; //service that will tell Angular what to show and what routes

module.exports = RouterConfig;
