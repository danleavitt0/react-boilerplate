var React = require('react'),
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
	render: function () {
	return (
		<ToolbarGroup className="AddButton">
			<IconButton onClick={this.openModal} tooltip="Add Post">
				<AddButtonImage />
			</IconButton>
			<Dialog className="post-dialog" ref="standardDialog" title="Post Form">
				<PostForm profile={this.props.profile} dialog={this} ref="postForm"/>
			</Dialog>
		</ToolbarGroup>
	)}
})

module.exports = AddButton