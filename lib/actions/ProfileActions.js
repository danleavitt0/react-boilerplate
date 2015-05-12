var SocialAppDispatcher = require('../dispatcher/SocialAppDispatcher')
var SocialConstants = require('../constants/SocialConstants')

var ActionTypes = SocialConstants.ActionTypes

module.exports = {

	login: function () {
		SocialAppDispatcher.dispatch({
			actionType: ActionTypes.LOGIN_USER
		})
	},

	checkForLogin: function () {
		SocialAppDispatcher.dispatch({
			actionType: ActionTypes.CHECK_LOGIN
		})
	},

	logout: function () {
		SocialAppDispatcher.dispatch({
			actionType: ActionTypes.LOGOUT_USER
		})
	}

}