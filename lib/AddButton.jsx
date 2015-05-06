var React = require('react'),
		PostActions = require('lib/actions/PostActions')
		AddButtonImage = require('lib/AddButtonImage.jsx'),
		PostForm = require('lib/PostForm.jsx')
		mui = require('material-ui'),
		IconButton = mui.IconButton,
		FlatButton = mui.FlatButton,
		ToolbarGroup = mui.ToolbarGroup,
		Dialog = mui.Dialog



var AddButton = React.createClass({
	openModal: function () {
		this.refs.standardDialog.show();
	},
	_closeModal: function () {
		this.refs.standardDialog.dismiss();
	},
	_submitPost: function () {
		PostActions.create({authorName:'Jesus', text:'Aint this a trip'})
		this.refs.standardDialog.dismiss();
	},
	render: function () {
	return (
		<ToolbarGroup className="AddButton">
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
		</ToolbarGroup>
	)}
})

module.exports = AddButton