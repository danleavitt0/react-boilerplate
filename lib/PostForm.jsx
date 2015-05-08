var React = require('react'),
		Form = require('lib/Form.jsx')
		mui = require('material-ui'),
		TextField = mui.TextField

var PostForm = React.createClass({
	getValues: function () {

		_.each(this.refs, function(input) {
			if (!input.getValue())
				input.setErrorText('This is a required field')
		})

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
			this.refs.postTitle.setErrorText()
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
		<Form className="newPostForm">
			<TextField 
				hintText="Post Title"
				ref="postTitle"
				onChange={this.clearError}
				require={true}
			/>
			<TextField 
				hintText="What's on your mind?"
				multiLine={true}
				ref="postText"
				onChange={this.clearError}
			/>
		</Form>
	)}
})

module.exports = PostForm