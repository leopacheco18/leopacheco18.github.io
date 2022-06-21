import { useEffect, useState } from "react";
import "./App.css";
import OptionHome from "./widget/OptionHome";
import { FaHome } from "react-icons/fa";
import ContactContent from "./widget/contact/ContactContent";
import AboutContent from "./widget/about/AboutContent";
import HomeContent from "./widget/home/HomeContent";
import WorkContent from "./widget/work/WorkContent";
import CV from "./widget/cv/CV";
function App() {
  const [showContent, setShowContent] = useState(false);
  const [showSelectedContent, setShowSelectedContent] = useState(false);
  const [contenSelected, setContentSelected] = useState(false);
  const [showOptionContent, setShowOptionContent] = useState(false);
  const [animationLoaded, setAnimationLoaded] = useState(false);
  const [finishAnimation, setFinishAnimation] = useState(false);
  const [hideInnerInfo, setHideInnerInfo] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false)
  const [showCv, setShowCv] = useState(false)
  const information = ["home",  "about","work", "contact"];
  
  const isMobile = window.innerWidth < 800;
  const sleep = (m) => new Promise((r) => setTimeout(r, m));

  useEffect(() => {
    validateEndpoint();
  }, [])

  useEffect(() => {
    if(showPortfolio && finishAnimation){
      setTimeout(() => {
        selectedContent("work");
      }, 300);
    }
  },[showPortfolio,finishAnimation])

  const validateEndpoint = () => {
    let path = window.location.pathname;
    if(path === '/portfolio'){
      changeBg();
      setShowPortfolio(true);
    }
    if(path === '/cv'){
      changeBg();
      setShowCv(true);
    }
  }

  const changeBg = async () => {
    let actualWidth = 50;
    let bg = document.getElementById("bg");
    setShowContent(true);
    while (actualWidth > 0) {
      actualWidth--;
      bg.style.background = `linear-gradient(135deg, #330867  ${actualWidth}%, white ${actualWidth}% ${
        100 - actualWidth
      }%, #30cfd0 0%)`;
      await sleep(10);
    }
    setFinishAnimation(true);
  };

  const selectedContent = (option) => {
    if(showCv){
      setShowCv(false)
      return;
    }
    if (showSelectedContent) {
      setHideInnerInfo(true);
      setAnimationLoaded(false);
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
        setTimeout(() => {
          setAnimationLoaded(true);
        }, 500);
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
      
      <div className="container-content"
          style={{display: (!finishAnimation && 'none')}}
        >
      {showCv ?
      <CV /> :
      <>
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
              style={{
                width: hideInnerInfo && !isMobile && "0%",
                height: hideInnerInfo && isMobile && "0",
              }}
            >
              {animationLoaded && 
                <div className="padding-content">
                {validateSelected("home") && !hideInnerInfo && <HomeContent />}
                {validateSelected("work") && !hideInnerInfo && <WorkContent />}
                {validateSelected("about") && !hideInnerInfo && <AboutContent />}
                {validateSelected("contact") && !hideInnerInfo && (
                  <ContactContent />
                )}
              </div>
              }
            
            </div>
          )}
      </>
      
      }
        
        </div>
      {(showOptionContent || showCv) && (
        <div className="button-home" onClick={selectedContent}>
          <FaHome className="icon-home" />
        </div>
      )}
    </div>
  );
}

export default App;
