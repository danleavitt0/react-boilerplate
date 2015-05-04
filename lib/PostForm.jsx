var React = require('react'),
		mui = require('material-ui'),
		TextField = mui.TextField

var textFieldStyles = {
	display:"block",
	margin:"5px"
}

var PostForm = React.createClass({
	render:function () {
	return(
		<div className="newPostForm">
			<TextField 
				hintText="Post Title"
				style={textFieldStyles}
			/>
			<TextField 
				hintText="What's on your mind?"
				multiLine={true}
				style={textFieldStyles}
			/>
		</div>
	)}
})

module.exports = PostForm