import React, { useState, useEffect } from "react";
import "./createaquote.css";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import moment from "moment";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import { NavLink } from "react-router-dom";
import * as postActions from "../../store/quote";
import * as quoteStore from "../../store/quote";




function CreateQuote() {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [passengers, setPassengers] = useState("");
  const [orgin, setOrgin] = useState("");
  const [destination, setDestination] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  // const [checkInDate, setCheckInDate] = useState(
  //   setHours(setMinutes(new Date(), 0), 0)
  // );
  // const [checkOutDate, setCheckOutDate] = useState(null);
  const [quotes, setQuote] = useState([]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = user.id;



      await dispatch(
        postActions.thunk_addQuote({
          userId: userId,
          firstName: firstName,
          lastName: lastName,
          passengers: passengers,
          orgin: orgin,
          destination: destination,

        })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
      await dispatch(quoteStore.thunk_getAllQuotes()).then(
        (res) => res && history.push("/quotes")
      );
    }


  // const handleCheckInDate = (date) => {
  //   setCheckInDate(date);
  //   setCheckOutDate(null);
  // };

  // const handleCheckOutDate = (date, time) => {
  //   setCheckOutDate(date);
  // };

  // document.addEventListener("wheel", function (event) {
  //   if (document.activeElement.type === "number") {
  //     document.activeElement.blur();
  //   }
  // });



  // const userComponents = quotes.map((quote) => {
  //   return (
  //     <li key={quote.id}>
  //       <NavLink to={"/"} className="white">
  //         Username: {quote.User}
  //         <br></br>
  //         phone number: {quote.phone}
  //         <br></br>
  //         Destination: {quote.destination}
  //       </NavLink>
  //     </li>
  //   );
  // });
  console.log(quotes);

  return (
    <div className="newquotepage">
      <div className="login-box">
        <h2>Create A Quote</h2>
      <form onSubmit={handleSubmit}>


          <div className="user-box">
          <input type="text" value={firstName}
              onChange={(e) => setFirstName(e.target.value)}></input>
            <label>First Name</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required="" value={lastName}
              onChange={(e) => setLastName(e.target.value)}></input>
            <label>Last Name</label>
          </div>

          <div className="user-box">
            <input type="text" value={orgin}
              onChange={(e) => setOrgin(e.target.value)}></input>
            <label>Orgin </label>
          </div>
          <div className="user-box">
            <input type="text" value={destination}
              onChange={(e) => setDestination(e.target.value)}></input>
            <label>Destination </label>
          </div>
          <div className="user-box">
            <input type="number" value={passengers}
              onChange={(e) => setPassengers(e.target.value)}></input>
            <label>Number of Passengers (optional) </label>
          </div>
          {/* <div className="calendar">
            <label>Depart</label>
            <DatePicker
              selected={checkInDate}
              minDate={new Date()}
              showTimeSelect
              placeholderText="Click to select a date"
              todayButton="Today"
              onChange={handleCheckInDate}
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </div>
          <div className="calendar">
            <label>Return</label>
            <DatePicker
              selected={checkOutDate}
              minDate={checkInDate}
              placeholderText="Click to select a date"
              showTimeSelect
              touchUi={true}
              onChange={handleCheckOutDate}
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </div>

          {checkInDate && checkOutDate && (
            <div className="summary">
              <p className="summary">
                You booked a flight from{" "}
                {moment(checkInDate).format("MMMM Do YYYY, h:mm a")} to{" "}
                {moment(checkOutDate).format("MMMM Do YYYY, h:mm a")}.
              </p>
            </div>
          )} */}

            <button className="submitt" type="submit">
            Submit Listing
          </button>
        </form>
      </div>
    </div>
  );
}
export default CreateQuote;
