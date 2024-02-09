import styled from "@emotion/styled";

const ctabuttonColor = "#5A6ED8";
const textColor = "#fff";

type ButtonProps = {
  primary?: string;
};

export const Button = styled.button`
  padding: 10px;
  background-color: ${(props: ButtonProps) => props.primary};
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
  margin-top: 100px;
`;

export const HeroText = styled.div`
  font-size: 10vmin;
  line-height: 1.2;
  text-align: center;
  margin: 10px 0;
`;

export const HeroImage = styled.div`
  width: 40dvw;
  height: 100%;
`;
