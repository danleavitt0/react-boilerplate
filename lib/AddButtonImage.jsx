var React = require('react'),
		mui = require('material-ui'),
		SvgIcon = mui.SvgIcon;

var AddButtonImage = React.createClass({
	render: function () {
	return (
		<SvgIcon>
			<path d="M19 13h-6v6h-2v-6h-6v-2h6v-6h2v6h6v2z"/>
		</SvgIcon>
	)}
})

module.exports = AddButtonImage