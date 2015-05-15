require('lib/style.less')

var React = require('react'),
		injectTapEventPlugin = require('react-tap-event-plugin'),
		Toolbar = require('lib/toolbar.jsx'),
		PostContainer = require('lib/PostContainer.jsx'),
		ProfileStore = require('lib/stores/ProfileStore'),
		ProfileActions = require('lib/actions/ProfileActions')

injectTapEventPlugin()

var App = React.createClass({

	getInitialState: function() {
		return {
			profile: ProfileActions.checkForLogin()
		};
	},

	componentDidMount: function() {
		ProfileStore.addChangeListener(this._onchange)
	},

	componentWillUnmount: function() {
		ProfileStore.removeChangeListener(this._onchange)
	},

	render: function() {
	return (
		<div className="main-container">
			<Toolbar profile={this.state.profile} title="InstaBook" />
			<PostContainer />
		</div>
	)},

	_onchange: function () {
		this.setState({
			profile: ProfileStore.getProfile()
		})
	}

})



React.render(<App />, document.getElementById('container'))
