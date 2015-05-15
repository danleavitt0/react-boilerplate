var SocialAppDispatcher = require('../dispatcher/SocialAppDispatcher'),
		SocialConstants = require('../constants/SocialConstants'),
		EventEmitter = require('events').EventEmitter,
		assign = require('object-assign'),
		PostUtils = require('../utils/PostUtils'),
		Firebase = require('firebase')

var ActionTypes = SocialConstants.ActionTypes
var CHANGE_EVENT = 'change'

var fireBaseRef = new Firebase('https://scorching-inferno-9259.firebaseio.com/posts')
var _posts = {}

fireBaseRef.on("value", function(snapshot) {
	_posts = snapshot.val()	|| {}
	PostStore.emitChange()	
})

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

	remove: function (key) {
		fireBaseRef.child(key).remove()
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
			_posts[id].id = id
			postGroup.push(_posts[id])
		}
		return postGroup
	}

})

SocialAppDispatcher.register(function(action){
	switch(action.actionType) {
		case ActionTypes.CREATE_POST:
			var post = PostUtils.getCreatedPostData(action.post)
			fireBaseRef.push(post)
			break
		case ActionTypes.REMOVE_POST:
			PostStore.remove(action.key)
		default:
	}
})

module.exports = PostStore