var React = require('react'),
		mui = require('material-ui'),
		Paper = mui.Paper


var Card = React.createClass({
	render: function () {
		return(
			<Paper className="md-card" z-depth={1} rounded={true} >
				<div className="md-card-container">
					{this.props.children}
				</div>
			</Paper>
		)
	}
})

module.exports = Card