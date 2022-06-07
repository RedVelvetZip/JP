import React from "react";
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarBtnLink,
	SidebarBtnWrap,
	SidebarLink,
	SidebarMenu,
} from "./SidebarElements";

const Sidebar = () => {
	return (
		<SidebarContainer>
			<Icon>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarLink to="about">About</SidebarLink>
				<SidebarLink to="discover">Discover</SidebarLink>
				<SidebarLink to="service">Service</SidebarLink>
				<SidebarLink to="singup">Sing Up</SidebarLink>
			</SidebarWrapper>
			<SidebarBtnLink to="/">Signin</SidebarBtnLink>
		</SidebarContainer>
	);
};

export default Sidebar;
