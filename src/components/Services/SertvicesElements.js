import styled from "styled-components";

export const ServicesContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 800px;
	background-color: #010606;
	/* box-sizing: border-box; */

	@media (max-width: 768px) {
		height: 1100px;
	}

	@media (max-width: 480px) {
		height: 1300px;
	}
`;

export const ServicesH1 = styled.h2`
	font-size: 2.5rem;
	color: #fff;
	margin-bottom: 65px;

	@media (max-width: 480px) {
		font-size: 2rem;
	}
`;

export const ServicesWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	max-width: 1000px;
	width: 100%;
	margin: 0 auto;
	padding: 0 50px;

	@media (min-width: 768px) {
		flex-direction: row;
		flex-wrap: wrap;
	}
`;

export const ServicesCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background-color: #fff;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	transition: all 0.2s ease-in-out;
	max-height: 340px;
	border-radius: 10px;
	padding: 30px;
	margin: 2%;

	@media (min-width: 768px) {
		width: 46%;
	}

	@media (min-width: 992px) {
		width: 29%;
	}

	&:hover {
		transform: scale(1.02);
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}
`;

export const ServciesIcon = styled.img`
	height: 160px;
	width: 160px;
	margin-bottom: 10px;
`;

export const ServciesH2 = styled.h2`
	font-size: 1rem;
	margin-bottom: 10px;
`;

export const ServicesP = styled.p`
	font-size: 1rem;
	text-align: center;
`;
