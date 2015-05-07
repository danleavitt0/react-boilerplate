var React = require('react'),
		mui = require('material-ui'),
		TextField = mui.TextField

var PostForm = React.createClass({
	getValues: function () {
		var titleInput = this.refs.postTitle.getValue()
		var textInput = this.refs.postText.getValue()
		if (titleInput && textInput) {
			_.each(this.refs, function(input){
				input.setValue(' ')
				input.clearValue()
			})
			return {
				title: titleInput,
				text: textInput
			}
		}
		else if (!titleInput) {
			this.refs.postTitle.setErrorText('This is a required field')
			return null
		}
		else if (!textInput) {
			this.refs.postText.setErrorText('This is a required field')
			return null
		}
	},
	clearError: function (e) {
		_.each(this.refs, function(input, i){
			var val = input.getValue()
			if(val)
				input.setErrorText('')
		})
	},
	render:function () {
	return(
		<div className="newPostForm">
			<TextField 
				hintText="Post Title"
				ref="postTitle"
				onChange={this.clearError}
			/>
			<TextField 
				hintText="What's on your mind?"
				multiLine={true}
				ref="postText"
				onChange={this.clearError}
			/>
		</div>
	)}
})

module.exports = PostForm