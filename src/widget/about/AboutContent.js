import React from "react";
import "./AboutContent.css";
const AboutContent = () => {
  return (
    <>
      <h3 className="option-content-title">
        Here you can know about me and my knowledges
      </h3>
      <h5 className="option-content-subtitle">About me</h5>
      <p className="about-description">
        My name is Leonardo Pacheco also known as Toby so my alias on developer
        world is Toby Dev. I'm a software engineer from UDLA in Ecuador. I
        started to learn web programming from 2018 and lately blockchain and
        web3 world has caught my attention so I start to learn about it.
      </p>
      <br />
      <h5 className="option-content-subtitle">Skills</h5>
      <div className="list-container-flex">
        <div className="list-container">
          <ul>
            <li>ReactJS</li>
            <li>Javascript</li>
            <li>Moralis</li>
            <li>Dart</li>
            <li>Flutter</li>
            <li>Angular</li>
            <li>HTML / CSS</li>
          </ul>
        </div>
        <div className="list-container">
          <ul>
            <li>Solidity</li>
            <li>Hardhat</li>
            <li>Laravel</li>
            <li>Node JS</li>
            <li>PHP</li>
            <li>MySQL</li>
          </ul>
        </div>
        
      </div>
      <br />
    </>
  );
};

export default AboutContent;
