import styled from "@emotion/styled";

const ctabuttonColor = "#5A6ED8";
const textColor = "#fff";
const secondaryColor = "#000014";

export const NavbarContainer = styled.header`
  border-bottom: 1px solid #e2e8f0;
  font-size: 62.5%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0.9;
`;

export const InnerNavbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 1.5rem;
  scroll-padding: 1rem 0 0 0;
`;

type NavLinkProps = {
  toggleMenu?: boolean;
};

export const NavLinks = styled.ul<NavLinkProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  margin-top: 20px;
  @media (max-width: 950px) {
    position: fixed;
    top: 3.6rem;
    flex-direction: column;
    background-color: ${secondaryColor};
    opacity: 1.8;
    width: 100%;
    text-align: center;
    transition: 0.6s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    left: ${(props) => (props.toggleMenu ? "-2rem" : "-200rem")};
  }
`;

export const Anchornavlink = styled.a`
  color: ${textColor};
  font-size: 1.3rem;
  font-weight: 550;
  margin-left: 40px;
  text-decoration: none;
  s &:hover {
    color: ${ctabuttonColor};
    cursor: pointer;
  }
  @media (max-width: 950px) {
    color: var(--color-text);
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

export const NavLogo = styled.a`
  font-size: 2.1rem;
  font-weight: 500;
  color: ${textColor};
`;

export const Bar = styled.div`
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #fff;
`;

// .hamburger {
//   display: none;
// }

type BarProps = {
  toggleMenu?: boolean;
};

export const FirstBar = styled.div<BarProps>`
  transform: ${(props) =>
    props.toggleMenu ? "translateY(8px) rotate(45deg)" : "none"};
`;

export const SecondBar = styled.div<BarProps>`
  opacity: ${(props) => (props.toggleMenu ? "0" : "1")};
`;

export const ThirdBar = styled.div<BarProps>`
  transform: ${(props) =>
    props.toggleMenu ? "translateY(-8px) rotate(-45deg)" : "none"};
`;
