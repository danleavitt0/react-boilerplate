
var React = require('react'),
		mui = require('material-ui'),
		Card = require('lib/Card.jsx'),
		PostStore = require('lib/stores/PostStore'),
		PostActions = require('lib/actions/PostActions'),
		ColumnLayout = require('lib/ColumnLayout.jsx'),
		FlatButton = mui.FlatButton

function getStateFromStores () {
	return {
		posts: PostStore.getAllForPosts()
	}
}

function getPostItem (post,i) {
	return (
		<Card key={post.id}>
			<div className="post-info">
				<h4 className="author"> {post.authorName} </h4>
				<div className="date"> {post.date} </div>
			</div>
			<h3 className="title"> {post.title} </h3>
			<div className="body"> {post.text} </div>
			<FlatButton primary={true} onClick={this.remove.bind(this, i)}> Remove </FlatButton>
		</Card>
	)
}

var PostContainer = React.createClass({

	getInitialState: function() {
		return getStateFromStores()
	},

	componentDidMount: function() {
		PostStore.addChangeListener(this._onchange)
	},

	componentWillUnmount: function() {
		PostStore.removeChangeListener(this._onchange)
	},

	remove: function(i) {
		PostActions.remove(this.state.posts[i].id)
	},

	render: function () {

		if (Object.keys(this.state.posts).length < 1) {
      return null;
    }

		var postListItems = this.state.posts.map(getPostItem, this)

		return(
			<div className="post-section">
				<ColumnLayout cols="2">
					{postListItems}
				</ColumnLayout>
			</div>
		)

	},

	_onchange: function() {
		this.setState(getStateFromStores())
	}

})

module.exports = PostContainer