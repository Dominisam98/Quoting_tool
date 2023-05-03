import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./fuelcalc.css";
import Select from "react-select";
import axios from 'axios';

function FuelCalc() {
const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phonenumber: "",
    airport: ['JFK', 'LGA']
  });
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [sum, setSum] = useState(0)
  const [divided, setDivided] = useState(0)

  const handleNum1 = (e) => {
      setNum1(e.target.value);
  }
  const handleNum2 = (e) => {
   setNum2(e.target.value);

}
  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };


  function handleSubmit(event) {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    console.log(contactInfo);

    setSum(parseInt(num1) + parseInt(num2))
    // console.log(sum)
    setDivided(sum / 2)
    console.log(divided)
    return divided
}

  const actions = [
    { label: "LGA", value: "LGA" },
    { label: "JFK", value: "JFK" },
    { label: "OPK", value: "OPK" },
  ];

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <h3>Client Form</h3>
          </div>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={contactInfo.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="number"
              name="num1"
              placeholder="Num 1"
              value={num1}
              onChange={handleNum1}
            />
          </div>

          <div>
            <input
              type="number"
              name="num2"
              placeholder="Num 2"
              value={num2}
              onChange={handleNum2}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={contactInfo.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="number"
              name="phonenumber"
              placeholder="Phone Number"
              value={contactInfo.phonenumber}
              onChange={handleChange}
            />
          </div>
          <div>
          <select multiple={true} name="airport" value={contactInfo.airport.value}  onChange={handleChange} >
          <option  value='JFK'>JFK</option>
            <option value='LGA'>LGA</option>
            <option value='BWI'>BWI</option>
            <option value='OPK'>OPK</option>
        </select>
          </div>
          <div>
            <button>Calculate</button>
          </div>
        </form>

        <p></p>
      </div>
    </>
  );
}
export default FuelCalc;
