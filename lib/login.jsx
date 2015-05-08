var React = require('react'),
	mui = require('material-ui'),
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
		// add login logic here
	},
	render: function () {
	return(
		<ToolbarGroup className="LoginButton">
			<RaisedButton 
				onClick={this.login}
				secondary={true}
				style={style} 
				label={this.props.label} 
			/>
		</ToolbarGroup>
	)}
})

module.exports = LoginButton