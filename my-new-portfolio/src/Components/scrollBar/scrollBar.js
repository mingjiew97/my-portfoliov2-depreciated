import React from "react";
import "./scrollBar.scss";

const ScrollBar = () => {
  React.useEffect(() => {
    console.log(window.document.body.offsetHeight);
    console.log(window.innerHeight);
    console.log(document.documentElement.scrollHeight);
  });

  return <progress value="40" max="100" id="progressBar"></progress>;
};

export default ScrollBar;
