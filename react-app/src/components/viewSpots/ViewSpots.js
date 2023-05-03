import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import * as spotStore from "../../store/spot";
import './viewspots.css'



function ViewSpots() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const spotReducer = useSelector((state) => state.spotReducer);
  let spots = spotReducer?.allSpots
  const [spotState, setSpotState] = useState(spots);
  const [isShown, setIsShown] = useState('');
  const [ latt, setLatt] = useState(41)
  const [ long, setLong ] = useState(-89)
  const [ markers, setMarkers ] = useState(["default"])
  const [key, setKey] = useState();





  if(!spots){
    dispatch(spotStore.thunk_getAllSpots());
  }

  useEffect(() => {
    dispatch(spotStore.thunk_getAllSpots());

  }, [dispatch]);



  return (
    <section className="background-container">
      <div className="">
        <div className="feed-buttons">
          <div className="buttons-container">
            <button
              className=""
              onClick={() => setSpotState(spotReducer?.allSpots)}
            >
              Refresh Quotes
            </button>

          </div>
        </div>
        <div className="itemconfiguration">
          <div className="left_contentlist">
<div className="app">
          <table>
            <tr>
          <th className="white_text">TRIP</th>
          <th className="white_text">Quote Number</th>
          <th className="white_text">Created By</th>
          <th className="white_text">Estimated Cost</th>

        </tr>
            {spotState &&
              spotState.map((spot, key) => (
                <>

                      <tr key={key}><td className="white">
                      <Link to={`/quotes/${spot.id}`} style={{color: 'blue'}} activeStyle={{color: 'red'}}>

                      {spot.name} - {spot.address}</Link></td>
                      <td className="white">{spot.id + 3000}</td>
                      <td className="white"> {spot.User}</td>
                      <td className="white">{"$" + spot.price}</td>
                      </tr>

                    </>

              ))}
              </table>
              </div>
          </div>

          <div className="feed-div">
            {spotState &&
              spotState.map((spot, key) => (
                (spot[key] === (spotState.length - 1)) ?
                <div
                  className="spot-feed-container"
                  key={key}
                  onMouseEnter={() => setIsShown(spot.id)}
                  onMouseLeave={() => setIsShown("")}

                >

                  <div className="spot-details">
                    <div>
                      <span className="spot-name">Orgin: {spot.name}</span>
                      <p>Destination: {spot.address}</p>
                    <p> Quote Number: <span className="spot-name">{spot.id}</span></p>
                      <p>

                      </p>

                    </div>

                    <div className="host-and-price">
                      <p>Created by: {spot.User}</p>
                      <p>Quote Price {"$" + spot.price}</p>

                    </div>
                    <p>----------------------------------------------</p>
                  </div>
                </div>
                : null
              ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default ViewSpots;
