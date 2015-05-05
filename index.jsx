require('lib/style.less');

var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

var React = require('react'),
		Toolbar = require('lib/toolbar.jsx'),
		LoginButton = require('lib/login.jsx'),
		MenuButton = require('lib/menuButton.jsx'),
		AddButton = require('lib/AddButton.jsx')

var App = React.createClass({
	render: function() {
	return (
		<div className = "main-container">
			<Toolbar title = "InstaBook">
				<MenuButton />
				<AddButton />
				<LoginButton handleClick={this.handleClick} label="login" />
			</Toolbar>
		</div>
	)}
})

React.render(<App />, document.getElementById('container'))
