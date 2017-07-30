
function SignupController(){
  this.message = 'come on and signup'
  this.user = {};
  this.signup = signup;

  function signup(){
    console.log('Now signing up');
  }
}

SignupController.$inject = [];

module.exports = SignupController;
