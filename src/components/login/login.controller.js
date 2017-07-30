
function LoginController(){
  this.message = 'Welcome to the Login'
  this.user = {};
  this.login = login;

  function login(){
    console.log('logging in');
  }
}

LoginController.$inject = [];

module.exports = LoginController;
