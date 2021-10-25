import React from "react";
import "./scrollBar.scss";

const ScrollBar = (props) => {
  let displayScrollBar = props.shouldDisplay;
  const viewWindowHeight = window.innerHeight;
  console.log(viewWindowHeight);
  const [sectionHeightArr, setSectionHeightArr] = React.useState([]);

  const initScrollBar = () => {
    if (!document.querySelector("#about-me-outter-wrap")) return;
    let documentHeight = document.documentElement.scrollHeight;
    console.log(documentHeight);
    let tempSectionHeightArr = [];
    let aboutMeWrapperDiv = document.querySelectorAll(
      "#about-me-outter-wrap > div"
    );
    let currentHeight = 0;
    aboutMeWrapperDiv.forEach((divElement, index) => {
      if (index === 0) {
        let elementToTop =
          window.pageYOffset + divElement.getBoundingClientRect().top;
        tempSectionHeightArr.push({
          elementHeight: 0,
          elementName: "welcomeSentence",
        });
      }
      currentHeight += divElement.scrollHeight;
      tempSectionHeightArr.push({
        elementHeight: currentHeight/documentHeight,
        elementName: divElement.id,
      });
    });
    if ( JSON.stringify(tempSectionHeightArr) === JSON.stringify(sectionHeightArr) ) {
      console.log('test');
      return;
    };
    setSectionHeightArr(tempSectionHeightArr);
    // console.log(tempSectionHeightArr ==);
    
  };

  React.useEffect(() => {
    initScrollBar();
  });

  return (
    <div className={"progress " + (displayScrollBar ? "active" : "active")}>
      <div className="bar">
        <div className="bar__fill"></div>
        <div className="bar__fill2"></div>
        {/* <div className="bar__fill"></div>
        <div className="bar__fill"></div>
        <div className="bar__fill"></div>
        <div className="bar__fill"></div>
        <div className="bar__fill"></div> */}
      </div>
      <div className="point-group">
        {sectionHeightArr.map((el, index) => {
          return (
            <div className="point point--complete" key={el.elementName} style={{"padding-top": viewWindowHeight * el.elementHeight}}>
              <div className="bullet"></div>
              <label className="label">{index}</label>
            </div>
          );
        })}
      </div>
      {/* <div className="point point--complete">
        <div className="bullet"></div>
        <label className="label">Select</label>
      </div>
      <div className="point point--complete">
        <div className="bullet"></div>
        <label className="label">Review</label>
      </div> */}
    </div>
  );
};

export default ScrollBar;
