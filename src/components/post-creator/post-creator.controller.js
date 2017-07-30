
function PostCreatorController(){
  this.message = 'creating a new post';
  this.post = {};
  this.create = create;

  function create(){
    console.log('Now creating a post');
  }
}

PostCreatorController.$inject = [];

module.exports = PostCreatorController;
