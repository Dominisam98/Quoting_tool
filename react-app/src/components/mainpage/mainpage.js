import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { Redirect, NavLink, Link } from "react-router-dom";
// import {QRCodeSVG} from 'qrcode.react';

import "./mainpage.css";

function MainPage({ loaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  document.getElementById('mountNode')

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className="bg">
        <header className="c-header">
          <h1>Response Requested</h1>
        </header>
        {/* <QRCodeSVG value="https://www.elliottaviation.com/locations/fbo-services/fuel-calculator/" /> */}
      </div>
    );
  } else {
    sessionLinks = (
      <>
        <div className="c-heroImageGrid">
          <div className="container-3">
            <div className="column"></div>
            <div className="column">
              <div className="row"></div>
              <div className="row">
                <div>
                  <div className="text">
                    <h6 className="gridtitle">
                      Quoting
                      <br />
                      Tool
                      <br />
                      <br />{" "}
                      <Link to="/login" className="getstarted">
                        Get Started
                      </Link>
                    </h6>
                    <br />{" "}
                    <Link to="/login" className="getstarted">
                      Get Started
                    </Link>
                  </div>
                </div>
                <div></div>
              </div>
              <div className="row"></div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div>
      <div>{loaded && sessionLinks}</div>
    </div>
  );
}

export default MainPage;
