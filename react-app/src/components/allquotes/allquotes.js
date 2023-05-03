import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as quoteStore from "../../store/quote";

import { Link } from "react-router-dom";
import { thunk_getAllQuotes } from "../../store/quote";


function ViewQuotes() {
  const history = useHistory();
  const dispatch = useDispatch();
  const quoteReducer = useSelector((state) => state.quoteReducer);
  let quotes = quoteReducer?.allQuotes
  const [quoteState, setQuoteState] = useState(quotes);
  const [isShown, setIsShown] = useState('');



  if(!quotes){
    dispatch(quoteStore.thunk_getAllQuotes());
  }

  useEffect(() => {
    dispatch(quoteStore.thunk_getAllQuotes());
    setQuoteState(quoteReducer?.allQuotes)
    console.log(quoteState)
  }, [dispatch]);


  return (
    <section className="background-container">
      <div className="feed-main-container">
        <div className="feed-buttons">
          <div className="buttons-container">
            <button
              className="button-guy"
              onClick={() => setQuoteState(quoteReducer?.allQuotes)}
            >
            </button>
          </div>
        </div>
        <div className="map-and-feed">
          <div className="feed-div">
            {quoteState &&
              quoteState.map((quote, key) => (
                <div
                  className="quote-feed-container"
                  key={key}
                  onMouseEnter={() => setIsShown(quote.id)}
                  onMouseLeave={() => setIsShown("")}


                     >

                  <div className="quote-details">


                    <div className="quote-and-info">
                      <p>Created by: {quote.User}</p>
                      <p>{"Orgin: " + quote.orgin}</p>
                      <p>{"First Name: " + quote.firstName}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ViewQuotes;
