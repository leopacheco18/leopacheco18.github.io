import { useState } from "react";
import "./App.css";

function App() {
  const [showContent, setShowContent] = useState(false);
  const [showSelectedContent, setShowSelectedContent] = useState(false);
  const [contenSelected, setContentSelected] = useState(false);
  const [showOptionContent, setShowOptionContent] = useState(false);
  const [finishAnimation, setFinishAnimation] = useState(false);
  const [hideInnerInfo, setHideInnerInfo] = useState(false);

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
    if (showSelectedContent) {
      setHideInnerInfo(true);
      setTimeout(() => {
        setShowOptionContent(false);
        setShowSelectedContent(false);
        setContentSelected("");
      }, 500);
    } else {
      setShowSelectedContent(true);
      setContentSelected(option);
      setHideInnerInfo(false);
      setTimeout(() => {
        setShowOptionContent(true);
      }, 500);
    }
  };

  const validateOption = (option) => {
    return (
      !showSelectedContent || (showSelectedContent && contenSelected === option)
    );
  };

  const validateSelected = (option) => {
    return showSelectedContent && contenSelected === option;
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
              width: !validateOption("home") && "0%",
              filter: validateSelected("home") && "brightness(100%)",
              transform: validateSelected("home") && "rotate(0)",
            }}
          >
            {validateOption("home") && (
              <div
                className="content-home-info"
                style={{ transform: validateSelected("home") && "rotate(0)" }}
              >
                Home
              </div>
            )}
          </div>
          <div
            onClick={() => selectedContent("work")}
            className="content-item content-work"
            style={{
              width: !validateOption("work") && "0%",
              filter: validateSelected("work") && "brightness(100%)",
              transform: validateSelected("work") && "rotate(0)",
            }}
          >
            {validateOption("work") && (
              <div
                className="content-work-info"
                style={{ transform: validateSelected("work") && "rotate(0)" }}
              >
                Work
              </div>
            )}
          </div>
          <div
            onClick={() => selectedContent("about")}
            className="content-item content-about"
            style={{
              width: !validateOption("about") && "0%",
              filter: validateSelected("about") && "brightness(100%)",
              transform: validateSelected("about") && "rotate(0)",
            }}
          >
            {validateOption("about") && (
              <div
                className="content-about-info"
                style={{ transform: validateSelected("about") && "rotate(0)" }}
              >
                About
              </div>
            )}
          </div>
          <div
            onClick={() => selectedContent("contact")}
            className="content-item content-contact"
            style={{
              width: !validateOption("contact") && "0%",
              filter: validateSelected("contact") && "brightness(100%)",
              transform: validateSelected("contact") && "rotate(0)",
            }}
          >
            {validateOption("contact") && (
              <div
                className="content-contact-info"
                style={{
                  transform: validateSelected("contact") && "rotate(0)",
                }}
              >
                Contact
              </div>
            )}
          </div>
          {showOptionContent && <div className="option-inner-content" style={{width: hideInnerInfo && '0%'}}></div>}
        </div>
      )}
    </div>
  );
}

export default App;
