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
import img4 from "../../Images/img4.svg";

const Contact = ({}) => {
  const id = "contact";
  const lightBg = false;
  const lightText = true;
  const topLine = "Get In Touch";
  const headLine = "Contact Us";
  const imgStart = true;
  const img = img4;
  const alt = "Studying";
  const primary = true;
  const dark = true;
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <Row imgStart={imgStart}>
          <Column>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headLine}</Heading>
              <div>
                <form>
                  <label>
                    Name:
                    <input type="text" />
                  </label>
                  <label>
                    Email:
                    <input type="text" />
                  </label>
                  <label>
                    Message:
                    <input type="text" />
                  </label>
                </form>
              </div>
              <BtnWrap>
                <Button
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  to="/"
                >
                  Submit
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

export default Contact;
