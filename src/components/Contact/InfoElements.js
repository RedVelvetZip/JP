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
  @media (max-width: 768px) {
    padding: 0 50px;
    margin: 0 30px;
  }
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
  @media (max-width: 480px) {
    padding: 0px 32px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media (max-width: 480px) {
    font-size: 32px;
	padding: 0px 32px;
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

export const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #ffb800;
      color: #010606;
      border: none;
    }
  }
  @media (max-width: 480px) {
    padding: 0px 32px;
  }
`;
