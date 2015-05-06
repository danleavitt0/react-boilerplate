var React = require('react'),
		mui = require('material-ui'),
		Paper = mui.Paper


var Card = React.createClass({
	render: function () {
		return(
			<Paper className="md-card" z-depth={1} rounded={true} >
				<div className="md-card-container">
					<h3 className="title"> {this.props.post.authorName} </h3>
					<div className="body">
						{this.props.post.text}
					</div>
				</div>
			</Paper>
		)
	}
})

module.exports = Card