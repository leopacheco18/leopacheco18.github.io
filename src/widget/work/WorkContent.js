import React from "react";
import "./WorkContent.css";
import CertDefi from "../../assets/work/certdefi.png";
import Spotify from "../../assets/work/spotify.png";
import Solidity from "../../assets/work/Solidity.png";

import { FaGithub } from "react-icons/fa";

const WorkContent = () => {
  const dataWork = [
    {
      img: CertDefi,
      title: "CertDefi",
      type: "Frontend",
      description:
        "Project for the ChainLink Spring 2022 Hackathon. Winner of 2 prizes. Takes the concept of an NTT (Non-tradeable token), focused on delivering certificates of completion for Courses, University degrees.",
      repo: "https://github.com/leopacheco18/hackathon-frontend",
    },
    {
      img: Spotify,
      title: "Spotify Web3",
      type: "Frontend",
      description:
        "This project try to replicate spotify but with web3 tech. Any artist can upload a new album and this new album will be a Smart Contract and the songs will be NTF's minted from this new smart contract. You can play the songs and also see on OpenSea.",
      repo: "https://github.com/leopacheco18/spotifyWeb3",
    },
    {
      img: Solidity,
      title: "Spotify Contract",
      type: "Backend",
      description:
        "This project has the Smart Contracts for the Spotify Web3 projects. Using solidity two smart contracts were created, one that represents the album as a collection of nft (songs) and a contract that uses the factory pattern to create different contracts (albums) ",
      repo: "https://github.com/leopacheco18/spotifyWeb3Contracts",
    },
  ];
  return (
    <>
      <h3 className="option-content-title">Here you can see all my works</h3>
      <div className="work-container">
        {dataWork.map((item, index) => (
          <div className="work-item" key="index">
            <img src={item.img} alt="project" />
            <div className="work-content">
              <h4 className="work-content-title">
                {" "}
                {item.title} | {item.type}{" "}
              </h4>

              <p className="work-content-description">{item.description}</p>
            </div>
            <div
              className="github-bubble"
              onClick={() => window.open(item.repo, "_blank")}
            >
              <FaGithub />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkContent;
