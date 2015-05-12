var React = require('react'),
	mui = require('material-ui'),
	LoginButton = require('lib/login.jsx'),
	MenuButton = require('lib/menuButton.jsx'),
	AddButton = require('lib/AddButton.jsx'),
	Toolbar = mui.Toolbar,
	ToolbarGroup = mui.ToolbarGroup

var iconStyle = {
	margin: '9px'
}

var TopBar = React.createClass({
	getDefaultProps: function () {
		return {
			title: 'Add A Title'
		}
	},
	render: function () {
	return(
		<Toolbar className="main-nav">
			<h3> {this.props.title} </h3>
			<MenuButton />
			<AddButton />
			<LoginButton profile={this.props.profile} lock={this.props.lock} label="login" />
		</Toolbar>
	)}
})

module.exports = TopBar
