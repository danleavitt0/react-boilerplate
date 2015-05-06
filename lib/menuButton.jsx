var React = require('react'),
		mui = require('material-ui'),
		IconButton = mui.IconButton,
		FontIcon = mui.FontIcon,
		LeftNav = mui.LeftNav,
		ToolbarGroup = mui.ToolbarGroup

var header = <div className="logo"> User List </div>

var menuItems = [
	{
		text: 'Test'
	}
]

var MenuButton = React.createClass({
	getInitialState: function() {
		return {
			docked:false 
		};
	},
	showNav: function () {
		this.refs.userList.toggle();
	},
	render: function () {
	return(
		<ToolbarGroup className="MenuButton">
			<IconButton onClick={this.showNav} tooltip="menu">
				<FontIcon className="icon-navigation-white icon-navigation-white-ic_menu_white_24dp" />
			</IconButton>
			<LeftNav 
				ref="userList" 
				docked={false} 
				header={header}
				menuItems={menuItems} 
			/>
		</ToolbarGroup>
	)}
})

module.exports = MenuButton
