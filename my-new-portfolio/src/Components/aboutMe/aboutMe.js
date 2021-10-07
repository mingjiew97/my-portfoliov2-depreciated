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
  const textAnimationHeight = 0.5 * window.innerHeight;

  return (
    <div className="about-me-div">
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
          <span className="notion-text">
            {" "}
            &lt;ALL you need is LESS&gt;
          </span>{" "}
          <br />
          All my <span className="cross-text">outfit</span> work reflects my
          addiction of <span className="grey-color">minimalism</span>.
        </h2>
      </div>

      <div
        id="para"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-offset="250"
        data-aos-easing="ease"
      >
        <p>
          I am currently learning Redux and Jest to further my <span>back</span>{" "}
          front-end focus while developing my concept of Honne into a native
          mobile application using <span>Swift</span> React Native.
        </p>
      </div>

      <div
        id="para"
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-duration="800"
        data-aos-easing="ease"
      >
        <p>
          My aim is to take coding into the <span>fifth</span> professional
          dimension where I hope to bring value and continously grow myself.
        </p>
      </div>

      <div
        id="para"
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-duration="800"
        data-aos-easing="ease"
      >
        <p>
          When I'm not coding<small>,</small> you can either find me playing
          football at the <span>World Cup</span> park<small>,</small>
          sipping on <span>whiskey</span> gin or both...
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
