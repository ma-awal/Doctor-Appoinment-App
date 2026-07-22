import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutHero from "./AboutHero/AboutHero";
import Values from "./Values/Values";
 
import "./About.css";
import Mission from "./Mission/Mission";
import Team from "../Home/Team/Team";
import CTA from "../Home/CTA";

const About = () => {
  return (
    <div className="fade-in">
      <AboutHero />
      <Mission/>
      <Values />
      <Team/>
      <CTA/>
     
    </div>
  );
};

export default About;
