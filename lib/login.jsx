var React = require('react'),
	mui = require('material-ui'),
	ProfileStore = require('./stores/ProfileStore'),
	ProfileActions = require('./actions/ProfileActions'),
	RaisedButton = mui.RaisedButton,
	ToolbarGroup = mui.ToolbarGroup

var style = {
	float: 'right',
	padding: '0'
}

var LoginButton = React.createClass({

	getDefaultProps: function () {
		return {
			label: "Add a label"
		}
	},

	login: function () {
		ProfileActions.login()
	},

	logout: function () {
		ProfileActions.logout()
	},

	render: function () {
		if (this.props.profile) {
			imageStyle = {
				backgroundImage:'url('+this.props.profile.picture+')'
			}
			return (
				<ToolbarGroup className="LoginButton">
					<div className="face" style={imageStyle} > </div>
					<RaisedButton 
						onClick={this.logout}
						secondary={true}
						style={style} 
						label="logout"
					/>
				</ToolbarGroup>
			)
		}
		else {
			return(
				<ToolbarGroup className="LoginButton">
					<RaisedButton 
						onClick={this.login}
						secondary={true}
						style={style} 
						label={this.props.label} 
					/>
				</ToolbarGroup>
			)
		}
	}

})

module.exports = LoginButton