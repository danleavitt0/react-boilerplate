var React = require('react'),
		AddButtonImage = require('lib/AddButtonImage.jsx'),
		PostForm = require('lib/PostForm.jsx'),
		mui = require('material-ui'),
		IconButton = mui.IconButton,
		Dialog = mui.Dialog,
		FlatButton = mui.FlatButton

var standardActions = [
  { text: 'Cancel' },
  { text: 'Submit', onClick: this._onDialogSubmit, ref: 'submit' }
];

var customActions = [
	<FlatButton
		label = "Cancel"
		secondary = {true}
		onTouchTap = {this._closeModal}
	/>,
	<FlatButton
		label = "Post"
		primary = {true}
		onTouchTap = {this._submitPost}
	/>
]

var AddButton = React.createClass({
	openModal: function () {
		this.refs.standardDialog.show();
	},
	_closeModal: function () {
		console.log('close modal');
		this.refs.standardDialog.hide();
	},
	_submitPost: function () {
		console.log('submit post');
	},
	render: function () {
	return (
		<div>
			<IconButton onClick={this.openModal} tooltip="Add Post">
				<AddButtonImage />
			</IconButton>
			<Dialog
				ref = "standardDialog"
				title = "Create Post"
				actions = {customActions}
				dismissOnClickAway={true}
			/>		
		</div>
	)}
})

module.exports = AddButton