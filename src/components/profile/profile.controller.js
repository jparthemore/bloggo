
function ProfileController(){
  this.user = {
    email:'test@test.test'
  }
  this.userPosts = [
    { title: 'Post 1', body: 'asdfasdfasdfasdf'}
  ]
  
}

ProfileController.$inject = [];

module.exports = ProfileController;
