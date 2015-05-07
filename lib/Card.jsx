var React = require('react'),
		mui = require('material-ui'),
		Paper = mui.Paper


var Card = React.createClass({
	render: function () {
		return(
			<Paper className="md-card" z-depth={1} rounded={true} >
				<div className="md-card-container">
					<div className="post-info">
						<h4 className="author"> {this.props.post.authorName} </h4>
						<div className="date"> {this.props.post.date.toString()} </div>
					</div>
					<h3 className="title"> {this.props.post.title} </h3>
					<div className="body"> {this.props.post.text} </div>
				</div>
			</Paper>
		)
	}
})

module.exports = Card