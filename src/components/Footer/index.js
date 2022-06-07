import {
	FooterContainer,
	FooterWrap,
	// FooterLinksContainer,
	// FooterLinksWrapper,
	// FooterLinkItems,
	// FooterLinkTitle,
	// FooterLink,
	SocialMedia,
	SocialMediaWrap,
	WebsiteRight,
	SocialLogo,
	// SocialIcons,
	// SocialIconLink,
} from "./FooterElements";
// import {
// 	FaFacebook,
// 	FaYoutube,
// 	FaTwitter,
// 	FaLinkedin,
// 	FaInstagram,
// } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
	const scrollTop = () => {
		scroll.scrollToTop();
	};
	return (
		<FooterContainer>
			<FooterWrap>
				{/* <FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>About us1</FooterLinkTitle>
							<FooterLink to="/signin">How it works</FooterLink>
							<FooterLink to="/signin">Testimonials</FooterLink>
							<FooterLink to="/signin">Career</FooterLink>
							<FooterLink to="/signin">Investors</FooterLink>
							<FooterLink to="/signin">Terms Of Services</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>About us2</FooterLinkTitle>
							<FooterLink to="/signin">How it works</FooterLink>
							<FooterLink to="/signin">Testimonials</FooterLink>
							<FooterLink to="/signin">Career</FooterLink>
							<FooterLink to="/signin">Investors</FooterLink>
							<FooterLink to="/signin">Terms Of Services</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>About us3</FooterLinkTitle>
							<FooterLink to="/signin">How it works</FooterLink>
							<FooterLink to="/signin">Testimonials</FooterLink>
							<FooterLink to="/signin">Career</FooterLink>
							<FooterLink to="/signin">Investors</FooterLink>
							<FooterLink to="/signin">Terms Of Services</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>About us4</FooterLinkTitle>
							<FooterLink to="/signin">How it works</FooterLink>
							<FooterLink to="/signin">Testimonials</FooterLink>
							<FooterLink to="/signin">Career</FooterLink>
							<FooterLink to="/signin">Investors</FooterLink>
							<FooterLink to="/signin">Terms Of Services</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer> */}
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/" onClick={scrollTop}>
							Tutorra
						</SocialLogo>
						<WebsiteRight>
						Tutorra &copy; {new Date().getFullYear()} All rights reserved.
						</WebsiteRight>
						{/* <SocialIcons>
							<SocialIconLink href="/">
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink href="/">
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink href="/">
								<FaTwitter />
							</SocialIconLink>
							<SocialIconLink href="/">
								<FaYoutube />
							</SocialIconLink>
							<SocialIconLink href="/">
								<FaLinkedin />
							</SocialIconLink>
						</SocialIcons> */}
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
