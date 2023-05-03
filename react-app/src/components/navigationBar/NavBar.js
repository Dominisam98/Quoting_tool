import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./navBar.css"
import ProfileButton from "./profilebutton";
import * as spotStore from "../../store/spot";
import MyImage from './Craft-logo-white.svg';


const NavBar = ({ loaded }) => {
  const priceReducer = useSelector((state) => state.priceReducer);
    let prices = priceReducer?.allPrices
    const [priceState, setPriceState] = useState(prices);
  const user = useSelector((state) => state.session.user);
  const spotReducer = useSelector((state) => state.spotReducer);
  let spots = spotReducer?.allSpots
  const [spotState, setSpotState] = useState(spots);

  let sessionLinks;
  if (user) {
    sessionLinks = (
      <>
        <nav className='header'>
<NavLink to="/" className='black'><img src={MyImage} alt="logo"  style={{

            height: 180,
            width: 200
          }}/></NavLink>

          <ul className="main-nav">
            <li>
              <NavLink to="/" exact={true} activeClassName="active">
                {" "}
                Home{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to="/quotes" exact={true} activeClassName="active"  onClick={() => setSpotState(spotReducer?.allSpots)}>
                {" "}
                Quotes{" "}
              </NavLink>
            </li>

            <li>
              <NavLink to="/schedule" exact={true} activeClassName="active">
                Schedule
              </NavLink>
            </li>
            <li>
              <NavLink to="/calendars" exact={true} activeClassName="active">
               Calendar
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/quotes/new" exact={true} activeClassName="active">
                New Quote
              </NavLink>
            </li> */}
            <li>
              <NavLink to="/quotes/new" exact={true} activeClassName="active">
                New Quote

              </NavLink>
            </li>
            {/* <li>
            <NavLink to="/quotes" className='buttin'>View all quotes</NavLink>
            </li> */}
            <li>
              <NavLink to="/clients" exact={true} activeClassName="active">
                Clients
              </NavLink>
            </li>
            <li>
              <NavLink to="/prices" exact={true} activeClassName="active" onClick={() => setPriceState(priceReducer?.allPrices)}>
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink to="/email" exact={true} activeClassName="active">
                Email Quote
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/send-quote" exact={true} activeClassName="active">
                Send Quote
              </NavLink>
            </li> */}
            <li>
            <ProfileButton user={user} />
            </li>
          </ul>
        </nav>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <nav className="header">
        <h1 className="logo">
          <NavLink to="/" className='black'>Craft</NavLink></h1>
          <ul className="main-nav">
            <li>
              <NavLink to="/login" exact={true} className="white">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/sign-up" exact={true} activeClassName="active">
                Sign Up
              </NavLink>
            </li>
          </ul>
        </nav>

      </>
    );
  }

  return (

      <ul>
        {loaded && sessionLinks}
      </ul>
  );
};

export default NavBar;
