// import styled from "@emotion/styled";
import {
  HeroSection,
  Button,
  HeroText,
  HeroImageStyle,
  HeroTextSpan,
  HomeLeftSection,
} from "./HomeEmotion";
import HeroImage from "../../assets/hero-image.svg";
import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection>
        <HomeLeftSection>
          <HeroText>
            {" "}
            Discover an <HeroTextSpan> endless</HeroTextSpan> collection of your
            favorite <HeroTextSpan>songs!</HeroTextSpan>
          </HeroText>
          <Link to={"/songs"}>
            <Button primary="#5A6ED8">Explore Songs</Button>
          </Link>
          <Link to={"/stats"}>
            <Button primary="none">See Stats</Button>
          </Link>
        </HomeLeftSection>
        <div>
          <HeroImageStyle src={String(HeroImage)} alt="hero img" />
        </div>
      </HeroSection>
    </div>
  );
};

export default Home;

// {
/* <div>
  <div className="home-container">
    <div className="home-left">
      <div className="gradient__text">
        <h1>
          {" "}
          Empower your <span>learning</span> journey with expert{" "}
          <span>tutoring!</span>
        </h1>
      </div>
      <div className="cta-button">
        <button>Get Started</button>
      </div>
    </div>
    <div className="home-right">
      <img src={heroImg} alt="" />
    </div>
  </div>
</div>; */
