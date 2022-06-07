import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import {
	Nav,
	NavContainer,
	NavLogo,
	NavBars,
	NavMenu,
	NavLink,
	// NavBtnLink,
	CloseNavMenu,
} from "./NavbarElements";

const Navbar = () => {
	const [click, setClick] = useState(false);
	const [scrollNav, setScrollNav] = useState(false);

	const handleClick = () => {
		setClick(!click);
	};

	const handleScrollNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScrollNav);
	}, []);

	const scrollTop = () => {
		scroll.scrollToTop();
	};

	return (
		<Nav scrollNav={scrollNav}>
			<NavContainer>
				<NavLogo to='/' onClick={scrollTop}>
					Tutorra
				</NavLogo>
				<NavBars onClick={handleClick}>
					<FaBars />
				</NavBars>
				<NavMenu click={click} onClick={handleClick}>
					<NavLink to='home' onClick={handleClick}>
						Home
					</NavLink>
					<NavLink to='about' onClick={handleClick}>
						About
					</NavLink>
					<NavLink to='services' onClick={handleClick}>
						Service
					</NavLink>
					<NavLink to='contact' onClick={handleClick}>
						Contact
					</NavLink>
					{/* <NavBtnLink to='/contact' onClick={handleClick}>
						Contact
					</NavBtnLink> */}
					<CloseNavMenu onClick={handleClick} />
				</NavMenu>
			</NavContainer>
		</Nav>
	);
};

export default Navbar;
