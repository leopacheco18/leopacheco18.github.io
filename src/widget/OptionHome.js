import React from 'react'
import "./OptionHome.css";

const OptionHome = ({item,selectedContent,validateOption, validateSelected }) => {

    const isMobile = window.innerWidth < 800;

    const capitalizeText = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const bgImage = require(`./../assets/${item}-bg.jpg`);
  return (
    <div
            onClick={() => selectedContent(item)}
            className="content-item content-bg"
            style={{
              width: !validateOption(item) && !isMobile && "0%",
              height: !validateOption(item) && isMobile && "0",
              filter: validateSelected(item) && "brightness(100%)",
              transform: validateSelected(item) && "rotate(0)",
              backgroundImage: `url(${bgImage})`
            }}
          >
            {validateOption(item) && (
              <div
                className="content-info"
                style={{ 
                    transform: validateSelected(item) && "rotate(0)",
                    marginLeft: validateSelected(item) && "30px" }}
              >
                {capitalizeText(item)}
              </div>
            )}
          </div>
  )
}

export default OptionHome