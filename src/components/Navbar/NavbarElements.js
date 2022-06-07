import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";

export const Nav = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
	height: 80px;
	margin-top: -80px;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 10;

	@media (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;

export const NavContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80px;
	padding: 0 24px;
	width: 100%;
	max-width: 1100px;
	z-index: 1;
`;

export const NavLogo = styled(LinkR)`
	display: flex;
	align-items: center;
	margin-left: 24px;
	font-size: 1.5rem;
	color: #fff;
	cursor: pointer;
	font-weight: bold;
	text-decoration: none;
`;

export const NavBars = styled.div`
	color: #fff;
	font-size: 1.5rem;
	cursor: pointer;

	@media (min-width: 768px) {
		display: none;
	}
`;

export const NavMenu = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #000;
	height: 100vh;
	position: fixed;
	top: ${({ click }) => (click ? "0" : "-100vh")};
	left: 0;
	width: 100%;
	opacity: 1;
	transition: top 0.2s ease-in-out;

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: flex-end;
		height: 80px;
		position: static;
	}
`;

export const NavLink = styled(LinkS).attrs(props => ({
	smooth: true,
	duration: 500,
	spy: true,
	exact: "true",
	offset: -80,
}))`
	padding: 20px 0;
	color: #fff;
	width: 100%;
	font-size: 1.5rem;
	text-align: center;
	text-decoration: none;
	cursor: pointer;
	border-bottom: 3px solid transparent;

	@media (min-width: 768px) {
		width: auto;
		padding: 0 20px;
		height: 80px;
		line-height: 80px;
		font-size: 1.2rem;
	}

	@media(min-width: 768px){
		&.active {
			border-bottom: 3px solid #01bf71;
		}
	}

	&:hover {
		color: #01bf71;
		transition: 0.2s ease-in-out;
	}
`;

export const NavBtnLink = styled(LinkR)`
	border-radius: 50px;
	background: #01bf71;
	white-space: nowrap;
	padding: 10px 20px;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	color: #010606;
	margin-left: 50px;

	&:hover {
		transition: all 0.2s ease-in-out;
		background-color: #fff;
		color: #01bf71;
	}

	@media (max-width: 767px) {
		margin-top: 100px;
		margin-left: 0;
	}
`;
export const CloseNavMenu = styled(FaTimes)`
	color: #fff;
	position: absolute;
	top: 50px;
	right: 50px;
	font-size: 2rem;
	cursor: pointer;

	@media (min-width: 768px) {
		display: none;
	}
`;
