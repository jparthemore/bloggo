function AuthService(){
  return {
    login: login,
    signup: signup,
    getToken: getToken,
    isLoggedIn: isLoggedIn,
    getUser: getUser
  }
  function login(user){
    console.log('logging in');
  }
  function signup(user){
    console.log('signing up');
  }
  function getToken(){
    console.log('getting token');
  }
  function isLoggedIn(){
    console.log('determining whether you are logged in');
  }
  function getUser(){
    console.log('getting the user')
  }
}

AuthService.$inject = []

module.exports = AuthService;
