import React, { useRef } from "react";
// import { Button } from "../ButtonElement";
import {
  InfoContainer,
  InfoWrapper,
  Row,
  Column,
  TextWrapper,
  TopLine,
  Heading,
  // SubTitle,
  // BtnWrap,
  ImgWrap,
  Img,
  StyledContactForm,
} from "./InfoElements";
import img4 from "../../Images/img4.svg";
import emailjs from "@emailjs/browser";

const Contact = ({}) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_1qknfpb",
        "template_jrfm95d",
        form.current,
        "B-Vj6MItbjfE_g6FG"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <InfoContainer lightBg={false} id="contact">
      <InfoWrapper>
        <Row imgStart={true}>
          <Column>
            <TextWrapper>
              <TopLine>Get In Touch</TopLine>
              <Heading lightText={true}>Contact Us</Heading>
              <StyledContactForm>
                <form ref={form} onSubmit={sendEmail}>
                  <label>Name</label>
                  <input type="text" name="user_name" />
                  <label>Email</label>
                  <input type="email" name="user_email" />
                  <label>Message</label>
                  <textarea name="message" />
                  <input type="submit" value="Send" />
                </form>
              </StyledContactForm>
            </TextWrapper>
          </Column>
          <Column>
            <ImgWrap>
              <Img src={img4} alt="Studying" />
            </ImgWrap>
          </Column>
        </Row>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default Contact;
