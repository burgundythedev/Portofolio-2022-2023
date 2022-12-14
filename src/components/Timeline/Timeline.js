import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollToPlugin } from "gsap/all";
import htmlLogo from "../../UI/Image/html.png";
import cssLogo from "../../UI/Image/css.png";
import jsLogo from "../../UI/Image/js-logo.png";
import githubLogo from "../../UI/Image/git-hub-icon.png";
import mysqlLogo from "../../UI/Image/mysql-icon.png";
import wpLogo from "../../UI/Image/wordpress-icon.png";
import reactLogo from "../../UI/Image/react-logo.png";
import laraLogo from "../../UI/Image/laravel-icon.png";
import phpLogo from "../../UI/Image/php.png";
import dplLogo from "../../UI/Image/diplome-logo.png";
import walkM from "../../UI/Image/bouton-de-marche-homme.png";
import ropeMan from "../../UI/Image/homme-rope.png";
import climbMan from "../../UI/Image/homme-hike.png";
import internMan from "../../UI/Image/homme-stage.png";
import lugageMan from "../../UI/Image/homme-valise.png";
import diplomaMan from "../../UI/Image/homme-diplome.png";
import jumpMan from "../../UI/Image/homme-au-bar.png";
import runMan2 from "../../UI/Image/homme-run2.png";
import hikeMan from "../../UI/Image/randonneur.png";
import rocketMan from "../../UI/Image/homme-ready.png";
import "./Timeline.scss";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Timeline = () => {
  // const myRef = useRef();

  const onLoad = () => {
    gsap
      .timeline()
      .fromTo(
        ".letter",
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.43,
          delay: 0.7,
        }
      )
      .to(".letter", {
        margin: "0",
        delay: 0.8,
        duration: 0.4,
      })
      .to(".title", {
        y: 0,
      })
      .to(".letter", {
        x: 0,
        delay: 1,
        duration: 2,
      });
  };
  const slideInLeft = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        x: 0,
        delay: delay || 0.8,
        duration: duration || 3,
        scrollTrigger: {
          trigger: elem,
          start: "top center",
          end: "bottom center",
        },
      }
    );
  };
  useEffect(() => {
    onLoad();
  }, []);
  useEffect(() => {
    slideInLeft("#start1");
  }, []);
  useEffect(() => {
    slideInLeft("#box");
  }, []);
  return (
    <React.Fragment>
      <section className="timeline" id="nextSection">
        <div id="start1" className="timeline__beginner">
          <div className="timeline__wrap timeline__wrap--bx1">
            <div className="timeline__icon timeline__icon--1b">
              <img className="timeline__man" src={walkM} alt="logo-walk" />
            </div>
            <div className="timeline__first timeline__first--fcc">
              <h1 className="timeline__date">
                2021
                <span className="timeline__ref">
                  - FreeCodeCamp (Self-Taught)
                </span>
              </h1>
              <p className="timeline__description">
                FreeCodeCamp was the gateway to my first steps into Coding. I've
                completed all the courses of HTML, CSS & JS.
              </p>
              <img src={htmlLogo} alt="logo" className="timeline__logo" />
              <img src={cssLogo} alt="logo" className="timeline__logo" />
              <img src={jsLogo} alt="logo" className="timeline__logo" />
            </div>
          </div>
          <div className="timeline__wrap timeline__wrap--bx2">
            <div className="timeline__icon timeline__icon--2">
              <img className="timeline__man" src={ropeMan} alt="logo-walk" />
            </div>
            <div className="timeline__icon timeline__icon--2b">
              <img className="timeline__man" src={climbMan} alt="logo-walk" />
            </div>
            <div className="timeline__first timeline__first--it">
              <h1 className="timeline__date">
                2021
                <span className="timeline__ref">
                  - Training Web Dev (IT-Akademy)
                </span>
              </h1>
              <p className="timeline__description">
                I've worked on different technologies like PhP, JS, HTML, CSS,
                MySQL, Laravel, WordPress, GitHub & more
              </p>
              <img src={phpLogo} alt="logo" className="timeline__logo" />
              <img src={laraLogo} alt="logo" className="timeline__logo" />
              <img src={jsLogo} alt="logo" className="timeline__logo" />
              <img src={cssLogo} alt="logo" className="timeline__logo" />
              <img src={htmlLogo} alt="logo" className="timeline__logo" />
              <img src={wpLogo} alt="logo" className="timeline__logo" />
              <img src={githubLogo} alt="logo" className="timeline__logo" />
              <img src={mysqlLogo} alt="logo" className="timeline__logo" />
            </div>
          </div>
          <div className="timeline__wrap timeline__wrap--bx3">
            <div className="timeline__icon timeline__icon--3">
              <img className="timeline__man" src={internMan} alt="logo-walk" />
              <img className="timeline__man" src={lugageMan} alt="logo-walk" />
            </div>
            <div className="timeline__first timeline__first--intern">
              <h1 className="timeline__date">
                2021
                <span className="timeline__ref"> - Internship</span>
              </h1>
              <p className="timeline__description">
                During 4 months internship, I,ve learned and created projects
                with React.js.
              </p>
              <img src={reactLogo} alt="logo" className="timeline__logo" />
            </div>
          </div>
          <div className="timeline__wrap timeline__wrap--bx4">
            <div className="timeline__icon timeline__icon--4">
              <img className="timeline__man" src={diplomaMan} alt="logo-walk" />
              {/* <img className="timeline__man" src={climbMan} alt="logo-walk" /> */}
            </div>
            <div className="timeline__first timeline__first--i">
              <h1 className="timeline__date">
                2022
                <span className="timeline__ref"> - Graduated (Bac+2)</span>
              </h1>
              <p className="timeline__description">
                Oral and visual presentation of personnal Projects and knowledge
                developed during the internship and school training
              </p>
              <img
                src={dplLogo}
                alt="logo"
                className="timeline__logo timeline__logo--logo-it"
              />
            </div>
          </div>
          <div className="timeline__wrap timeline__wrap--bx5">
            <div className="timeline__icon timeline__icon--5">
              <img className="timeline__man" src={hikeMan} alt="logo-walk" />
              <img className="timeline__man" src={walkM} alt="logo-walk" />
            </div>
            <div className="timeline__first timeline__first--j">
              <h1 className="timeline__date">
                2022
                <span className="timeline__ref"> - Udemy (Self Taught)</span>
              </h1>
              <p className="timeline__description">
                I dived deeper into React.js! I learned about Hooks, React
                Routing, Animations, HTTP Request, API, BEM, SASS & more
              </p>
              <img src={reactLogo} alt="logo" className="timeline__logo" />
            </div>
          </div>
          <div className="timeline__wrap timeline__wrap--bx6">
            <div className="timeline__icon timeline__icon--6">
              <img className="timeline__man" src={jumpMan} alt="logo-walk" />
              <img className="timeline__man" src={runMan2} alt="logo-walk" />
              <img className="timeline__man" src={rocketMan} alt="logo-walk" />
            </div>
            <div className="timeline__first timeline__first--k">
              <h1 className="timeline__date">
                2022
                <span className="timeline__ref">
                  {" "}
                  - Ready to show the world my skills
                </span>
              </h1>
              <p className="timeline__description timeline__description--k">
                Keep Learning new Coding Concepts - Creation of Personal
                Projects with React.JS, BEM, SASS, API, GitHub & more
              </p>
              <img src={reactLogo} alt="logo" className="timeline__logo" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Timeline;
