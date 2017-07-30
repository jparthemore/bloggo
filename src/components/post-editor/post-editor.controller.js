
function PostEditorController(){
	this.message = 'hello';
	this.post = {title: 'Some Post Editing', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'};
	this.edit = edit;

	function edit(){
		console.log('Now editing the post');
	}
}

PostEditorController.$inject = [];

module.exports = PostEditorController;
