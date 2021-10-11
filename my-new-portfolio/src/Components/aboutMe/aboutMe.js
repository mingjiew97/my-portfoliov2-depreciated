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
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h1 className="section-paragraph section-title">
            <small> (001) </small> <br />
            WHO AM I?
          </h1>
        </div>

        <div
          className="paragraph-div"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph section-name">
            Hello<small>,</small>My name is MingJie Wang.
          </h2>
        </div>

        <div
          className="paragraph-div mb5vh"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph section-text">
            I'm a Full Stack Software Engineer working at Uber.
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
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
          data-aos-anchor-placement="center-center"
          data-aos-duration="600"
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
          data-aos-anchor-placement="center-center"
          data-aos-duration="600"
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
          data-aos-anchor-placement="center-center"
          data-aos-duration="600"
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

      <div id="more-about-me-div">
        <div
          className="paragraph-div"
          data-aos="zoom-in-right"
          data-aos-anchor-placement="center-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h1 className="section-paragraph section-title">
            <small> (002) </small> <br />
            WHY I am an "AWESOME" Developer?
          </h1>
        </div>

        <div
          className="paragraph-div mb5vh"
          data-aos="zoom-in-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph more-section-text">
            I have no <span className="adj-text">fear</span>
            <br />
            bcs I play with <span className="python-text">Python</span>
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="zoom-in-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph more-section-text">
            I stay up <span className="adj-text">all night</span>
            <br />
            bcs I use <span className="java-text">Java</span>
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="zoom-in-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph more-section-text">
            I <span className="adj-text">plan</span> the night{" "}
            <span className="adj-text">well</span>
            <br />
            bcs I write <span className="js-text">JavaScript</span>
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="zoom-in-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph more-section-text">
            My code is so <span className="adj-text">fast</span>
            <br />
            bcs I use <span className="express-text">Express</span>
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="zoom-in-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph more-section-text">
            I never <span className="adj-text">compromise</span>
            <br />
            bcs I know <span className="angular-text">ANGULAR</span>
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="zoom-in-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph more-section-text">
            I act <span className="adj-text">fast</span>
            <br />
            bcs I know <span className="react-text">React</span>
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="zoom-in-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph more-section-text">
            I always <span className="adj-text">introspect</span>
            <br />
            bcs I know <span className="redux-text">Redux</span>
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="zoom-in-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph more-section-text">
            My code has <span className="adj-text">no</span> bugs
            <br />
            bcs I told them to <span className="go-text">GO</span> away
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="zoom-in-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph more-section-text">
            My code is so <span className="adj-text">sexy</span>
            <br />
            and it should be rated <span className="r-text">R</span>
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="zoom-in-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph section-small-name">
            MOST <span className="notion-text">IMPORTANTLY</span>
          </h2>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="zoom-in-right"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph section-small-name">
            I GET THINGS <span className="done-text">DONE</span>!
          </h2>
        </div>
      </div>

      <div id="about-my-work-div">
        <div
          className="paragraph-div"
          data-aos="flip-up"
          data-aos-anchor-placement="center-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h1 className="section-paragraph section-title">
            <small> (003) </small> <br />
            WHAT HAVE <br />I DONE?
          </h1>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="flip-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-title">
            Full Stack Software Engineer <br />
            <span className="work-company-name work-section-small-font">
              <span className="at-text">@</span> Uber
            </span>
            <span className="work-time-text work-section-small-font">
              2021.07 - present
            </span>
          </h2>
        </div>

        <div
          className="paragraph-div mt3vh mb3vh"
          data-aos="flip-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-text">
            <div className="work-section-row">
              <div className="work-section-dot">&#183;</div>
              <div className="work-section-detail">
                Developed and Maintained uRate
                <div className="work-section-small-detail">
                  <div className="work-section-small-detail-dot">-</div>
                  <div className="work-section-small-detail-text">
                    An Uber feedback system used across all Uber's applications
                    BOTH internally and externally.
                  </div>
                </div>
                <div className="work-section-small-detail">
                  <div className="work-section-small-detail-dot">*</div>
                  <div className="work-section-small-detail-text">
                    Front end UI using FusionJS; <br />
                    Widget using JavaScript; <br />
                    Back end using NodeJS and Go; <br />
                    Database using MySQL;
                  </div>
                </div>
              </div>
            </div>
          </h2>
        </div>

        <div
          className="paragraph-div mt10vh mb5vh"
          data-aos="flip-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-title">
            Software Engineer <br />
            <span className="work-company-name work-section-small-font">
              <span className="at-text">@</span> Verizon ThingSpace
            </span>
            <span className="work-time-text work-section-small-font">
              2020.01 - 2021.07
            </span>
          </h2>
        </div>

        <div
          className="paragraph-div mt3vh mb3vh"
          data-aos="flip-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-text">
            <div className="work-section-row">
              <div className="work-section-dot">&#183;</div>
              <div className="work-section-detail">
                Developed and Maintained Verizon's ThingSpace IoT platform
                <div className="work-section-small-detail">
                  <div className="work-section-small-detail-dot">-</div>
                  <div className="work-section-small-detail-text">
                    A Verizon Platform for users to manage and purchase their
                    IoT Devices.
                  </div>
                </div>
                <div className="work-section-small-detail">
                  <div className="work-section-small-detail-dot">*</div>
                  <div className="work-section-small-detail-text">
                    Front end using Angular2+; <br />
                    Static Content using AEM (Adobe Experience Manager); <br />
                    Back end using NodeJS; <br />
                  </div>
                </div>
              </div>
            </div>
          </h2>
        </div>

        <div
          className="paragraph-div mt3vh mb3vh"
          data-aos="flip-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-text">
            <div className="work-section-row">
              <div className="work-section-dot">&#183;</div>
              <div className="work-section-detail">
                Designed and Developed the IoT Marketplace
                <div className="work-section-small-detail">
                  <div className="work-section-small-detail-dot">-</div>
                  <div className="work-section-small-detail-text">
                    Provides an annual revenue of 250 million dollar.
                  </div>
                </div>
                <div className="work-section-small-detail">
                  <div className="work-section-small-detail-dot">-</div>
                  <div className="work-section-small-detail-text">
                    In lead of the IoT Marketplace 2.0 to bring enhanced
                    shopping experience to customers using Hansen Catalog
                    Service.
                  </div>
                </div>
              </div>
            </div>
          </h2>
        </div>

        <div
          className="paragraph-div mt3vh mb3vh"
          data-aos="flip-up"
          data-aos-anchor-placement="center-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-text">
            <div className="work-section-row">
              <div className="work-section-dot">&#183;</div>
              <div className="work-section-detail">
                Developed SSO (Single Sign On)
                <div className="work-section-small-detail">
                  <div className="work-section-small-detail-dot">-</div>
                  <div className="work-section-small-detail-text">
                    User can login seamlessly from all ThingSpace portals to
                    Verizon's portals. Vice versa.
                  </div>
                </div>
                <div className="work-section-small-detail">
                  <div className="work-section-small-detail-dot">*</div>
                  <div className="work-section-small-detail-text">
                    Implemented via IDM and Forgerock
                  </div>
                </div>
              </div>
            </div>
          </h2>
        </div>

        <div
          className="paragraph-div mt3vh mb3vh"
          data-aos="flip-up"
          data-aos-anchor-placement="center-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-text">
            <div className="work-section-row">
              <div className="work-section-dot">&#183;</div>
              <div className="work-section-detail">
                Implemented Medallia Journey Tracking over the whole platform
              </div>
            </div>
          </h2>
        </div>

        <div
          className="paragraph-div mt3vh mb3vh"
          data-aos="flip-up"
          data-aos-anchor-placement="center-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-text">
            <div className="work-section-row">
              <div className="work-section-dot">&#183;</div>
              <div className="work-section-detail">
                Migrated the whole static content from Hugo to AEM in 2 months.
              </div>
            </div>
          </h2>
        </div>

        <div
          className="paragraph-div mt3vh mb3vh"
          data-aos="flip-up"
          data-aos-anchor-placement="center-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-text">
            <div className="work-section-row">
              <div className="work-section-dot">&#183;</div>
              <div className="work-section-detail">
                Migrated and Refactored the whole backend application from Azure
                to AWS in 3 months.
              </div>
            </div>
          </h2>
        </div>

        <div
          className="paragraph-div mt10vh mb5vh"
          data-aos="flip-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-title">
            Machine Learning Software Engineering Research Intern <br />
            <span className="work-company-name work-section-small-font">
              <span className="at-text">@</span> Tetherless World Constellation
              Lab
            </span>
            <span className="work-time-text work-section-small-font">
              2018.05 - 2018.09
            </span>
          </h2>
        </div>

        <div
          className="paragraph-div mt3vh mb3vh"
          data-aos="flip-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-text">
            <div className="work-section-row">
              <div className="work-section-dot">&#183;</div>
              <div className="work-section-detail">
                Developed and Designed a Machine Learning application to predict
                days and locations of when air quality in China would be most
                heavily polluted{" "}
                <div className="work-section-small-detail">
                  <div className="work-section-small-detail-dot">-</div>
                  <div className="work-section-small-detail-text">
                    Built the machine learning model using Python and trained
                    using 3+ years of air pollution data
                  </div>
                </div>
                <div className="work-section-small-detail">
                  <div className="work-section-small-detail-dot">-</div>
                  <div className="work-section-small-detail-text">
                    Defined understandable semantics and data ontology for easy
                    access by researchers via the web, without any data
                    pre-processing
                  </div>
                </div>
              </div>
            </div>
          </h2>
        </div>

        {/* https://github.com/CognitiveHorizons/RPI-HEALS-Semantic-Data-Dictionaries.git */}
        <div
          className="paragraph-div mt3vh mb3vh"
          data-aos="flip-up"
          data-aos-anchor-placement="center-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-text">
            <div className="work-section-row">
              <div className="work-section-dot">&#183;</div>
              <div className="work-section-detail">
                Developed a Python program using NLP to parse and extra semantic
                information from National Health and Nutrition Examination
                Survey (NHANES) data in order to automatically populate database
                tables{" "}
                <div className="work-section-small-detail">
                  <div className="work-section-small-detail-dot">-</div>
                  <div className="work-section-small-detail-text">
                    Auto generated association data between attributes and
                    diseases (such as Diabetes -> Heart Disease) used by
                    researchers for solving health crises
                  </div>
                </div>
              </div>
            </div>
          </h2>
        </div>

        <div
          className="paragraph-div mt10vh mb5vh"
          data-aos="flip-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-title">
            Software Engineering Research Intern <br />
            <span className="work-company-name work-section-small-font">
              <span className="at-text">@</span> RPI Economics Department <br />{" "}
              - Dr. Yury Yatsynovich
            </span>
            <span className="work-time-text work-section-small-font">
              2018.05 - 2018.12
            </span>
          </h2>
        </div>

        <div
          className="paragraph-div mt3vh mb3vh"
          data-aos="flip-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-text">
            <div className="work-section-row">
              <div className="work-section-dot">&#183;</div>
              <div className="work-section-detail">
                Developed Python application to extra prominent and relevant
                information from 100+ Economist resumes from the United States
                and Russia to gather data for analyzing economic backgrounds
                between the two countries
              </div>
            </div>
          </h2>
        </div>
      </div>

      <div id="side-projects-div">
        <div
          className="paragraph-div"
          data-aos="flip-up"
          data-aos-anchor-placement="center-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h1 className="section-paragraph section-title">
            <small> (004) </small> <br />
            ANY SIDE PROJECTS?
          </h1>
        </div>

        <div
          className="paragraph-div mt5vh mb5vh"
          data-aos="flip-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="600"
          data-aos-easing="ease"
        >
          <h2 className="section-paragraph work-section-title">
            Full Stack Software Engineer <br />
            <span className="work-company-name work-section-small-font">
              <span className="at-text">@</span> Uber
            </span>
            <span className="work-time-text work-section-small-font">
              2021.07 - present
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
