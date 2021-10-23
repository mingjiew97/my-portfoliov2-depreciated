import React from "react";
import "./scrollBar.scss";

const ScrollBar = (props) => {
  let displayScrollBar = props.shouldDisplay;

  React.useEffect(() => {
    console.log(window.document.body.offsetHeight);
    console.log(window.innerHeight);
    console.log(document.documentElement.scrollHeight);

    let test = document.querySelector("#about-me-outter-wrap")?.scrollHeight;
    console.log("test1");
    console.log(test);
    let test2 = document.querySelector("#about-me-div")?.scrollHeight;
    console.log("test2");
    console.log(test2);
  });

  return (
    <div className="progress">
      <div className="bar">
        <div className="bar__fill"></div>
        <div className="bar__fill2"></div>
        {/* <div className="bar__fill"></div>
        <div className="bar__fill"></div>
        <div className="bar__fill"></div>
        <div className="bar__fill"></div>
        <div className="bar__fill"></div> */}
      </div>
    </div>
  );
};

export default ScrollBar;
