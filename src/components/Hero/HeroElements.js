import styled from "styled-components";
import { Button } from "../ButtonElement";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const HeroContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #0c0c0c;
	padding: 0 30px;
	height: 800px;
	position: relative;
	z-index: 1;

	/* Add :Before Styles */
	:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.6);
		z-index: 1;
	}
`;

export const VideoBg = styled.video`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	background-color: #232a34;
`;

export const HeroContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 8px 24px;
	max-width: 1200px;
	position: relative;
	z-index: 3;
`;

export const HeroH1 = styled.h1`
	color: #fff;
	font-size: 48px;
	text-align: center;

	@media (max-width: 768px) {
		font-size: 40px;
	}

	@media (max-width: 480px) {
		font-size: 32px;
	}
`;

export const HeroP = styled.p`
	margin-top: 20px;
	color: #fff;
	font-size: 24px;
	text-align: center;
	max-width: 600px;
`;

export const HeroButton = styled(Button)`
	margin-top: 32px;
	color: #000;
`;

export const ArrowForward = styled(MdArrowForward)`
	margin-left: 8px;
	font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
	margin-left: 8px;
	font-size: 20px;
`;
