import React, { useEffect } from "react";
import AOS from "aos";
import "./aboutMe.scss";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const titleAnimationHeight =
    0.4 * Math.min(window.innerHeight, window.innerWidth);
  const textAnimationHeight = 0.45 * window.innerHeight;

  return (
    <div>
      <div id="about-me-div">
        <div
          className="paragraph-div"
          data-aos="fade-up"
          data-aos-offset={titleAnimationHeight}
          data-aos-duration="800"
          data-aos-easing="ease"
        >
          <h1 className="section-paragraph section-title">
            <small> (001) </small> WHO AM I?
          </h1>
        </div>

        <div
          className="paragraph-div"
          data-aos="fade-up"
          data-aos-offset={textAnimationHeight}
          data-aos-duration="800"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph section-name">
            Hello<small>,</small>My name is MingJie Wang.
          </h2>
        </div>

        <div
          className="paragraph-div mb5vh"
          data-aos="fade-up"
          data-aos-offset={textAnimationHeight}
          data-aos-duration="800"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph section-text">
            I'm a Full Stack Software Engineer working at Uber.
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="fade-up"
          data-aos-offset={textAnimationHeight}
          data-aos-duration="800"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph section-text">
            <span className="cross-text">A recent graduate</span> An alumni from
            <a
              className="school-text"
              href="https://www.rpi.edu/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              RPI
            </a>
            , NY.
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="fade-up"
          data-aos-offset={textAnimationHeight}
          data-aos-duration="800"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph section-text">
            I believe in the notion of <br />
            <span className="notion-text"> &lt;LESS is MORE&gt;</span>. <br />
            All my <span className="cross-text">outfit</span> work reflect my
            addiction of <span className="minimalism-text">Minimalism</span>.
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="fade-up"
          data-aos-offset={textAnimationHeight}
          data-aos-duration="800"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph section-text">
            I am constantly{" "}
            <span className="level-up-text">
              <span>l</span>
              <span>e</span>
              <span>v</span>
              <span>e</span>
              <span>l</span>
              <span>i</span>
              <span>n</span>
              <span>g</span> <span>u</span>
              <span>p</span>
            </span>{" "}
            my tech skills. <br />
            <div className="focus">
              <div className="focus--mask">
                <div className="focus--mask-inner">FOCUSING</div>
              </div>
            </div>{" "}
            on front-end skills at this moment.
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="fade-up"
          data-aos-offset={textAnimationHeight}
          data-aos-duration="800"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph section-text">
            My goal is to <span className="cross-text">at least know</span>{" "}
            <br /> LOVE what I am doing and{" "}
            <span className="cross-text">don't mess it up</span> <br />
            take it to ANOTHER level.
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="fade-up"
          data-aos-offset={textAnimationHeight}
          data-aos-duration="800"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph section-text">
            My goal is to <span className="cross-text">at least know</span>{" "}
            <br /> LOVE what I am doing and{" "}
            <span className="cross-text">don't mess it up</span> <br />
            take it to ANOTHER level.
          </h2>
        </div>
      </div>

      <div id="about-my-work-div">
        <div
          className="paragraph-div"
          data-aos="fade-up"
          data-aos-offset={titleAnimationHeight}
          data-aos-duration="800"
          data-aos-easing="ease"
        >
          <h1 className="section-paragraph section-title">
            <small> (002) </small> WHAT HAVE I DONE?
          </h1>
        </div>

        <div
          className="paragraph-div"
          data-aos="fade-up"
          data-aos-offset={textAnimationHeight}
          data-aos-duration="800"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph section-name">
            Hello<small>,</small>My name is MingJie Wang.
          </h2>
        </div>

        <div
          className="paragraph-div mb5vh"
          data-aos="fade-up"
          data-aos-offset={textAnimationHeight}
          data-aos-duration="800"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph section-text">
            I'm a Full Stack Software Engineer working at Uber.
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="fade-up"
          data-aos-offset={textAnimationHeight}
          data-aos-duration="800"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph section-text">
            <span className="cross-text">A recent graduate</span> An alumni from
            <a
              className="school-text"
              href="https://www.rpi.edu/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              RPI
            </a>
            , NY.
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="fade-up"
          data-aos-offset={textAnimationHeight}
          data-aos-duration="800"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph section-text">
            I believe in the notion of <br />
            <span className="notion-text"> &lt;LESS is MORE&gt;</span>. <br />
            All my <span className="cross-text">outfit</span> work reflect my
            addiction of <span className="minimalism-text">Minimalism</span>.
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="fade-up"
          data-aos-offset={textAnimationHeight}
          data-aos-duration="800"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph section-text">
            I am constantly{" "}
            <span className="level-up-text">
              <span>l</span>
              <span>e</span>
              <span>v</span>
              <span>e</span>
              <span>l</span>
              <span>i</span>
              <span>n</span>
              <span>g</span> <span>u</span>
              <span>p</span>
            </span>{" "}
            my tech skills. <br />
            <div className="focus">
              <div className="focus--mask">
                <div className="focus--mask-inner">FOCUSING</div>
              </div>
            </div>{" "}
            on front-end skills at this moment.
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="fade-up"
          data-aos-offset={textAnimationHeight}
          data-aos-duration="800"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph section-text">
            My goal is to <span className="cross-text">at least know</span>{" "}
            <br /> LOVE what I am doing and{" "}
            <span className="cross-text">don't mess it up</span> <br />
            take it to ANOTHER level.
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="fade-up"
          data-aos-offset={textAnimationHeight}
          data-aos-duration="800"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph section-text">
            My goal is to <span className="cross-text">at least know</span>{" "}
            <br /> LOVE what I am doing and{" "}
            <span className="cross-text">don't mess it up</span> <br />
            take it to ANOTHER level.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
