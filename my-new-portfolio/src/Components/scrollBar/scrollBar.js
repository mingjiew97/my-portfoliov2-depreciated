import React from "react";
import "./scrollBar.scss";

const ScrollBar = (props) => {
  let displayScrollBar = props.shouldDisplay;
  const viewWindowHeight = window.innerHeight;
  console.log(`windowHeight: ${viewWindowHeight}`);
  const [sectionHeightArr, setSectionHeightArr] = React.useState([]);
  const barFillRef = React.useRef(null);

  const initScrollBar = () => {
    if (!document.querySelector("#about-me-outter-wrap")) return;
    let documentHeight = document.documentElement.scrollHeight;
    let tempSectionHeightArr = [];
    let aboutMeWrapperDiv = document.querySelectorAll(
      "#about-me-outter-wrap > div"
    );
    let currentHeight = 0;
    aboutMeWrapperDiv.forEach((divElement, index) => {
      if (index === 0) {
        tempSectionHeightArr.push({
          elementHeight: "0px",
          elementIndex: "-∞",
          elementName: "welcomeSentence",
          accumulateHeight: currentHeight,
        });
        currentHeight += window.innerHeight;
      }
      tempSectionHeightArr.push({
        elementHeight: `${(
          (currentHeight / documentHeight) *
          viewWindowHeight
        ).toFixed(2)}px`,
        elementIndex: `00${String(index + 1)}`,
        elementName: divElement.id,
        accumulateHeight: currentHeight,
      });
      currentHeight += divElement.scrollHeight;
    });
    tempSectionHeightArr.push({
      elementHeight: `${viewWindowHeight}px`,
      elementIndex: `∞`,
      elementName: `end`,
      accumulateHeight: currentHeight,
    });
    console.log(tempSectionHeightArr);
    setSectionHeightArr(tempSectionHeightArr);
  };

  React.useEffect(() => {
    if (sectionHeightArr.length === 0) {
      initScrollBar();
    }
    window.addEventListener("scroll", pageScrollFunc);
    window.addEventListener("resize", initScrollBar);
    return (_) => {
      window.removeEventListener("resize", initScrollBar);
      window.removeEventListener("scroll", pageScrollFunc);
    };
  });

  const pageJumpFunc = (index, elementId) => {
    console.log(index, elementId);
    if (index === 0) {
      window.scrollTo(0, 0);
    } else if (index === sectionHeightArr.length - 1) {
      window.scrollTo(0, document.body.scrollHeight);
    } else {
      document.querySelector(`#${elementId}`).scrollIntoView();
    }
  };

  const pageScrollFunc = () => {
    let currentPosition = window.pageYOffset;
    let documentHeight = document.documentElement.scrollHeight;
    let currentPercentage = (currentPosition / documentHeight * 100).toFixed(2);
    barFillRef.current.style.height = `${currentPercentage}%`;
    console.log(`currentPosition: ${currentPosition}`);
    for (let index = 0; index < sectionHeightArr.length; index++) {
      let currentElement = sectionHeightArr[index];
      let pointDiv = document.querySelector(`#scrollBarPoint${index}`);
      if (currentPosition >= currentElement.accumulateHeight) {
        pointDiv.classList.remove('point--active');
        pointDiv.classList.add('point--complete');
      } else {
        pointDiv.classList.remove('point--complete');
        pointDiv.classList.add('point--active');
        break;
      }
    }
  };

  return (
    <div className={"progress " + (displayScrollBar ? "active" : "active")}>
      <div className="bar">
        <div className="bar__fill" ref={barFillRef} />
      </div>
      <div className="point-group">
        {sectionHeightArr.map((el, index) => {
          return (
            <div
              className="point"
              id={`scrollBarPoint${index}`}
              key={el.elementName}
              style={{ marginTop: el.elementHeight }}
              onClick={() => {
                pageJumpFunc(index, el.elementName);
              }}
            >
              <div className="bullet"></div>
              <label className="label">{el.elementIndex}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollBar;
