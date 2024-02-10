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
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  type LinksProps = {
    link: string;
    path: string;
    setToggleMenu: (toggle: boolean) => void;
  };

  const Links = ({ link, setToggleMenu, path }: LinksProps) => {
    return (
      <>
        <li className="nav-item" onClick={() => setToggleMenu(false)}>
          <Link to={path}>
            <Anchornavlink>{link}</Anchornavlink>
          </Link>
        </li>
      </>
    );
  };

  const links: string[] = ["Home", "Songs", "Add Song", "Statistics"];
  const paths: string[] = ["/", "songs", "addsong", "stats"];

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
            {links.map((link, idx) => (
              <Links
                link={link}
                key={link}
                setToggleMenu={setToggleMenu}
                path={paths[idx]}
              />
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
      <Outlet />
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
