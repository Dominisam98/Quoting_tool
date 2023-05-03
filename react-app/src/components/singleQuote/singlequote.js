import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { useParams } from "react-router";
// import NavBar from "../navBar/NavBar.js";

import * as spotStore from "../../store/spot";

function SingleQuote() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const spots = useSelector((state) => state.spotReducer.allSpots)

  const userId = user?.id;

  // const reviews = spot?.reviews
  // console.log(reviews)
  if(!spots){
    history.push('/quotes')
  }

  let spot;

  if(spots){
    spot = spots.filter((spot) => spot["id"] == id)[0];


  }

  // if(spot){
  //   const reviews = spot?.reviews;
  //   console.log(reviews);
  // }

  let content;
  if(userId === spot?.userId){
    content = (
      <div className="edit-delete">
        <div>

        </div>
        <div>

        </div>
      </div>
    );
  }








  useEffect(() => {
    dispatch(spotStore.thunk_getAllSpots());
  }, [dispatch, id]);

  return (
    <div className="single-post-container">

      <div className="spot-edit-delete">
        <div><p className="white_text">
        {spot?.name}-{spot?.address} {spot?.city} <div>{spot?.state}</div> 
          </p>
        </div>
        <div>{content}</div>
      </div>
      <div className="images-container">
        <div className="main-image-container">

        </div>
        <div className="small-images-container">



        </div>
      </div>
      <div className="host-and-price-container">
        <div className="host-spot-small">
       <p className="white_text">  Created by: {spot?.User}</p>
        </div>
        <div className="spot-price"><p className="white_text">Price: ${spot?.price}</p></div>
      </div>
      <div>

      </div>



    </div>
  );
}
export default SingleQuote;
