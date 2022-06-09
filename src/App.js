import { useState } from "react";
import "./App.css";
import OptionHome from "./widget/OptionHome";

function App() {
  const [showContent, setShowContent] = useState(false);
  const [showSelectedContent, setShowSelectedContent] = useState(false);
  const [contenSelected, setContentSelected] = useState(false);
  const [showOptionContent, setShowOptionContent] = useState(false);
  const [finishAnimation, setFinishAnimation] = useState(false);
  const [hideInnerInfo, setHideInnerInfo] = useState(false);
  const information = ["home", "work", "about", "contact"];
  const isMobile = window.innerWidth < 800;
  const sleep = (m) => new Promise((r) => setTimeout(r, m));
  const changeBg = async () => {
    let actualWidth = 50;
    let bg = document.getElementById("bg");
    setShowContent(true);
    while (actualWidth > 0) {
      actualWidth--;
      bg.style.background = `linear-gradient(135deg, #330867  ${actualWidth}%, white ${actualWidth}% ${100 - actualWidth}%, #30cfd0 0%)`;
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
            START
          </div>
        </div>
      )}
      {finishAnimation && (
        <div className="container-content">
          {information.map((item) => (
            <OptionHome
              item={item}
              selectedContent={selectedContent}
              validateOption={validateOption}
              validateSelected={validateSelected}
            />
          ))}
          {showOptionContent && (
            <div
              className="option-inner-content"
              style={{ width: hideInnerInfo && !isMobile && "0%",
              height: hideInnerInfo && isMobile && "0"
            }}
            >
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
