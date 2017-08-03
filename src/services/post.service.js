/*jshint esversion: 6*/
const baseUrl = 'https://dry-river-84683.herokuapp.com';
function PostService($http){
  const postUrl = `${baseUrl}/posts`;
  return {
    get: get,
    getOne: getOne,
    create: create,
    update: update,
    delete: deleteOne
  }

  function get(){
    return $http.get(postUrl)
                //.then(response=>console.log(response));
                .then(response=>response.data.posts);
  }
  function getOne(postId){
    const url = `${postUrl}/${postId}`;
    return $http.get(url)
                .then(response =>response.data.posts[0]);
  }
  function create(post){
    return $http.post(postUrl, post);
  }
  function update(postId, postUpdates){
    const url = `${postUrl}/${postId}`;
    return $http.put(url, postUpdates);
  }
  function deleteOne(postId){
    const url = `${postUrl}/${postId}`;
    return $http.delete(url);
  }
}

PostService.$inject = ['$http'];


module.exports = PostService;
