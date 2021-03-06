var SocialAppDispatcher = require('../dispatcher/SocialAppDispatcher'),
		SocialConstants = require('../constants/SocialConstants'),
		EventEmitter = require('events').EventEmitter,
		assign = require('object-assign')

var ActionTypes = SocialConstants.ActionTypes
var CHANGE_EVENT = 'change'

var lock = new Auth0Lock('1Op7z5Uf42va8XEfcYBL3nTn4o3jRlCn', 'danleavitt.auth0.com')
var idToken
var user

var ProfileStore = assign({}, EventEmitter.prototype, {

	emitChange: function () {
		this.emit(CHANGE_EVENT)
	},

	addChangeListener: function (callback) {
		this.on(CHANGE_EVENT, callback)
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback)
	},

	login: function () {
		lock.show()
	},

	getIdToken: function() {
    idToken = localStorage.getItem('userToken')
    var authHash = lock.parseHash(window.location.hash)
    if (!idToken && authHash) {
      if (authHash.id_token) {
        idToken = authHash.id_token
        localStorage.setItem('userToken', authHash.id_token)
      }
      if (authHash.error) return null;
    }
    lock.getProfile(idToken, function (err, profile) {
      if (err) {
        user = null
      }
      user = profile
      this.emitChange()
  	}.bind(this))
  },

  getProfile: function () {
  	return user
	}

})

SocialAppDispatcher.register(function(action){
	switch (action.actionType) {
		case ActionTypes.CHECK_LOGIN:
			ProfileStore.getIdToken()
			break
		case ActionTypes.LOGIN_USER:
			ProfileStore.login()
			break
		case ActionTypes.LOGOUT_USER:
			user = null
			localStorage.removeItem('userToken')
			ProfileStore.emitChange()
			break
		default:
	}
})

module.exports = ProfileStore