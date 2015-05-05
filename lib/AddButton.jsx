var React = require('react'),
		AddButtonImage = require('lib/AddButtonImage.jsx'),
		PostForm = require('lib/PostForm.jsx'),
		mui = require('material-ui'),
		IconButton = mui.IconButton,
		Dialog = mui.Dialog,
		FlatButton = mui.FlatButton

var standardActions = [
  { text: 'Cancel' },
  { text: 'Submit', onClick: this.submitPost, ref: 'submit' }
];

var customActions = [
	<FlatButton
		label="Cancel"
		onClick={this.closeModal}
	/>
]

var AddButton = React.createClass({
	openModal: function () {
		this.refs.standardDialog.show();
	},
	closeModal: function () {
		this.refs.standardDialog.dismiss();
	},
	submitPost: function () {
		this.refs.standardDialog.dismiss();
		console.log('submit');
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