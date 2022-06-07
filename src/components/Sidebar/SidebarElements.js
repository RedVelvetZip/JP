import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.aside`
	position: fixed;
	/* top: ${({ isOpen }) => (isOpen ? "0" : "-100%")}; */
	top: 0;
	left: 0;
	z-index: 999;
	width: 100%;
	height: 100%;
	background-color: #0d0d0d;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: 0.3s ease-in-out;
	/* opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")}; */
`;

export const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background-color: transparent;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
`;
export const CloseIcon = styled(FaTimes)`
	color: #fff;
`;

export const SidebarWrapper = styled.div`
	color: #fff;
`;

export const SidebarLink = styled(LinkS)`
	display: block;
	text-align: center;
	height: 80px;
	color: #fff;
	font-size: 1.5rem;
	text-decoration: none;
	transition: 0.2s ease-in-out;
	cursor: pointer;

	&:hover {
		color: #ffb800;
		transition: 0.2s ease-in-out;
	}
`;

export const SidebarBtnLink = styled(LinkR)`
	border-radius: 50px;
	background-color: #ffb800;
	white-space: nowrap;
	padding: 16px 64px;
	color: #010606;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		background-color: #fff;
		color: #010606;
	}
`;
