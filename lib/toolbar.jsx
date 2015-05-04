var React = require('react'),
	mui = require('material-ui'),
	Toolbar = mui.Toolbar,
	ToolbarGroup = mui.ToolbarGroup;

var iconStyle = {
	margin: '9px'
}

var TopBar = React.createClass({
	getDefaultProps: function () {
		return {
			title: 'Add A Title'
		}
	},
	componentDidMount: function() {
	},
	handleClick: function() {
		console.log('handle click');
	},
	render: function () {
	return(
		<Toolbar className="main-nav">
			<ToolbarGroup className="icon-group" float="left">
				{this.props.children[0]} 
			</ToolbarGroup>
			<ToolbarGroup float="left" className="mui-paper-container">
				<h3 className="mui-app-bar-title"> {this.props.title} </h3>
			</ToolbarGroup>
			<ToolbarGroup float="right" className="icon-group mui-paper-container">
				{this.props.children[1]}
			</ToolbarGroup>
			<ToolbarGroup float="right">
				{this.props.children[2]}
			</ToolbarGroup>
		</Toolbar>
	)}
})

module.exports = TopBar
