import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./pageEnterAnimation.css";

const PageEnterAnimation = ({ showContent, showScrollDown }) => {
  const coverName = useRef(null);
  const coverDot = useRef(null);
  const cover1 = useRef(null);
  const cover2 = useRef(null);
  const cover3 = useRef(null);
  const cover4 = useRef(null);
  const welcomeSentence = useRef(null);

  // set GSAP Timeline
  const [tl] = useState(new gsap.timeline());
  // name and dot animation
  useEffect(() => {
    tl.from(coverName.current, {
      opacity: 0,
      xPercent: -100,
      delay: 0.5,
      duration: 1,
      ease: "power1.out",
      yoyo: true,
    })
      .from(
        coverDot.current,
        {
          opacity: 0,
          yPercent: 100,
          delay: 0.5,
          repeatDelay: 1,
          duration: 1,
          ease: "power1.out",
        },
        0.01
      )
      .to(coverDot.current, {
        x: 30,
        duration: 1,
        ease: "power1.out",
      })
      .to(coverDot.current, {
        x: 0,
        duration: 0.5,
        ease: "power1.out",
      })
      .to(coverName.current, {
        opacity: 0,
        xPercent: -100,
        duration: 1,
        ease: "power1.out",
        yoyo: true,
      })
      .to(
        coverDot.current,
        {
          opacity: 0,
          duration: 1,
          ease: "expo.out",
        },
        3
      )
      .to(
        cover1.current,
        {
          xPercent: -100,
          duration: 1,
          ease: "power1.out",
        },
        3
      )
      .to(
        cover2.current,
        {
          xPercent: -100,
          duration: 1,
          ease: "power1.out",
        },
        3.2
      )
      .to(
        cover3.current,
        {
          xPercent: -100,
          duration: 1,
          ease: "power1.out",
        },
        3.4
      )
      .to(
        cover4.current,
        {
          xPercent: -100,
          duration: 1,
          ease: "power1.out",
        },
        3.6
      )
      .from(
        document.querySelector("#welcome-sentence01"),
        {
          xPercent: -100,
          duration: 1,
          ease: "power1.out",
          opacity: 0,
        },
        3.8
      )
      .from(
        document.querySelector("#welcome-sentence02"),
        {
          xPercent: -100,
          duration: 1,
          ease: "power1.out",
          opacity: 0,
        },
        4.0
      )
      .from(
        document.querySelector("#welcome-sentence03"),
        {
          xPercent: -100,
          duration: 1,
          ease: "power1.out",
          opacity: 0,
        },
        4.2
      )
      .from(
        document.querySelector("#welcome-sentence04"),
        {
          xPercent: -100,
          duration: 1,
          ease: "power1.out",
          opacity: 0,
          onComplete: () => {
            showScrollDown();
            showContent();
          },
        },
        4.4
      );
  }, [tl, showScrollDown]);

  return (
    <div>
      <div ref={cover4} className="cover-4"></div>
      <div ref={cover3} className="cover-3"></div>
      <div ref={cover2} className="cover-2"></div>

      <div ref={cover1} className="cover-1">
        <div className="cover-heading">
          <div ref={coverName} className="cover-name">
            Mingjie Wang
          </div>
          <div ref={coverDot} className="cover-dot">
            .
          </div>
        </div>
      </div>

      <section ref={welcomeSentence} className="welcome-sentence">
        <p id="welcome-sentence01">
          {" "}
          <span>W</span>ELCO<span>M</span>E TO{" "}
        </p>
        <p id="welcome-sentence02">
          {" "}
          <span>M</span>IN<span>G</span>JIE <span>WA</span>NG<span>'</span>S{" "}
        </p>
        <p id="welcome-sentence03">
          {" "}
          PE<span>R</span>SON<span>A</span>L SP<span>A</span>CE{" "}
        </p>
        <p id="welcome-sentence04"> (σ'ω')σ </p>
      </section>
    </div>
  );
};

export default PageEnterAnimation;
