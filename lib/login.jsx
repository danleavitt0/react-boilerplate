var React = require('react'),
	mui = require('material-ui'),
	RaisedButton = mui.RaisedButton;

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
	render: function () {
	return(
		<RaisedButton 
			secondary={true}
			style={style} 
			label={this.props.label} 
		/>
	)}
})

module.exports = LoginButton