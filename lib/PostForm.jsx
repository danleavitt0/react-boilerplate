var React = require('react'),
		mui = require('material-ui'),
		TextField = mui.TextField

var PostForm = React.createClass({
	render:function () {
	return(
		<div className="newPostForm">
			<TextField 
				hintText="Post Title"
			/>
			<TextField 
				hintText="What's on your mind?"
				multiLine={true}
			/>
		</div>
	)}
})

module.exports = PostForm