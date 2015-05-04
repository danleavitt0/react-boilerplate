var React = require('react'),
	mui = require('material-ui'),
	RaisedButton = mui.RaisedButton;

var style = {
	float: 'right',
	padding: '0'
}

var LoginButton = React.createClass({
	handleClick: function () {
		var handler = this.props.handleClick || function () {};
		handler();
	},
	getDefaultProps: function () {
		return {
			label: "Add a label"
		}
	},
	render: function () {
	return(
		<RaisedButton 
			secondary={true}
			onClick={this.handleClick}
			style={style} 
			label={this.props.label} 
		/>
	)}
})

module.exports = LoginButton