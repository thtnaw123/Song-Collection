import styled from "@emotion/styled";

const ctabuttonColor = "#5A6ED8";
const textColor = "#fff";

type ButtonProps = {
  primary?: string;
};

export const HomeLeftSection = styled.section`
  width: 45vw;
  text-align: center;
  @media screen and (max-width: 950px) {
    width: 75vw;
  }
`;

export const Button = styled.button`
  margin: 0 10px;
  padding: 10px;
  background: ${(props: ButtonProps) => props.primary};
  font-size: 1rem;
  border-radius: 4px;
  color: ${textColor};
  font-weight: bold;
  cursor: pointer;
  border: 2px solid ${ctabuttonColor};
  &:hover {
    background-color: none;
  }
`;

export const HeroSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
`;

export const HeroText = styled.h1`
  font-size: 9vmin;
  line-height: 1.2;
  text-align: center;
  margin: 10px 0;
  @media screen and (max-width: 950px) {
    font-size: 11vmin;
  }
`;

export const HeroTextSpan = styled.span`
  color: #5a6ed8;
`;

export const HeroImageStyle = styled.img`
  width: 40dvw;
  height: 100%;
  @media screen and (max-width: 950px) {
    width: 75dvw;
  }
`;
