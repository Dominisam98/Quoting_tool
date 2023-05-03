import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";
import { useScrollTrigger } from "@mui/material";
import MapSection from "./map/map";

function TestTrial() {
  const [errors, setErrors] = useState([]);
  const [airports, setAirports] = useState([]);
  const [html, setHtml] = useState(null);
  const [long, setLong] = useState(0);
  // const [newlat, setNewLat] = useState(0);
  // const [newlong, setLong] = useState(0);
  const [lat, setLat] = useState(0);
  const [toke, setToken] = useState("");
  const [price, setPrice] = useState("");
  const [arr, setArray] = useState([]);
  const history = useHistory();

  const headers = {
    // 'origin': 'http://localhost:3000',
    accept: "application/json",
    "x-api-key": "FECCAD12-C47F-4A07-9F0B-21A977EE9C5C",
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
  };
  const json_data = {
    "x-api-key": "FECCAD12-C47F-4A07-9F0B-21A977EE9C5C",
    username: "Accounting@craftcharter.com",
    password: "hSMuCZA58#99",
  };

  const icao = () => {
    var config = {
      method: "get",
      url: `https://maps.googleapis.com/maps/api/timezone/json?location=25.795361%2C-80.290111&timestamp=1331161200&key=AIzaSyCueuRnq4kS5iAVacaE-rBkpL8eVqw37Tg`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        const res = response.data.timeZoneId;
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  };



  useEffect(() => {
    mapfunc();
setPrice(price)
  }, [lat, long, price]);


  const icaofunc = () => {
    return axios
      .get(
        `https://www.airport-data.com/api/ap_info.json?icao=${price}`
      )
      .then((res) => {
        console.log(res.data);
        if (price.length == 4) {
          setLat((e) => (res.data.latitude));
          setLong((e) => (res.data.longitude));
          console.log(lat, long);
          // setLat(res.data.latitude)
        }
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setLat(lat)
    // setLong(long)

    icaofunc(newlat, newlong);

    axios
      .post(
        `https://api.fuelerlinx.com/api/User/token`,
        { username: "Accounting@craftcharter.com", password: "hSMuCZA58#99" },
        { headers }
      )
      .then((res) => {
        const token = res.data.token;
        const newtoken = token.slice(4);
        setToken(newtoken);
        const headers2 = {
          accept: "application/json",
          Authorization: "Bearer " + res.data.token.slice(4),
          "x-api-key": "FECCAD12-C47F-4A07-9F0B-21A977EE9C5C",
        };

        return axios.get(
          `https://api.fuelerlinx.com/api/FuelPricing/current/${price}`,
          {
            headers: {
              accept: "application/json",
              Authorization: "Bearer " + res.data.token.slice(4),
              "x-api-key": "FECCAD12-C47F-4A07-9F0B-21A977EE9C5C",
            },
          },
          {
            headers2,
          }
        );
      })
      .then((res) => {
        if (res.data.result[0].fuelPriceOptions[0].price > 2) {
          setArray(res.data.result[0].fuelPriceOptions[0].price);
          console.log(res.data.result[0].fuelPriceOptions[0].price);
        }
      })
      .catch((error) => {
        error = "Incorrect Airport Code";
        if (error) {
          setErrors([error]);
        }
        console.log(error);
      });
    return axios
      .get(
        `https://www.airport-data.com/api/ap_info.json?iata=${price}`
      )
      .then((res) => {
        const persons = res.data;
        if (price.length < 4) {
          console.log(res.data);
          setLat((e) => (res.data.latitude));
          setLong((e) => (res.data.longitude));

          setAirports(persons);
        }
      })
      .catch((error) => {
        error = "Incorrect Airport Code";
        console.log(error);
      });
  };

  let newlat = Number(lat);
  let newlong = Number(long);
  console.log(newlat)
  console.log(newlong)
  let arry = [];
  arry.push(arr);
  const mapfunc = () => {
    if (lat > 0) {
      return (
        <MapSection
          location={{ address: "", lat: newlat, lng: newlong}}
          zoomLevel={17}
        />
      );
    }
  };

  console.log(typeof newlat);

  const renderAirCraftTypes = arry.map((airpo, i) => {
    return (
      <li key={i}>
        <h2>Price</h2>
        <p className="white">$ {airpo}</p>
      </li>
    );
  });

  const renderError = errors.map((error, ind) => {
    if (errors.length) {
      history.push("/users/testtrial");
      return (
        <>
          <div className="error" key={ind}>
            {error}
          </div>
        </>
      );
    } else {
      errors.pop();
      return (
        <>
          <div></div>
        </>
      );
    }
  });

  return (
    <>
      <h2>FuelerLinx Test Trial</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Airport Code"
        />
        <button className="startapi" type="submit">
          Submit
        </button>
        <button className="startapi" onClick={() => window.location.reload()}>
          Reset
        </button>

        {html}
        <ul>{renderAirCraftTypes}</ul>
      </form>
      <div>{renderError}</div>
      {arry.length > 0 && <div>{mapfunc()}</div>}
      {/* <div>{arry.length > 0 ? mapfunc(): null}</div> */}

      <div></div>
    </>
  );
}

export default TestTrial;
