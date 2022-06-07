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
  const id = "contact";
  const lightBg = false;
  const lightText = true;
  const topLine = "Get In Touch";
  const headLine = "Contact Us";
  const imgStart = true;
  const img = img4;
  const alt = "Studying";
  // const primary = true;
  // const dark = true;

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
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <Row imgStart={imgStart}>
          <Column>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headLine}</Heading>
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
              {/* <div>
                <form
                  id="contact-form"
                  // onSubmit={this.handleSubmit.bind(this)}
                  method="POST"
                >
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div> */}
              {/* <BtnWrap>
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
              </BtnWrap> */}
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
