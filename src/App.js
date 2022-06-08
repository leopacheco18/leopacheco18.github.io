import { useState } from "react";
import "./App.css";

function App() {
  const [showContent, setShowContent] = useState(false);
  const [showSelectedContent, setShowSelectedContent] = useState(false);
  const [contenSelected, setContentSelected] = useState(false);
  const [finishAnimation, setFinishAnimation] = useState(false);

  const sleep = (m) => new Promise((r) => setTimeout(r, m));
  const changeBg = async () => {
    // let actualDg = 135;
    let actualWidth = 50;
    let bg = document.getElementById("bg");
    setShowContent(true);
    // while(actualDg > 90){
    //   actualDg--;
    //   bg.style.background = `linear-gradient(${actualDg}deg, #330867  50%, #30cfd0 0%)`;
    //   await sleep(10)
    // }
    let addWhite = 50;
    while (actualWidth > 0) {
      actualWidth--;
      addWhite++;
      bg.style.background = `linear-gradient(135deg, #330867  ${actualWidth}%, white ${actualWidth}% ${addWhite}%, #30cfd0 0%)`;
      await sleep(10);
    }
    setFinishAnimation(true);
  };

  const selectedContent = (option) => {
    setShowSelectedContent(true);
    setContentSelected(option);
  };

  return (
    <div className="background" id="bg">
      {!showContent && (
        <div className="container-know-me">
          <div className="button-know-me" onClick={changeBg}>
            KNOW ME!
          </div>
        </div>
      )}
      {finishAnimation && (
        <div className="container-content">
          <div
            onClick={() => selectedContent("home")}
            className="content-item content-home"
            style={{
              width:
                !showSelectedContent ||
                (showSelectedContent && contenSelected === "home")
                  ? "24%"
                  : "0%",
            }}
          >
            {(!showSelectedContent ||
              (showSelectedContent && contenSelected === "home")) && (
              <div className="content-home-info">Home</div>
            )}
          </div>
          <div
            onClick={() => selectedContent("work")}
            className="content-item content-work"
            style={{
              width:
                !showSelectedContent ||
                (showSelectedContent && contenSelected === "work")
                  ? "24%"
                  : "0%",
            }}
          >
            {(!showSelectedContent ||
              (showSelectedContent && contenSelected === "work")) && (
              <div className="content-work-info">Work</div>
            )}
          </div>
          <div
            onClick={() => selectedContent("about")}
            className="content-item content-about"
            style={{
              width:
                !showSelectedContent ||
                (showSelectedContent && contenSelected === "about")
                  ? "24%"
                  : "0%",
            }}
          >
            {(!showSelectedContent ||
              (showSelectedContent && contenSelected === "about")) && (
              <div className="content-about-info">About</div>
            )}
          </div>
          <div
            onClick={() => selectedContent("contact")}
            className="content-item content-contact"
            style={{
              width:
                !showSelectedContent ||
                (showSelectedContent && contenSelected === "contact")
                  ? "24%"
                  : "0%",
            }}
          >
            {(!showSelectedContent ||
              (showSelectedContent && contenSelected === "contact")) && (
              <div className="content-contact-info">Contact</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
