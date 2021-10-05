import React, { useState } from "react";
import PageEnterAnimation from "./Components/pageEnterAnimation/pageEnterAnimation";
import ScrollDown from "./Components/scrollDown/scrollDown";
import AboutMe from "./Components/aboutMe/aboutMe";
import "./App.scss";

const App = () => {
  const [display, setDisplay] = useState(false);
  const [displayScrollDown, setDisplayScrollDown] = useState(false);

  const showContent = () => {
    setDisplay(true);
  };

  const showScrollDown = () => {
    setDisplayScrollDown(true);
  };

  return (
    <div className="full-page-container">
      <div>
        <PageEnterAnimation
          showContent={() => showContent()}
          showScrollDown={() => showScrollDown()}
        />
        <ScrollDown shouldDisplay={displayScrollDown} />
      </div>

      {display ? 
      <>
        <AboutMe />
      </> : null}
    </div>
  );
};

export default App;
