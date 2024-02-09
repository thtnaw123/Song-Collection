import {
  NavbarContainer,
  InnerNavbar,
  NavLinks,
  Anchornavlink,
  NavLogo,
  Bar,
  FirstBar,
  SecondBar,
  ThirdBar,
} from "./navbarEmotion";
import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  type LinksProps = {
    link: string;
    setToggleMenu: (toggle: boolean) => void;
  };

  const Links = ({ link, setToggleMenu }: LinksProps) => {
    return (
      <>
        <li className="nav-item" onClick={() => setToggleMenu(false)}>
          <Anchornavlink>{link}</Anchornavlink>
        </li>
      </>
    );
  };

  const links: string[] = ["Home", "Mathmatics", "Reasoning", "more"];

  const [toggleMenu, setToggleMenu] = useState(true);
  console.log(toggleMenu);
  return (
    <>
      <NavbarContainer>
        <InnerNavbar>
          <NavLogo className="Navlogo">
            Collect<span>ions.</span>
          </NavLogo>

          <NavLinks toggleMenu={toggleMenu}>
            {links.map((link) => (
              <Links link={link} key={link} setToggleMenu={setToggleMenu} />
            ))}
          </NavLinks>
          <button
            className={`hamburger ${toggleMenu ? "active" : ""}`}
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <FirstBar toggleMenu={toggleMenu}>
              <Bar>
                <span className="bar"></span>
              </Bar>
            </FirstBar>
            <SecondBar toggleMenu={toggleMenu}>
              <Bar>
                <span className="bar"></span>
              </Bar>
            </SecondBar>
            <ThirdBar toggleMenu={toggleMenu}>
              <Bar>
                <span className="bar"></span>
              </Bar>
            </ThirdBar>
          </button>
        </InnerNavbar>
      </NavbarContainer>
    </>
  );
};

export default Navbar;

{
  /* <ul
className={`nav-menu ${toggleMenu ? "active" : ""}`}
>

</ul> */
}
