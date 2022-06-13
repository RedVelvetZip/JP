import styled from "styled-components";

export const InfoContainer = styled.div.attrs({ name: "infoOne" })`
	color: #fff;
	background-color: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

	@media (max-width: 768px) {
		padding: 100px 0;
	}
`;

export const InfoWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 860px;
	width: 100%;
	max-width: 1100px;
	margin: 0 auto;
	padding: 0 24px;
`;

export const Row = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};

	@media (min-width: 768px) {
		flex-wrap: nowrap;
	}
`;

export const Column = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;	  
`;

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;
	padding-bottom: 60px;
`;

export const TopLine = styled.p`
	color: #ffb800;
	font-size: 16px;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	text-transform: uppercase;
	margin-bottom: 16px;
`;

export const Heading = styled.h1`
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
	color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

	@media (max-width: 480px) {
		font-size: 32px;
	}
`;

export const SubTitle = styled.p`
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 18px;
	color: ${({ darkText }) => (darkText ? "#010606" : "#FFF")};
`;

export const BtnWrap = styled.div`
	display: flex;
	justify-content: flex-start;
`;

export const ImgWrap = styled.div`
	max-width: 550px;
	height: 100%;
`;

export const Img = styled.img`
	width: 100%;
	margin: 0 0 10px 0;
	padding-right: 0;
`;
