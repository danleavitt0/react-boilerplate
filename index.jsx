var React = require('react'),
		Toolbar = require('lib/toolbar.jsx'),
		LoginButton = require('lib/login.jsx'),
		MenuButton = require('lib/menuButton.jsx')

var App = React.createClass({
	handleClick: function() {
		console.log('click');
	},
	render: function() {
	return (
		<div className = "main-container">
			<Toolbar title = "InstaBook">
				<MenuButton />
				<LoginButton handleClick={this.handleClick} label="login" />
			</Toolbar>
		</div>
	)}
})

React.render(<App />, document.getElementById('container'))
