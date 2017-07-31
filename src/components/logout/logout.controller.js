
function LogoutController(){
  this.logout = logout;

  function logout(){
    console.log('now logging out');
  }
}

LogoutController.$inject = [];

module.exports = LogoutController;
