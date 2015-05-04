var React = require('react'),
		mui = require('material-ui'),
		IconButton = mui.IconButton,
		FontIcon = mui.FontIcon;

var MenuButton = React.createClass({
	render: function () {
	return(
		<IconButton tooltip="menu">
			<FontIcon className="icon-navigation-white icon-navigation-white-ic_menu_white_24dp" />
		</IconButton>
	)}
})

module.exports = MenuButton
