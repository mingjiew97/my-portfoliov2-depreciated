import React, { useState, useEffect } from "react";
import PageEnterAnimation from "./Components/pageEnterAnimation/pageEnterAnimation";
import ScrollDown from "./Components/scrollDown/scrollDown";
import AboutMe from "./Components/aboutMe/aboutMe";
import "./App.scss";
import About from "./Components/aboutMe/About";

const App = () => {
  const [display, setDisplay] = useState(false);
  const [displayScrollDown, setDisplayScrollDown] = useState(false);

  const showContent = () => {
    setDisplay(true);
  };

  const showScrollDown = () => {
    setDisplayScrollDown(true);
  };

  // hide the scroll down button when user scrolls down
  useEffect(() => {
    const hideScrollDown = () => {
      let heightToHideFrom = 0.4 * window.innerHeight;
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

      if (winScroll > heightToHideFrom) {
        if (displayScrollDown) setDisplayScrollDown(false);
      } else {
        setDisplayScrollDown(true);
      }
    };

    window.addEventListener("scroll", hideScrollDown);
    return () => {
      window.removeEventListener("scroll", hideScrollDown);
    };
  });

  return (
    <div className="full-page-container">
      <div>
        <PageEnterAnimation
          showContent={() => showContent()}
          showScrollDown={() => showScrollDown()}
        />
        <ScrollDown shouldDisplay={displayScrollDown} />
      </div>

      {display ? (
        <>
          {/* <AboutMe /> */}
          <About />
        </>
      ) : null}
    </div>
  );
};

export default App;
