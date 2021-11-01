import React from "react";
import "./scrollBar.scss";

const ScrollBar = (props) => {
  let displayScrollBar = props.shouldDisplay;
  const viewWindowHeight = window.innerHeight;
  const [scrollBarHeight, setScrollBarHeight] = React.useState([]);
  const [sectionHeightArr, setSectionHeightArr] = React.useState([]);
  const barFillRef = React.useRef(null);

  const initScrollBar = () => {
    if (!document.querySelector("#about-me-outter-wrap")) return;
    let documentHeight = document.documentElement.scrollHeight;
    let tempSectionHeightArr = [];
    let aboutMeWrapperDiv = document.querySelectorAll(
      "#about-me-outter-wrap > div"
    );

    document.querySelector(".bar").style.marginTop = `${(
      (window.innerHeight / documentHeight) *
      viewWindowHeight
    ).toFixed(2)}px`;

    let currentHeight = window.innerHeight;
    aboutMeWrapperDiv.forEach((divElement, index) => {
      tempSectionHeightArr.push({
        elementHeight: (
          (currentHeight / documentHeight) *
          viewWindowHeight
        ).toFixed(2),
        elementIndex: `00${String(index + 1)}`,
        elementName: divElement.id,
        accumulateHeight: currentHeight,
      });
      currentHeight += index !== 5 ? divElement.scrollHeight : 0;
      if (index > 0) {
        scrollBarHeight.push(
          tempSectionHeightArr[index].elementHeight -
            tempSectionHeightArr[index - 1].elementHeight
        );
      }
    });
    document.querySelector(".bar").style.height = `${(
      ((currentHeight - window.innerHeight) / documentHeight) *
      viewWindowHeight
    ).toFixed(2)}px`;
    setScrollBarHeight(scrollBarHeight);
    setSectionHeightArr(tempSectionHeightArr);
    console.log(tempSectionHeightArr);
    console.log(scrollBarHeight);
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
    document.querySelector(`#${elementId}`).scrollIntoView();
  };

  const pageScrollFunc = () => {
    if (!displayScrollBar) return;
    let currentPosition = window.pageYOffset;
    for (let index = 0; index < sectionHeightArr.length; index++) {
      let prevElement = index > 0 ? sectionHeightArr[index - 1] : null;
      let currentElement = sectionHeightArr[index];

      if (currentPosition >= currentElement.accumulateHeight) {
        if (index > 0) {
          document
            .querySelector(`#scrollBarPoint${index - 1}`)
            .classList.remove("point--active");
          document
            .querySelector(`#scrollBarPoint${index - 1}`)
            .classList.add("point--complete");
        }
        continue;
      }

      if (prevElement) {
        document
          .querySelector(`#scrollBarPoint${index - 1}`)
          .classList.add("point--active");
        let intervalHeight =
          currentElement.accumulateHeight - prevElement.accumulateHeight;
        let currentPercentage =
          (currentPosition - prevElement.accumulateHeight) / intervalHeight;
        let barFillHeight = currentPercentage * scrollBarHeight[index - 1];
        let baseHeight = scrollBarHeight
          .slice(0, index - 1)
          .reduce((acc, cur) => {
            return acc + parseFloat(cur);
          }, 0);
        barFillHeight += baseHeight;
        barFillRef.current.style.height = `${barFillHeight.toFixed(2)}px`;
      }

      for (
        let tempIndex = index;
        tempIndex < sectionHeightArr.length;
        tempIndex++
      ) {
        document
          .querySelector(`#scrollBarPoint${tempIndex}`)
          .classList.remove("point--active");
        document
          .querySelector(`#scrollBarPoint${tempIndex}`)
          .classList.remove("point--complete");
      }
      break;
    }

    // let documentHeight = document.documentElement.scrollHeight;
    // let currentPercentage = ((currentPosition / documentHeight) * 100).toFixed(
    //   2
    // );
    // barFillRef.current.style.height = `${currentPercentage}%`;
    // // console.log(`currentPosition: ${currentPosition}`);
    // for (let index = 0; index < sectionHeightArr.length; index++) {
    //   let currentElement = sectionHeightArr[index];
    //   let pointDiv = document.querySelector(`#scrollBarPoint${index}`);
    //   if (currentPosition >= currentElement.accumulateHeight) {
    //     pointDiv.classList.remove("point--active");
    //     pointDiv.classList.add("point--complete");
    //   } else {
    //     pointDiv.classList.remove("point--complete");
    //     pointDiv.classList.add("point--active");
    //     break;
    //   }
    // }
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
              style={{ marginTop: `${el.elementHeight}px` }}
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
