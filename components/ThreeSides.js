import React, { useState, useEffect } from "react";

const ThreeSides = ({ children }) => {
  return (
    <div className=" position-relative mt-50 pt-80 pb-150 lg-mt-130 lg-pt-60 lg-pb-60">
      <div className="row ">
        <div className="col-md-3 pt-40 ">
          <div className="mt-20">
            <div className="app-body-navigation">
              <nav className="navigation">
                <div className="level-side-category">
                  <a href="#" className="level-side-category">
                    <i className="bi bi-stickies-fill"></i>
                    <span>Correct Word</span>
                  </a>
                  <a href="#" className="level-side-nav">
                    <i className="bi bi-lightbulb-fill"></i>
                    <span>Intermediate</span>
                  </a>
                  <a className="level-side-nav" href="#">
                    <i className="bi bi-lightbulb-fill"></i>
                    <span>Advanced</span>
                  </a>
                </div>

                <div className="level-side-category">
                  <a href="#">
                    <i className="bi bi-stickies-fill"></i>
                    <span>What It Means</span>
                  </a>
                  <a href="#" className="level-side-nav">
                    <i className="bi bi-lightbulb-fill"></i>
                    <span>Intermediate</span>
                  </a>
                  <a className="level-side-nav" href="#">
                    <i className="bi bi-lightbulb-fill"></i>
                    <span>Advanced</span>
                  </a>
                </div>

                <div className="level-side-category">
                  <a href="#" >
                    <i className="bi bi-stickies-fill"></i>
                    <span>Synonyms</span>
                  </a>
                  <a href="#" className="level-side-nav">
                    <i className="bi bi-lightbulb-fill"></i>
                    <span>Intermediate</span>
                  </a>
                  <a className="level-side-nav" href="#">
                    <i className="bi bi-lightbulb-fill"></i>
                    <span>Advanced</span>
                  </a>
                </div>
                
              </nav>
              <footer className="footer">
                <h1>
                  Test My English<small>©</small>
                </h1>
                <div>
                  Test Your English ©<br />
                  All Rights Reserved 2023
                </div>
              </footer>
            </div>
          </div>
        </div>
        <div className="col-md-6 pt-40">
          <div className="container">{children}</div>
        </div>
        <div className="col-md-3 pt-40">
          <div>
            <h3>User Test Data</h3>
            <div>
              <h4>Correct Word Inermediate</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeSides;
