var SocialAppDispatcher = require('../dispatcher/SocialAppDispatcher'),
		SocialConstants = require('../constants/SocialConstants'),
		EventEmitter = require('events').EventEmitter,
		assign = require('object-assign'),
		PostUtils = require('../utils/PostUtils')

var ActionTypes = SocialConstants.ActionTypes
var CHANGE_EVENT = 'change'

var _posts = {}

var PostStore = assign({}, EventEmitter.prototype, {
	
	emitChange: function () {
		this.emit(CHANGE_EVENT)
	},

	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback)
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback)
	},

	get: function (id) {
		return _posts[id]
	},

	getAll: function () {
		return _posts
	},

	getAllForPosts: function () {
		var postGroup = []
		for (var id in _posts) {
			postGroup.push(_posts[id])
		}
		return postGroup
	}

})

SocialAppDispatcher.register(function(action){
	switch(action.actionType) {
		case ActionTypes.CREATE_POST:
			var post = PostUtils.getCreatedPostData(action.post)
			_posts[post.id] = post
			PostStore.emitChange()
			break
		default:
	}
})

module.exports = PostStore