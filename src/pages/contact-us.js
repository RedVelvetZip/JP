import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import {
	Nav,
	NavContainer,
	NavLogo,
	NavBars,
	NavMenu,
	NavLink,
	CloseNavMenu,
} from "../components/Navbar/NavbarElements";

const ContactPage = () => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/">
            Tutorra
          </NavLogo>
        </NavContainer>
      </Nav>
      <Contact />
      <Footer />
    </>
  );
};

export default ContactPage;
