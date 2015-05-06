require('lib/style.less');

var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

var React = require('react'),
		Toolbar = require('lib/toolbar.jsx'),
		PostContainer = require('lib/PostContainer.jsx')

var App = React.createClass({
	render: function() {
	return (
		<div className = "main-container">
			<Toolbar title = "InstaBook" />
			<PostContainer />
		</div>
	)}
})

React.render(<App />, document.getElementById('container'))
