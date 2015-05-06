
var React = require('react'),
		mui = require('material-ui'),
		Card = require('lib/Card.jsx'),
		PostStore = require('lib/stores/PostStore'),
		ColumnLayout = require('lib/ColumnLayout.jsx')

function getStateFromStores () {
	return {
		posts: PostStore.getAllForPosts()
	}
}

function getPostItem (post) {
	return (
		<Card 
			key = {post.id}
			post = {post}
		/>
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

	render: function () {

		if (Object.keys(this.state.posts).length < 1) {
      return null;
    }

		var postListItems = this.state.posts.map(getPostItem)

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