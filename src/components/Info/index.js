import React from "react";
import { Button } from "../ButtonElement";
import {
	InfoContainer,
	InfoWrapper,
	Row,
	Column,
	TextWrapper,
	TopLine,
	Heading,
	SubTitle,
	BtnWrap,
	ImgWrap,
	Img,
} from "./InfoElements";

const Info = ({
	id,
	lightBg,
	imgStart,
	topLine,
	lightText,
	headLine,
	darkText,
	description,
	buttonLabel,
	img,
	alt,
	primary,
	dark,
}) => {
	return (
		<InfoContainer lightBg={lightBg} id={id}>
			<InfoWrapper>
				<Row imgStart={imgStart}>
					<Column>
						<TextWrapper>
							<TopLine>{topLine}</TopLine>
							<Heading lightText={lightText}>{headLine}</Heading>
							<SubTitle darkText={darkText}>{description}</SubTitle>
							<BtnWrap>
								<Button
									smooth={true}
									duration={500}
									spy={true}
									exact='true'
									offset={-80}
									primary={primary ? 1 : 0}
									dark={dark ? 1 : 0}
									to='/'
								>
									{buttonLabel}
								</Button>
							</BtnWrap>
						</TextWrapper>
					</Column>
					<Column>
						<ImgWrap>
							<Img src={img} alt={alt} />
						</ImgWrap>
					</Column>
				</Row>
			</InfoWrapper>
		</InfoContainer>
	);
};

export default Info;
