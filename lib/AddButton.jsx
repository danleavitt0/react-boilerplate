var React = require('react'),
		AddButtonImage = require('lib/AddButtonImage.jsx'),
		PostForm = require('lib/PostForm.jsx')
		mui = require('material-ui'),
		IconButton = mui.IconButton,
		FlatButton = mui.FlatButton,
		Dialog = mui.Dialog



var AddButton = React.createClass({
	openModal: function () {
		this.refs.standardDialog.show();
	},
	_closeModal: function () {
		console.log('close modal');
		this.refs.standardDialog.dismiss();
	},
	_submitPost: function () {
		console.log('submit post');
		this.refs.standardDialog.dismiss();
	},
	render: function () {
	return (
		<div>
			<IconButton onClick={this.openModal} tooltip="Add Post">
				<AddButtonImage />
			</IconButton>
			<Dialog className="post-dialog" ref="standardDialog" title="Post Form">
				<PostForm />
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
			</Dialog>
		</div>
	)}
})

module.exports = AddButton