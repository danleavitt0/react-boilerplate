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
	render: function () {
		var toolbarChildren = this.props.children.map(function(el, i){
		return (
			<ToolbarGroup className={el.type.displayName}>
				{el}
			</ToolbarGroup>
		)
		})
	return(
		<Toolbar className="main-nav">
			<h3> {this.props.title} </h3>
			{toolbarChildren}
		</Toolbar>
	)}
})

module.exports = TopBar
