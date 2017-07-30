function PostService(){

  return {
    get: get,
    getOne: getOne,
    create: create,
    update: update,
    delete: deleteOne
  }

  function get(){
    console.log('getting all of the posts');
  }
  function getOne(postId){
    console.log('getting one of the posts');
  }
  function create(post){
    console.log('creating a post');
  }
  function update(postId, postUpdates){
    console.log('updating a post');
  }
  function delete(postId){
    console.log('deleting a post');
  }
}

PostService.$inject = []


module.exports = PostService;
