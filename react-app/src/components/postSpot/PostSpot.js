import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { login } from "../../store/session";
import MapSection from "../map/map";
import Email from "../email/email";
import * as spotStore from "../../store/spot";
import * as postActions from "../../store/spot";
import axios from "axios";
import moment from "moment";
import { Autocomplete } from "@mui/material";
import tz from "moment-timezone";
import TextField from "@mui/material/TextField";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { getTime, getDay, format } from "date-fns";
import { send } from "emailjs-com";
import * as calendarStore from "../../store/calendar";
import * as calendarActions from "../../store/calendar";
import Select from "react-select";

import "../foreflight.css";

import * as priceStore from "../../store/price";
import * as priceActions from "../../store/price";

import isCurrency from "validator/lib/isCurrency";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { customers, options } from "../foredata";
import ViewSpots from "../viewSpots/ViewSpots";
import { CgPushChevronUp } from "react-icons/cg";

let shortcut = {
  all_shortcuts: {}, //All the shortcuts are stored in this array
  add: function (shortcut_combination, callback, opt) {
    //Provide a set of default options
    var default_options = {
      type: "keydown",
      propagate: false,
      disable_in_input: false,
      target: document,
      keycode: false,
    };
    if (!opt) opt = default_options;
    else {
      for (var dfo in default_options) {
        if (typeof opt[dfo] == "undefined") opt[dfo] = default_options[dfo];
      }
    }

    var ele = opt.target;
    if (typeof opt.target == "string")
      ele = document.getElementById(opt.target);
    var ths = this;
    shortcut_combination = shortcut_combination.toLowerCase();

    //The function to be called at keypress
    var func = function (e) {
      e = e || window.event;

      if (opt["disable_in_input"]) {
        //Don't enable shortcut keys in Input, Textarea fields
        var element;
        if (e.target) element = e.target;
        else if (e.srcElement) element = e.srcElement;
        if (element.nodeType == 3) element = element.parentNode;

        if (element.tagName == "INPUT" || element.tagName == "TEXTAREA") return;
      }
      let code;
      let k;
      //Find Which key is pressed
      if (e.keyCode) code = e.keyCode;
      else if (e.which) code = e.which;
      var character = String.fromCharCode(code).toLowerCase();

      if (code == 188) character = ","; //If the user presses , when the type is onkeydown
      if (code == 190) character = "."; //If the user presses , when the type is onkeydown

      var keys = shortcut_combination.split("+");
      //Key Pressed - counts the number of valid keypresses - if it is same as the number of keys, the shortcut function is invoked
      var kp = 0;

      //Work around for stupid Shift key bug created by using lowercase - as a result the shift+num combination was broken
      var shift_nums = {
        "`": "~",
        1: "!",
        2: "@",
        3: "#",
        4: "$",
        5: "%",
        6: "^",
        7: "&",
        8: "*",
        9: "(",
        0: ")",
        "-": "_",
        "=": "+",
        ";": ":",
        "'": '"',
        ",": "<",
        ".": ">",
        "/": "?",
        "\\": "|",
      };
      //Special Keys - and their codes
      var special_keys = {
        esc: 27,
        escape: 27,
        tab: 9,
        space: 32,
        return: 13,
        enter: 13,
        backspace: 8,

        scrolllock: 145,
        scroll_lock: 145,
        scroll: 145,
        capslock: 20,
        caps_lock: 20,
        caps: 20,
        numlock: 144,
        num_lock: 144,
        num: 144,

        pause: 19,
        break: 19,

        insert: 45,
        home: 36,
        delete: 46,
        end: 35,

        pageup: 33,
        page_up: 33,
        pu: 33,

        pagedown: 34,
        page_down: 34,
        pd: 34,

        left: 37,
        up: 38,
        right: 39,
        down: 40,

        f1: 112,
        f2: 113,
        f3: 114,
        f4: 115,
        f5: 116,
        f6: 117,
        f7: 118,
        f8: 119,
        f9: 120,
        f10: 121,
        f11: 122,
        f12: 123,
      };

      var modifiers = {
        shift: { wanted: false, pressed: false },
        ctrl: { wanted: false, pressed: false },
        alt: { wanted: false, pressed: false },
        meta: { wanted: false, pressed: false }, //Meta is Mac specific
      };

      if (e.ctrlKey) modifiers.ctrl.pressed = true;
      if (e.shiftKey) modifiers.shift.pressed = true;
      if (e.altKey) modifiers.alt.pressed = true;
      if (e.metaKey) modifiers.meta.pressed = true;

      for (var i = 0; (k = keys[i]), i < keys.length; i++) {
        //Modifiers
        if (k == "ctrl" || k == "control") {
          kp++;
          modifiers.ctrl.wanted = true;
        } else if (k == "shift") {
          kp++;
          modifiers.shift.wanted = true;
        } else if (k == "alt") {
          kp++;
          modifiers.alt.wanted = true;
        } else if (k == "meta") {
          kp++;
          modifiers.meta.wanted = true;
        } else if (k.length > 1) {
          //If it is a special key
          if (special_keys[k] == code) kp++;
        } else if (opt["keycode"]) {
          if (opt["keycode"] == code) kp++;
        } else {
          //The special keys did not match
          if (character == k) kp++;
          else {
            if (shift_nums[character] && e.shiftKey) {
              //Stupid Shift key bug created by using lowercase
              character = shift_nums[character];
              if (character == k) kp++;
            }
          }
        }
      }

      if (
        kp == keys.length &&
        modifiers.ctrl.pressed == modifiers.ctrl.wanted &&
        modifiers.shift.pressed == modifiers.shift.wanted &&
        modifiers.alt.pressed == modifiers.alt.wanted &&
        modifiers.meta.pressed == modifiers.meta.wanted
      ) {
        callback(e);

        if (!opt["propagate"]) {
          //Stop the event
          //e.cancelBubble is supported by IE - this will kill the bubbling process.
          e.cancelBubble = true;
          e.returnValue = false;

          //e.stopPropagation works in Firefox.
          if (e.stopPropagation) {
            e.stopPropagation();
            e.preventDefault();
          }
          return false;
        }
      }
    };
    this.all_shortcuts[shortcut_combination] = {
      callback: func,
      target: ele,
      event: opt["type"],
    };
    //Attach the function with the event
    if (ele.addEventListener) ele.addEventListener(opt["type"], func, false);
    else if (ele.attachEvent) ele.attachEvent("on" + opt["type"], func);
    else ele["on" + opt["type"]] = func;
  },

  //Remove the shortcut - just specify the shortcut and I will remove the binding
  remove: function (shortcut_combination) {
    shortcut_combination = shortcut_combination.toLowerCase();
    var binding = this.all_shortcuts[shortcut_combination];
    delete this.all_shortcuts[shortcut_combination];
    if (!binding) return;
    var type = binding["event"];
    var ele = binding["target"];
    var callback = binding["callback"];

    if (ele.detachEvent) ele.detachEvent("on" + type, callback);
    else if (ele.removeEventListener)
      ele.removeEventListener(type, callback, false);
    else ele["on" + type] = false;
  },
};
const CreateSpotForm = (useKey) => {
  const dispatch = useDispatch();
  const [buttonColor, setButtonColor] = useState();
  const [users, setUsers] = useState([]);
  const [airports, setAirports] = useState([]);
  const [html, setHtml] = useState(null);
  const [array, setArray] = useState([]);
  const [long, setLong] = useState("");
  const [lat, setLat] = useState(2);

  const [priced, setPriced] = useState("");

  const [passengers, setPassengers] = useState("9");
  const [destinationHomeBse, setDestinationHomeBse] = useState(0);

  const [destinationState, setDestinationState] = useState(null);
  const [departureState, setDepartureState] = useState(null);
  const [depLocation, setDepLocation] = useState("");
  const [destLocation, setDestLocation] = useState("");
  const [destinationHomeBase, setDestinationHomeBase] = useState("");
  const [departureHomeBase, setDepartureHomeBase] = useState("");
  const [departurenHomeBse, setDepartureHomeBse] = useState(0);
  const [departure, setDeparture] = useState("");
  const [timez, setTimeZ] = useState("");
  const [engine, setEngine] = useState(0);
  const [rtPrice, setrtPrice] = useState(0);
  const [time, setTime] = useState(null);
  const [returnDate, setReturnDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );
  const [fuelBurn, setFuelBurn] = useState(null);
  const [basePrice, setBasePrice] = useState(0);

  const [messaged, setMessaged] = useState(0);

  const [tuesdayFare, setTuesday] = useState(null);
  const [hourOfDayFare, setHourOfDayFare] = useState(0);
  const [dates, setDates] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [destination, setDestination] = useState("");
  const [aircraftRegistration, setAircraftRegistration] = useState("N971MC");
  const [aircrafttype, setaircrafttype] = useState(null);
  const [formRTValues, setRTFormValues] = useState([
    { orgin: "", returnTime: "" },
  ]);
  const custoprice = ["STANDARD", "PREMIUM", "DISCOUNT"];
  const priceReducer = useSelector((state) => state.priceReducer);
  let prices = priceReducer?.allPrices;
  const [segm, setSegm] = useState(0);
  const [priceState, setPriceState] = useState(prices);
  const [checked, setChecked] = useState(false);
  const handleChang = () => {
    setChecked(!checked);
  };
  let fet = 0;
  if (checked === true) {
    fet = 0.075;
  }

  if (!prices) {
    dispatch(priceStore.thunk_getAllPrices());
  }

  useEffect(() => {


    dispatch(priceStore.thunk_getAllPrices());
    setPriceState(priceReducer?.allPrices);



  }, [dispatch]);

  let trialOne;
  let trialTwo;
  let trialThree;
  let trialFour;
  let trialFive;

  var test = [];

  priceState &&
    priceState.map((spot, key) =>
      key == 0 ? (trialOne = spot.varThirtyTwo) : null
    );
  priceState &&
    priceState.map((spot, key) =>
      key == 0 ? (trialTwo = spot.varThirtyThree) : null
    );
  priceState &&
    priceState.map((spot, key) =>
      key == 0 ? (trialThree = spot.varThirtyFour) : null
    );
  priceState &&
    priceState.map((spot, key) =>
      key == 0 ? (trialFour = spot.varThirtyFive) : null
    );
  priceState &&
    priceState.map((spot, key) =>
      key == 0 ? (trialFive = spot.varThirtySix) : null
    );


  let handleRTChange = (i, e) => {
    let newFormValues = [...formRTValues];
    newFormValues[i][e.target.name] = e.target.value;
    setRTFormValues(newFormValues);
    axios
      .post(
        `https://public-api.foreflight.com/public/api/flights/performance`,
        {
          flight: {
            departure: formValues[0].destination,
            destination: formValues[0].orgin,
            scheduledTimeOfDeparture: moment
              .utc()
              .format("YYYY-MM-DDTHH:mm:ss"),
            aircraftRegistration: aircraftRegistration,
          },
        },
        { headers }
      )
      .then((result) => {
        const token = result.data;

        console.log(token);
        let avgfuel = token.performance.fuel.flightFuel;

        let time = token.performance.times.timeToDestinationMinutes;

        let engine = (time / 60 + 12) * 500;
        let baseP = avgfuel + engine;
        setrtPrice(baseP);
      });
  };

  function useKey(key, ref) {
    useEffect(() => {
      function hotkeyPress(e) {
        if (e.keyCode === key) {
          e.preventDefault();
          ref.current.focus();
          return;
        }
      }

      document.addEventListener("keydown", hotkeyPress);
      return () => document.removeEventListener("keydown", hotkeyPress);
    }, [key]);
  }
  const f1Ref = useRef();
  useKey(112, f1Ref);

  const [activeNums, setActiveNums] = React.useState({
    OW: "OW",
    SMID: "SMID",
    BASE: "BASE",
    WHOLESALE: "WHOLESALE",
    STD: "STD",
    STANDARD: "STANDARD",
  });
  const [formValues, setFormValues] = useState([
    { orgin: "", destination: "", departureTime: "" },
  ]);
  const multilegs = ["BASE", "CONT"];
  const routeInd = ["STD", "MUST MOVE"];
  const nums = ["OW", "RT", "MULT"];
  const market = ["WHOLESALE", "RETAIL"];
  const crafs = ["HEAVY", "SMID", "ULR"];
  const timeOptions = [
    "0:00",
    "0:30",
    "12:00",
    "12:30",
    "1:00",
    "1:30",
    "2:00",
    "2:30",
    "3:00",
    "3:30",
    "4:00",
    "4:30",
    "5:00",
    "5:30",
    "6:00",
    "6:30",
    "7:00",
    "7:30",
    "8:00",
    "8:30",
    "9:00",
    "9:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
    "23:30",
    "24:00",
  ];

  if (activeNums.RETAIL) {
    fet = 0.075;
  }

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([
      ...formValues,
      { orgin: "", destination: "", departureTime: "" },
    ]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };
  console.log(fet);
  const [local, setLocal] = useState(moment.utc().toDate());
  let localTime = moment(local)
    .tz("America/New_York")
    .format(" MMMM D YY hh:mm");
  console.log(localTime);
  // localTime = moment(localTime).tz('America/New_York').format('hh:mm');

  const onToggle = (num) => {
    setActiveNums((state) => {
      return {
        ...state,
        [num]: !state[num],
      };
    });
    if (num == "ULR") {
      setPassengers(14);
    }
    if (num == "HEAVY") {
      setPassengers(12);
    }
    if (num == "SMID") {
      setPassengers(9);
    }
  };

  shortcut.add("Ctrl+Shift+X", function () {
    alert("Hi there!");
  });

  //SMID = Challenger , ULR = GLF5, HEAVY = GLF4

  const aircrafs = ["CL30", "GLF4", "GLF5"];

  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );

  const [startDay, setStartDay] = useState(null);

  console.log(activeNums.SMID);
  //this is to add the timezone to give the correct date
  // .tz('America/Los_Angeles').



  const option = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];


  const headers = {
    accept: "application/json",
    "x-vendorId": "a1b077f2-2076-418b-a87a-5fd9e5ec0b5f",
    "x-api-key": "FJRNS8HJNkRwMX1b0cdRxFdyiXPBgce0pkIySmvqpOc=",
    "Content-Type": "application/json-patch+json",
    timeout: "50",
  };

  // const data =
  //   '{ "flight": { "departure":"KLAX" ,"destination": "KTEB", "scheduledTimeOfDeparture": "2022-02-23T11:24:36.000Z", "aircraftRegistration": "CL30" } }';

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`https://public-api.foreflight.com/public/api/aircraft`, {
          headers,
        })
        .then((res) => {
          const persons = res.data;
          // console.log(res)

          setAirports(persons);
        });


    };
    fetchData();
  }, []);


  const dateChange = (e, date) => {
    setStartDate(date);
    let d1 = startDate;

    console.log(getDay(d1));

    return getDay(d1);
  };

  const handleAirCraft = (e) => {
    let arr = [];

    airports.forEach((element) => {
      if (element.aircraftModelCode == e.target.value) {
        arr.push(element.aircraftRegistration);
      }
    });

    setArray(arr);
    return arr;
  };

  const handleAirCrafRegist = (e) => {
    let arr = [];

    airports.forEach((element) => {
      if (element.aircraftModelCode == e.target.value) {
        arr.push(element.aircraftRegistration);
      }
    });

    setAircraftRegistration(arr[0]);
    console.log(aircraftRegistration);
    return aircraftRegistration;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = user.id;

    //setting images 1-3 to urls submitted on a spot

    //front-end validations
    const validationErrors = [];
    if (!name || name.length > 40) {
      validationErrors.push("Spot name must be between 1 and 40 characters.");
    }
    if (!address || address.length > 40) {
      validationErrors.push("Address must be between 1 and 40 characters.");
    }
    if (!city || city.length > 20) {
      validationErrors.push("City must be between 1 and 20 characters.");
    }
    if (!state || state.length > 20) {
      validationErrors.push("Please enter valid state.");
    }
    if (!country || country.length > 20) {
      validationErrors.push("Country must be between 1 and 20 characters.");
    }

    if (!price || !isCurrency(price) || price <= 0) {
      validationErrors.push(
        "Please enter a valid price between $1 and $1,000,000"
      );
    }

    //checking for specific errors to set input errors

    setErrors(validationErrors);

    //checking for back-end validations
    if (!validationErrors.length) {
      await dispatch(
        postActions.thunk_addSpot({
          userId,
          city,
          country,
          price,
          state,
          address,
          name,
        })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
      await dispatch(spotStore.thunk_getAllSpots()).then(
        (res) => res && history.push("/quotes")
      );
    }

    console.log(array);
    console.log("We did it");
    alert(JSON.stringify(formValues));
  };
  console.log(formValues);
  const icaofunc = () => {
    axios
      .get(`https://www.airport-data.com/api/ap_info.json?icao=${departure}`)
      .then((res) => {
        console.log(res.data);
        if (departure.length == 4) {
          setLat(res.data.latitude);
          setLong(res.data.longitude);
          console.log(lat, long);
        }
      });
  };
  console.log(startDay);


  useEffect(() => {
    const listener = (event) => {
      if (event.code === "ShiftLeft") {
        console.log("ShiftLeft");
        handleSub(event);
        setStartDay(startDay);
      }
      if (event.code === "ShiftRight") {
        console.log("ShiftRight");
        window.location.reload();
      }
      if (event.code === "Space") {
        console.log("-----------SPACEBAR HIT-----------");
      }
      if (event.code === "F5") {
        console.log("Command Right HIT");
        history.push("/");
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [startDay]);
  const handleSub = async (e) => {
    e.preventDefault();


    axios
      .get(
        `https://www.airport-data.com/api/ap_info.json?icao=${formValues[0].orgin}`
      )
      .then((res) => {
        let locat;
        locat = res.data.location;
        console.log(locat);
        setDepartureState(res.data.location);
        if (
          locat &&
          (locat.includes("NY") ||
            locat.includes("NJ") ||
            locat.includes("ME") ||
            locat.includes("CT") ||
            locat.includes("MA") ||
            locat.includes("PA") ||
            locat.includes("RI") ||
            locat.includes("IN") ||
            locat.includes("OH") ||
            locat.includes("MI") ||
            locat.includes("VT") ||
            locat.includes("VA") ||
            locat.includes("WV") ||
            locat.includes("MD") ||
            locat.includes("DE") ||
            locat.includes("Ontario") ||
            locat.includes("Quebec") ||
            locat.includes("Nova Scotia") ||
            locat.includes("New Brunswick") ||
            locat.includes("Prince Edward Island") ||
            locat.includes("NewFoundland and Labrador"))
        ) {
          setDepLocation("N");
        }
        if (
          locat &&
          (locat.includes("FL") ||
            locat.includes("GA") ||
            locat.includes("SC") ||
            locat.includes("AL") ||
            locat.includes("MS") ||
            locat.includes("TN") ||
            locat.includes("LA") ||
            locat.includes("KY") ||
            locat.includes("AR") ||
            locat.includes("PR") ||
            locat.includes("United States Virgin Islands") ||
            locat.includes("México") ||
            locat.includes("Turks and Caicos Islands") ||
            locat.includes("República Dominicana") ||
            locat.includes("Jamaica") ||
            locat.includes("The Bahamas") ||
            locat.includes("Saint Kitts and Nevis") ||
            locat.includes("Saint Vincent and the Grenadines") ||
            locat.includes("Trinidad and Tobago") ||
            locat.includes("Barbados") ||
            locat.includes("St. Thomas") ||
            locat.includes("St. Croix"))
        ) {
          setDepLocation("S");
        }
        if (
          locat &&
          (locat.includes("CA") ||
            locat.includes("OR") ||
            locat.includes("WA") ||
            locat.includes("NV") ||
            locat.includes("AZ") ||
            locat.includes("ID") ||
            locat.includes("UT") ||
            locat.includes("AK") ||
            locat.includes("HI") ||
            locat.includes("CO") ||
            locat.includes("NM") ||
            locat.includes("British Columbia") ||
            locat.includes("Alberta") ||
            locat.includes("Saskatchewan") ||
            locat.includes("Northwest Territories"))
        ) {
          setDepLocation("W");
        }
        if (
          locat &&
          (locat.includes("ND") ||
            locat.includes("SD") ||
            locat.includes("NE") ||
            locat.includes("KS") ||
            locat.includes("MO") ||
            locat.includes("IL") ||
            locat.includes("MN") ||
            locat.includes("WI") ||
            locat.includes("OK") ||
            locat.includes("IA") ||
            locat.includes("TX") ||
            locat.includes("MT") ||
            locat.includes("WY") ||
            locat.includes("Manitoba"))
        ) {
          setDepLocation("C");
        }
      });
    axios
      .get(
        `https://www.airport-data.com/api/ap_info.json?icao=${formValues[0].destination}`
      )
      .then((res) => {
        console.log(res.data);
        let locat = res.data.location;
        setDestinationState(res.data.location);
        if (
          locat &&
          (locat.includes("NY") ||
            locat.includes("NJ") ||
            locat.includes("ME") ||
            locat.includes("CT") ||
            locat.includes("MA") ||
            locat.includes("PA") ||
            locat.includes("RI") ||
            locat.includes("IN") ||
            locat.includes("OH") ||
            locat.includes("MI") ||
            locat.includes("VT") ||
            locat.includes("VA") ||
            locat.includes("WV") ||
            locat.includes("MD") ||
            locat.includes("DE") ||
            locat.includes("Ontario") ||
            locat.includes("Quebec") ||
            locat.includes("Nova Scotia") ||
            locat.includes("New Brunswick") ||
            locat.includes("Prince Edward Island") ||
            locat.includes("NewFoundland and Labrador"))
        ) {
          setDestLocation("N");
        }
        if (
          locat &&
          (locat.includes("FL") ||
            locat.includes("GA") ||
            locat.includes("SC") ||
            locat.includes("AL") ||
            locat.includes("MS") ||
            locat.includes("TN") ||
            locat.includes("LA") ||
            locat.includes("KY") ||
            locat.includes("AR") ||
            locat.includes("PR") ||
            locat.includes("United States Virgin Islands") ||
            locat.includes("México") ||
            locat.includes("Turks and Caicos Islands") ||
            locat.includes("República Dominicana") ||
            locat.includes("Jamaica") ||
            locat.includes("The Bahamas") ||
            locat.includes("Saint Kitts and Nevis") ||
            locat.includes("Saint Vincent and the Grenadines") ||
            locat.includes("Trinidad and Tobago") ||
            locat.includes("Barbados") ||
            locat.includes("St. Thomas") ||
            locat.includes("St. Croix"))
        ) {
          setDestLocation("S");
        }
        if (
          locat &&
          (locat.includes("CA") ||
            locat.includes("OR") ||
            locat.includes("WA") ||
            locat.includes("NV") ||
            locat.includes("AZ") ||
            locat.includes("ID") ||
            locat.includes("UT") ||
            locat.includes("AK") ||
            locat.includes("HI") ||
            locat.includes("CO") ||
            locat.includes("NM") ||
            locat.includes("British Columbia") ||
            locat.includes("Alberta") ||
            locat.includes("Saskatchewan") ||
            locat.includes("Northwest Territories"))
        ) {
          setDestLocation("W");
        }
        if (
          locat &&
          (locat.includes("ND") ||
            locat.includes("SD") ||
            locat.includes("NE") ||
            locat.includes("KS") ||
            locat.includes("MO") ||
            locat.includes("IL") ||
            locat.includes("MN") ||
            locat.includes("WI") ||
            locat.includes("OK") ||
            locat.includes("IA") ||
            locat.includes("TX") ||
            locat.includes("MT") ||
            locat.includes("WY") ||
            locat.includes("Manitoba"))
        ) {
          setDestLocation("C");
        }
      });





    setDeparture(formValues[0].orgin);
    setDestination(formValues[0].destination);

    setPriced(formValues[0].orgin);

    setName(formValues[0].orgin);
    setAddress(formValues[0].destination);
    setCity(formValues[0].departureTime.toString());

    const config = {
      method: "get",
      url: `https://maps.googleapis.com/maps/api/timezone/json?location=${40.6413}%2C${73.7781}&timestamp=1331161200&key=AIzaSyCueuRnq4kS5iAVacaE-rBkpL8eVqw37Tg`,
      headers: {},
    };
    axios(config).then((response) => {
      const res = response.data;
      console.log(res);
    });

    axios
      .post(
        `https://public-api.foreflight.com/public/api/flights/performance`,
        {
          flight: {
            departure: formValues[0].orgin,
            destination: formValues[0].destination,
            scheduledTimeOfDeparture: moment
              .utc()
              .format("YYYY-MM-DDTHH:mm:ss"),
            aircraftRegistration: aircraftRegistration,
          },
        },
        { headers }
      )
      .then((result) => {
        const token = result.data;

        console.log(token);
        let avgfuel = token.performance.fuel.flightFuel;
        setFuelBurn(avgfuel);
        let time = token.performance.times.timeToDestinationMinutes;
        time = time + 12;
        console.log(avgfuel);
        let timee = time / 60;
        setTime(timee);


        let engine = (time / 60 + 12) * 500;

        let baseP = avgfuel + engine;
        setPrice(baseP * 3.3);

        if (
          timee > 5 &&
          (formValues[0].orgin === "KTEB" ||
            formValues[0].orgin === "KOPF" ||
            formValues[0].orgin === "KVNY") &&
          (formValues[0].destination === "KTEB" ||
            formValues[0].destination === "KOPF" ||
            formValues[0].destination === "KVNY")
        ) {
          setBasePrice(6900 * timee);
        } else if (
          timee <= 4.6 &&
          (formValues[0].orgin === "KTEB" ||
            formValues[0].orgin === "KOPF" ||
            (formValues[0].orgin === "KVNY" &&
              (formValues[0].destination === "KTEB" ||
                formValues[0].destination === "KOPF" ||
                formValues[0].destination === "KVNY")))
        ) {
          setBasePrice(9150 * timee);
        } else if (
          timee <= 3.5 &&
          (formValues[0].orgin === "KTEB" ||
            formValues[0].orgin === "KOPF" ||
            (formValues[0].orgin === "KVNY" &&
              (formValues[0].destination === "KTEB" ||
                formValues[0].destination === "KOPF" ||
                formValues[0].destination === "KVNY")))
        ) {
          setBasePrice(8773);
        } else if (
          timee <= 2 &&
          (formValues[0].orgin === "KTEB" ||
            formValues[0].orgin === "KOPF" ||
            (formValues[0].orgin === "KVNY" &&
              (formValues[0].destination === "KTEB" ||
                formValues[0].destination === "KOPF" ||
                formValues[0].destination === "KVNY")))
        ) {
          setBasePrice(trialTwo);
        } else if (
          timee <= 2 &&
          (formValues[0].orgin === "KTEB" ||
            formValues[0].orgin === "KOPF" ||
            (formValues[0].orgin === "KVNY" &&
              (formValues[0].destination !== "KTEB" ||
                formValues[0].destination !== "KOPF" ||
                formValues[0].destination !== "KVNY")))
        ) {
          setBasePrice(14145 * timee);
        } else if (
          timee <= 4 &&
          (formValues[0].orgin === "KTEB" ||
            formValues[0].orgin === "KOPF" ||
            (formValues[0].orgin === "KVNY" &&
              (formValues[0].destination !== "KTEB" ||
                formValues[0].destination !== "KOPF" ||
                formValues[0].destination !== "KVNY")))
        ) {
          setBasePrice(13716 * timee);
        } else if (
          timee > 4 &&
          (formValues[0].orgin !== "KTEB" ||
            formValues[0].orgin !== "KOPF" ||
            (formValues[0].orgin !== "KVNY" &&
              (formValues[0].destination !== "KTEB" ||
                formValues[0].destination !== "KOPF" ||
                formValues[0].destination !== "KVNY")))
        ) {
          setBasePrice(7713 * timee);
        } else if (
          timee <= 2 &&
          (formValues[0].orgin !== "KTEB" ||
            formValues[0].orgin !== "KOPF" ||
            (formValues[0].orgin !== "KVNY" &&
              (formValues[0].destination !== "KTEB" ||
                formValues[0].destination !== "KOPF" ||
                formValues[0].destination !== "KVNY")))
        ) {
          setBasePrice(16145 * timee);
        } else if (
          timee <= 4 &&
          (formValues[0].orgin !== "KTEB" ||
            formValues[0].orgin !== "KOPF" ||
            (formValues[0].orgin !== "KVNY" &&
              (formValues[0].destination !== "KTEB" ||
                formValues[0].destination !== "KOPF" ||
                formValues[0].destination !== "KVNY")))
        ) {
          setBasePrice(13716 * timee);
        } else if (
          timee > 4 &&
          (formValues[0].orgin === "KTEB" ||
            formValues[0].orgin === "KOPF" ||
            (formValues[0].orgin === "KVNY" &&
              (formValues[0].destination !== "KTEB" ||
                formValues[0].destination !== "KOPF" ||
                formValues[0].destination !== "KVNY")))
        ) {
          setBasePrice(9773 * timee);
        } else {
          setBasePrice(0);
        }


        if (
          formValues[0].departureTime === "0:00" ||
          formValues[0].departureTime === "0:30" ||
          formValues[0].departureTime === "1:00" ||
          formValues[0].departureTime === "1:30" ||
          formValues[0].departureTime === "2:00" ||
          formValues[0].departureTime === "2:30" ||
          formValues[0].departureTime === "3:00" ||
          formValues[0].departureTime === "3:30" ||
          formValues[0].departureTime === "4:00" ||
          formValues[0].departureTime === "4:30" ||
          formValues[0].departureTime === "5:00" ||
          formValues[0].departureTime === "5:30" ||
          formValues[0].departureTime === "6:00" ||
          formValues[0].departureTime === "20:00" ||
          formValues[0].departureTime === "20:30" ||
          formValues[0].departureTime === "21:00" ||
          formValues[0].departureTime === "21:30" ||
          formValues[0].departureTime === "22:00" ||
          formValues[0].departureTime === "22:30" ||
          formValues[0].departureTime === "23:00" ||
          formValues[0].departureTime === "23:30" ||
          formValues[0].departureTime === "24:00"
        ) {
          setEngine(15000);
        } else if (
          formValues[0].departureTime === "6:30" ||
          formValues[0].departureTime === "7:00"
        ) {
          setEngine(2000);
        } else {
          setEngine(0);
        }

        if (startDay == "2") {
          setTuesday(0.85);
        } else if (startDay == "5") {
          setTuesday(1);
        } else if (startDay == "0") {
          setTuesday(1);
        } else if (startDay == "1") {
          setTuesday(1);
        } else if (startDay == "6") {
          setTuesday(0.85);
        } else if (startDay == "4") {
          setTuesday(0.85);
        } else if (startDay == "3") {
          setTuesday(0.85);
        }


      });



    console.log(
      "THIS IS IT RIGHT HERE THE DESTINATIONS CLOSEST HOMEBASE !!!!!!!!!!!!!! " +
        destinationHomeBase +
        " " +
        destinationHomeBse
    );

    //KTEB
  };

  console.log(tuesdayFare);

  const renderHtml = () =>
    array.map((airpor) => {
      return (
        <ul key={airpor}>
          <p className="white">{airpor}</p>
        </ul>
      );
    });

  // Roundtrip just reverse of orgin and destination

  const renderAirCraftTypes = airports.map((airpo, i) => {
    return (
      <li key={i}>
        <p className="white">{airpo.aircraftModelCode}</p>
      </li>
    );
  });

  console.log(inputValue);



  const [errors, setErrors] = useState([]);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [price, setPrice] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");

  const user = useSelector((state) => state.session.user);

  const history = useHistory();

  //useState variables for specific field errors
  const [spotnameError, setSpotnameError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [cityError, setCityError] = useState("");
  const [stateError, setStateError] = useState("");
  const [countryError, setCountryError] = useState("");

  const [amountError, setPriceError] = useState("");



  console.log(startDate[Symbol.toPrimitive]("string"));

  const calendarReducer = useSelector((state) => state.calendarReducer);
  let calendars = calendarReducer?.allCalendars;
  const [calendarState, setCalendarState] = useState(calendars);

  if (!calendars) {
    dispatch(calendarStore.thunk_getAllCalendars());
  }

  useEffect(() => {
    dispatch(calendarStore.thunk_getAllCalendars());
    setCalendarState(calendarReducer?.allCalendars);
    console.log(calendars);
  }, [dispatch]);



  //On submit check to see if there are any errors

  const handleSubmite = async (e) => {
    e.preventDefault();
    const userId = user.id;

    //setting images 1-3 to urls submitted on a spot

    //front-end validations
    const validationErrors = [];

    //checking for specific errors to set input errors

    setErrors(validationErrors);

    //checking for back-end validations
    if (!validationErrors.length) {
      await dispatch(
        postActions.thunk_addSpot({
          userId,
          city,
          country,
          price,
          state,
          address,
          name,
        })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
      await dispatch(spotStore.thunk_getAllSpots()).then(
        (res) => res && history.push("/quotes/new")
      );
    }
  };

  //useEffect to render whenever image is updated
  const spotReducer = useSelector((state) => state.spotReducer);
  let spots = spotReducer?.allSpots;
  const [spotState, setSpotState] = useState(spots);

  if (!spots) {
    dispatch(spotStore.thunk_getAllSpots());
  }
  useEffect(() => {
    dispatch(spotStore.thunk_getAllSpots());
    setSpotState(spotReducer?.allSpots);
  }, [dispatch, setSpotState]);

  useEffect(() => {
    setInterval(() => setLocal(new Date()), 30000);
  }, []);
  //Set images for preview

  console.log(test[0]);

  return (
    <div
      style={{
        backgroundColor: "black",
      }}
    >
      <div
        style={{
          backgroundColor: "black",
        }}
      >
        <div>
          {/* Quote Number */}
          <p className="date_time" id="date_text">
            {spotState &&
              spotState.map((spot, key) =>
                key == 0 ? (
                  <>
                    <p className="quotenum" id="dark_text">
                      {" "}
                      Quote Num: {spot.id + 3001}
                    </p>
                  </>
                ) : null
              )}
            {localTime}
          </p>

          <div className="div4"></div>

          <div>
            <div className="">
              <div></div>
              <div className="org">
                <div>
                  {" "}
                  <label htmlFor="customers" className="white_text">
                    Multileg
                  </label>
                </div>

                {multilegs.map((num) => {
                  return (
                    <>
                      <button
                        // eslint-disable-next-line no-unused-expressions
                        autoFocus
                        id="button"
                        onClick={() => {
                          onToggle(num);
                          if (num == "BASE") {
                            if (!!activeNums["CONT"]) {
                              onToggle(multilegs[1]);
                            }
                          }
                          if (num == "CONT") {
                            if (!!activeNums["BASE"]) {
                              onToggle(multilegs[0]);
                            }
                          }
                        }}
                        style={{
                          color: !!activeNums[num] ? "green" : "gray",
                          backgroundColor: !!activeNums[num] ? "yellow " : "",
                          outline: "none",
                          border: "none",
                        }}
                        key={num}
                      >
                        {num}
                      </button>
                    </>
                  );
                })}

                <div>
                  {" "}
                  <label htmlFor="customers" className="white_text">
                    Trip
                  </label>
                </div>
                {nums.map((num) => {
                  return (
                    <>
                      <button
                        onClick={() => {
                          onToggle(num);
                          if (num == "MULT") {
                            if (!!activeNums["OW"]) {
                              onToggle(nums[0]);
                            }
                            if (!!activeNums["RT"]) {
                              onToggle(nums[1]);
                            }
                            !!activeNums[num]
                              ? removeFormFields()
                              : addFormFields();
                          }
                          if (num == "RT") {
                            if (!!activeNums["OW"]) {
                              onToggle(nums[0]);
                            }
                            if (!!activeNums["MULT"]) {
                              onToggle(nums[2], removeFormFields());
                            }
                          }
                          if (num == "OW") {
                            if (!!activeNums["RT"]) {
                              onToggle(nums[1]);
                            }
                            if (!!activeNums["MULT"]) {
                              onToggle(nums[2], removeFormFields());
                            }
                          }
                        }}
                        style={{
                          color: !!activeNums[num] ? "green" : "gray",
                          backgroundColor: !!activeNums[num] ? "yellow " : " ",
                          outline: "none",
                          border: "none",
                        }}
                        key={num}
                      >
                        {num}
                      </button>
                    </>
                  );
                })}
                <br></br>
                <form onSubmit={handleSub}>
                  <label htmlFor="customers" className="white_text">
                    Aircraft{" "}
                  </label>
                  <br></br>

                  {crafs.map((craf) => {
                    return (
                      <button
                        onClick={() => {
                          onToggle(craf);
                          console.log(craf);

                          if (craf == "HEAVY") {
                            setPassengers(12);
                            airports.forEach((element) => {
                              if (element.aircraftModelCode == "GLF4") {
                                setAircraftRegistration(
                                  element.aircraftRegistration
                                );
                              }
                            });
                          }
                          if (craf == "HEAVY") {
                            if (!!activeNums["SMID"]) {
                              onToggle(crafs[1]);
                            }
                            if (!!activeNums["ULR"]) {
                              onToggle(crafs[2]);
                            }
                          }

                          if (craf == "SMID") {
                            setPassengers(9);

                            airports.forEach((element) => {
                              if (element.aircraftModelCode == "CL30") {
                                setAircraftRegistration(
                                  element.aircraftRegistration
                                );
                              }
                            });
                          }
                          if (craf == "SMID") {
                            if (!!activeNums["HEAVY"]) {
                              onToggle(crafs[0]);
                            }
                            if (!!activeNums["ULR"]) {
                              onToggle(crafs[2]);
                            }
                          }

                          if (craf == "ULR") {
                            setPassengers(14);
                            airports.forEach((element) => {
                              if (element.aircraftModelCode == "GLF5") {
                                setAircraftRegistration(
                                  element.aircraftRegistration
                                );
                              }
                            });
                          }
                          if (craf == "ULR") {
                            if (!!activeNums["HEAVY"]) {
                              onToggle(crafs[0]);
                            }
                            if (!!activeNums["SMID"]) {
                              onToggle(crafs[1]);
                            }
                          } else if (!!activeNums[craf]) {
                            setPassengers(0);
                          }
                        }}
                        style={{
                          color: !!activeNums[craf] ? "green" : "gray",
                          backgroundColor: !!activeNums[craf] ? "yellow " : " ",
                          outline: "none",
                          border: "none",
                        }}
                        key={craf}
                      >
                        {craf}
                      </button>
                    );
                  })}
                  <br></br>
                  <div className="inline">
                    {formValues.map((element, index) => (
                      <>
                        <div id="inline" key={index}>
                          <div className="testid" key={index}>
                            <label htmlFor="customers" className="white_text">
                              Orgin *
                            </label>
                            <Autocomplete
                              disablePortal
                              id="combo-box-demo"
                              options={options}
                              name="orgin"
                              freeSolo="true"
                              value={element.orgin || ""}
                              sx={{
                                width: "190px",
                                backgroundImage: `url(${"https://i.ibb.co/N696fbB/image.gif"})`,
                                backgroundSize: `65px`,
                                height: 48,
                                marginRight: `5px`,
                              }}
                              renderInput={(params) => (
                                <TextField {...params} label="" name="orgin" />
                              )}
                              onSelect={(e, value) => handleChange(index, e)}
                            />
                          </div>
                          <div className="">
                            <label htmlFor="customers" className="white_text">
                              Destination
                            </label>
                            <Autocomplete
                              disablePortal
                              id="combo-box-demo"
                              options={options}
                              name="destination"
                              freeSolo="true"
                              value={element.destination || ""}
                              sx={{
                                width: "190px",
                                backgroundImage: `url(${"https://i.ibb.co/N696fbB/image.gif"})`,
                                backgroundSize: `65px`,
                                height: 48,
                                marginLeft: `5px`,
                              }}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  label=""
                                  name="destination"
                                />
                              )}
                              onSelect={(e) => handleChange(index, e)}
                            />
                          </div>

                          {/* Switch Time and Date input boxes */}
                          <div>
                            <label htmlFor="customers" className="white_text">
                              Departure Time
                            </label>
                            <Autocomplete
                              disablePortal
                              id="combo-box-demo"
                              options={timeOptions}
                              name="departureTime"
                              freeSolo="true"
                              value={element.departureTime || ""}
                              sx={{
                                width: "200px",
                                backgroundImage: `url(${"https://i.ibb.co/N696fbB/image.gif"})`,
                                backgroundSize: `80px`,
                                height: 48,
                                marginLeft: `5px`,
                                marginRight: `5px`,
                              }}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  label=""
                                  name="departureTime"
                                />
                              )}
                              onSelect={(e) => handleChange(index, e)}
                            />
                          </div>

                          <div>
                            <label htmlFor="customers" className="white_text">
                              Date
                            </label>
                            <DatePicker
                              wrapperClassName="date_picker "
                              selected={startDate}
                              name={"date"}
                              onSelect={(item) => {
                                setStartDate(item);
                                setStartDay(item.getDay());
                              }}
                              dateFormat="MMMM d, yyyy"
                            />
                          </div>

                          {index === 1 ? (
                            <>
                              <div className="small">
                                <label htmlFor="customers" className="blacklab">
                                  label
                                </label>
                                <button
                                  className="add"
                                  type="button"
                                  onClick={() => addFormFields()}
                                >
                                  +
                                </button>
                                {/* <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> */}
                              </div>
                            </>
                          ) : null}
                          {index > 1 ? (
                            <>
                              <div className="smoll">
                                <label htmlFor="customers" className="blacklab">
                                  label
                                </label>
                                <button
                                  className="add"
                                  type="button"
                                  onClick={() => addFormFields()}
                                >
                                  +
                                </button>
                              </div>
                              <div className="smoll">
                                <label htmlFor="customers" className="blacklab">
                                  label
                                </label>
                                <button
                                  type="button"
                                  className="remove"
                                  onClick={() => removeFormFields(index)}
                                >
                                  -
                                </button>
                              </div>
                            </>
                          ) : null}
                        </div>
                      </>
                    ))}

                    <div id="inline">
                      {activeNums.RT ? (
                        <>
                          {formRTValues.map((element, index) => (
                            <>
                              <div key={index}>
                                <label
                                  htmlFor="customers"
                                  className="white_text"
                                >
                                  Orgin
                                </label>
                                <Autocomplete
                                  disablePortal
                                  id="combo-box-demo"
                                  options={options}
                                  name="orgin"
                                  freeSolo="true"
                                  value={formValues[0].destination}
                                  sx={{ width: 200 }}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      label=""
                                      name="orgin"
                                    />
                                  )}
                                  onSelect={(e, value) =>
                                    handleRTChange(index, e)
                                  }
                                />
                              </div>
                              <div>
                                <label
                                  htmlFor="customers"
                                  className="white_text"
                                >
                                  Destination
                                </label>
                                <Autocomplete
                                  disablePortal
                                  id="combo-box-demo"
                                  options={options}
                                  name="destination"
                                  freeSolo="true"
                                  value={formValues[0].orgin}
                                  sx={{
                                    width: 200,
                                    backgroundImage: `url('http://3.bp.blogspot.com/-4oAWWCcNNz4/Tjr3nKNyVUI/AAAAAAAAPLU/Pouua-pNsEY/s1600/sq.gif')`,
                                  }}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      label=""
                                      name="destination"
                                    />
                                  )}
                                  onSelect={(e) => handleChange(index, e)}
                                />
                              </div>
                              <div>
                                {" "}
                                <label
                                  htmlFor="customers"
                                  className="white_text"
                                >
                                  Return Time
                                </label>
                                <Autocomplete
                                  disablePortal
                                  id="combo-box-demo"
                                  options={timeOptions}
                                  name="departureTime"
                                  freeSolo="true"
                                  value={element.departureTime || ""}
                                  sx={{ width: 200 }}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      label=""
                                      name="returnTime"
                                    />
                                  )}
                                  onSelect={(e) => {
                                    handleRTChange(index, e);
                                  }}
                                />
                              </div>
                              <div>
                                {" "}
                                <label
                                  htmlFor="customers"
                                  className="white_text"
                                >
                                  Return Date
                                </label>
                                <DatePicker
                                  selected={returnDate}
                                  name={"returnDate"}
                                  onChange={(item) => {
                                    setReturnDate(item);
                                    console.log(returnDate);
                                  }}
                                  dateFormat="MMMM d, yyyy"
                                />{" "}
                              </div>
                            </>
                          ))}
                        </>
                      ) : (
                        console.log("null")
                      )}
                    </div>
                  </div>

                  <div className="space" />
                  <div id="inline">
                    <div className="ped">
                      <label className="white_text"> FET </label>
                      <div class="placeholder">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={handleChang}
                        />
                      </div>
                    </div>
                    <div className="pad">
                      <label className="white_text" htmlFor="passengers">
                        Pax{" "}
                      </label>
                      <div
                        class="placeholder"
                        data-placeholder="_ _ _  _ _ _ _ _ _"
                      >
                        <input
                          className="inpbox"
                          type="number"
                          value={passengers}
                          onChange={(e) => setPassengers(e.target.value)}
                          placeholder="Passengers (OPTIONAL)"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="customers" className="white_text">
                        Customers{" "}
                      </label>
                      <div
                        class="placeholder"
                        data-placeholder="_ _ _  _ _ _ _ _ _"
                      >
                        <input className="inpbox" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="customers" className="white_text">
                        Organizations{" "}
                      </label>
                      <div
                        class="placeholder"
                        data-placeholder="_ _ _  _ _ _  _ _ _"
                      >
                        <input className="inpbox" />
                      </div>
                    </div>
                  </div>

                  <br></br>
                  <div className="final">
                    <Box
                      component="form"
                      onSubmit={handleSubmite}
                      sx={{
                        "& > :not(style)": { m: 1, width: "200px" },
                      }}
                      autoComplete="off"
                    >
                      <input
                        id="myInput"
                        type="number"
                        value={price}
                        onChange={(e) => {
                          setPrice(e.target.value);
                        }}
                        placeholder="Base Cost"
                      />

                      <input
                        id="myInput"

                        type="string"
                        readOnly={true}
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        placeholder="Orgin"
                      />
                      <input
                        id="myInput"
                        type="string"
                        readOnly={true}
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                        placeholder="Destination"
                      />
                      <input
                        id="myInput"
                        type="string"
                        readOnly={true}
                        value={city}
                        onChange={(e) => {
                          setCity(e.target.value);
                        }}
                        placeholder="Flight Time"
                      />

                      <div className="login-demo-buttons">
                        <Button
                          style={{
                            borderRadius: 10,
                            backgroundColor: "blue",
                            marginBottom: 20,
                            width: 250,
                          }}
                          onClick={() => {
                            setSpotState(spotReducer?.allSpots);
                          }}
                          type="submit"
                          variant="contained"
                        >
                          Confirm Quote
                        </Button>
                      </div>
                    </Box>
                  </div>

                  <div className="button-section"></div>
                  <div className="row">
                    <div className="column"></div>
                  </div>
                </form>
              </div>

              <div className="multi">
                <div>
                  <div className=""></div>
                </div>

                <div></div>
                <div>
                  <div>
                    {" "}
                    <label htmlFor="customers" className="white_text">
                      Route Index
                    </label>
                  </div>

                  {routeInd.map((num) => {
                    return (
                      <>
                        <button
                          // eslint-disable-next-line no-unused-expressions
                          autoFocus
                          id="button"
                          onClick={() => {
                            onToggle(num);
                            if (num == "STD") {
                              if (!!activeNums["MUST MOVE"]) {
                                onToggle(routeInd[1]);
                              }
                            }
                            if (num == "MUST MOVE") {
                              if (!!activeNums["STD"]) {
                                onToggle(routeInd[0]);
                              }
                            }
                          }}
                          style={{
                            color: !!activeNums[num] ? "green" : "gray",
                            backgroundColor: !!activeNums[num] ? "yellow " : "",
                            outline: "none",
                            border: "none",
                          }}
                          key={num}
                        >
                          {num}
                        </button>
                      </>
                    );
                  })}
                </div>

                <div>
                  <div>
                    {" "}
                    <label htmlFor="customers" className="white_text">
                      Marketplace
                    </label>
                  </div>
                  {market.map((num) => {
                    return (
                      <>
                        <button
                          // eslint-disable-next-line no-unused-expressions
                          autoFocus
                          id="button"
                          onClick={() => {
                            onToggle(num);
                            if (num == "WHOLESALE") {
                              if (!!activeNums["RETAIL"]) {
                                onToggle(market[1]);
                              }
                            }
                            if (num == "RETAIL") {
                              fet = 0.075;
                              if (!!activeNums["WHOLESALE"]) {
                                onToggle(market[0]);
                              }
                            }
                          }}
                          style={{
                            color: !!activeNums[num] ? "green" : "gray",
                            backgroundColor: !!activeNums[num]
                              ? "yellow "
                              : " ",
                            outline: "none",
                            border: "none",
                          }}
                          key={num}
                        >
                          {num}
                        </button>
                      </>
                    );
                  })}
                </div>

                <div>
                  <label htmlFor="button" className="white_text">
                    Customer Pricing
                  </label>

                  <br></br>
                  {custoprice.map((num) => {
                    return (
                      <>
                        <button
                          // eslint-disable-next-line no-unused-expressions
                          autoFocus
                          id="button"
                          onClick={() => {
                            onToggle(num);
                            if (num == "DISCOUNT") {
                              if (!!activeNums["STANARD"]) {
                                onToggle(custoprice[0]);
                              }
                              if (!!activeNums["PREMIUM"]) {
                                onToggle(custoprice[1]);
                              }
                            }
                            if (num == "PREMIUM") {
                              if (!!activeNums["STANDARD"]) {
                                onToggle(custoprice[0]);
                              }
                              if (!!activeNums["DISCOUNT"]) {
                                onToggle(custoprice[2]);
                              }
                            }
                            if (num == "STANDARD") {
                              if (!!activeNums["PREMIUM"]) {
                                onToggle(custoprice[1]);
                              }
                              if (!!activeNums["DISCOUNT"]) {
                                onToggle(custoprice[2]);
                              }
                            }
                          }}
                          style={{
                            color: !!activeNums[num] ? "green" : "gray",
                            backgroundColor: !!activeNums[num]
                              ? "yellow "
                              : " ",
                            outline: "none",
                            border: "none",
                          }}
                          key={num}
                        >
                          {num}
                        </button>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="div2">
        <h2 className="incoming">Incoming Quotes</h2>
      </div>

      <div className="div3">
        <div id="inline">
          {" "}
          <p id="dark_text"> Flight Time: </p>{" "}
          <p id="dark"> {Math.round(time * 100) / 100}</p>
          {/* <p id="leftside">Quote Duration: </p><p id="dark">0+0</p> */}
        </div>
        <div id="inline">
          {" "}
          <div>
            <p id="dark_text"> Base price: </p>{" "}
          </div>
          <div>
            <p id="dark"> ${Math.round(basePrice + engine)}</p>
          </div>
        </div>
        {}
        <div id="inline">
          {" "}
          <div>
            <p id="dark_text"> Flight Revenue: </p>{" "}
          </div>
          <div>
            <p id="dark"> ${Math.round(basePrice)}</p>
          </div>
        </div>
        {/* <p className="white_text">  Fuel Burn: <p id="dark_text">{fuelBurn} gallons</p></p> */}

        <div id="inline"></div>{" "}
        <p id="dark_text">
          Day of The Week Fare: ${Math.round(basePrice + engine) * tuesdayFare}
        </p>
        <div id="inline">
          {" "}
          <p id="dark_text">
            FET: ${Math.round((basePrice + engine) * tuesdayFare * fet)}
          </p>{" "}
        </div>
        {/* {
                tuesdayFare ?
                <>

<p className="white_text">Day of the Week Price Adj.:<p id="dark_text"> ${Math.round(hourOfDayFare - tuesdayFare)}</p></p>
                  </>
                : null
              } */}

        <p id="dark_text">Time Of Day Fee: ${engine}</p>
        <p id="dark_text">Departure Location: {departureState}</p>
        <p id="dark_text">Destination Location: {destinationState}</p>
        <p id="dark_text">
          Departure Direction: {depLocation + "-" + destLocation}
        </p>
      </div>

      <div id="inline">
        <div id="myid2" />
        <div id="myid" />
        <div id="myid3" />
        <div id="myid4" />
        <div id="myid5" />
        <div id="myid6" />
        <div id="myid7" />
      </div>
    </div>
  );
};

export default CreateSpotForm;
