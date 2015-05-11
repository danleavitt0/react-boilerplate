var React = require('react'),
		mui = require('material-ui'),
		Form = require('lib/Form.jsx'),
		Input = require('lib/Input.jsx'),
		PostActions = require('lib/actions/PostActions'),
		TextField = mui.TextField

var PostForm = React.createClass({

	handleSubmit: function (e) {
		e.preventDefault()
	},

	render:function () {
	return(
		<Form ref="form" className="newPostForm">
			<div class="md-inputs">
				<Input 
					hintText="Post Title"
					name="postTitle"
					require={true}
				/>
				<Input 
					hintText="What's on your mind?"
					multiLine={true}
					name="postText"
					require={true}
				/>
			</div>
			<div className="actions">
				<FlatButton
					label = "Cancel"
					secondary = {true}
					onClick = {this._closeModal}
				/>
				<FlatButton
					label = "Post"
					primary = {true}
					onClick = {this._submitPost}
				/>
			</div>
		</Form>
	)},

	_closeModal: function () {
		this.props.dialog.refs.standardDialog.dismiss()
	},

	_submitPost: function () {
		var fields = this.refs.form.handleSubmit()
		fields.authorName = "This User"
		if (fields) {
			PostActions.create(fields)
			this.props.dialog.refs.standardDialog.dismiss()
		}
	}

})

module.exports = PostForm