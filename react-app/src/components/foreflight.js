import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import "./UserList.css";
import moment from 'moment'
import { Autocomplete } from "@mui/material";
import tz from 'moment-timezone'
import TextField from '@mui/material/TextField';
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { getTime, getDay, format } from "date-fns";
import { customers, options } from "./foredata";
import './foreflight.css'






function AircraftList() {
  const [buttonColor, setButtonColor] = useState()
  const [users, setUsers] = useState([]);
  const [airports, setAirports] = useState([]);
  const [html, setHtml] = useState(null);
  const [array, setArray] = useState([]);
  const [long, setLong] = useState("");
  const [lat, setLat] = useState("");
  const [passengers, setPassengers] = useState("")
  const [destinationHomeBse, setDestinationHomeBse] = useState(0)
  const [destinationHomeBase, setDestinationHomeBase] = useState('')
  const [departureHomeBase, setDepartureHomeBase] = useState('')
  const [departurenHomeBse, setDepartureHomeBse] = useState(0)
  const [departure, setDeparture] = useState("");
  const [timez, setTimeZ] = useState("");
  const [time, setTime] = useState(null);
  const [returnDate, setReturnDate] = useState(setHours(setMinutes(new Date(), 30), 16));
  const [fuelBurn, setFuelBurn] = useState(null)
  const [basePrice, setBasePrice] = useState(null)
  const [tuesdayFare, setTuesday] = useState(null)
  const [hourOfDayFare, setHourOfDayFare] = useState('')
  const [dates, setDates] = useState("");
  const [inputValue, setInputValue] = useState('');
  const [destination, setDestination] = useState("");
  const [aircraftRegistration, setAircraftRegistration] = useState("");
  const [aircrafttype, setaircrafttype] = useState(null);
  const [formRTValues, setRTFormValues] = useState([{returnTime: "",}])
  let handleRTChange = (i, e) => {
    let newFormValues = [...formRTValues];
    newFormValues[i][e.target.name] = e.target.value;
    setRTFormValues( newFormValues);
  }



  const [activeNums, setActiveNums] = React.useState({OW: 'OW'});
  const [formValues, setFormValues] = useState([{ orgin: "", destination : "", departureTime: "",}])
  const nums = ['OW','RT','MULT']
  const crafs = ['HEAVY','SMID','ULR']
  const timeOptions = ['0:00', '0:30','12:00', '12:30', '1:00', '1:30','2:00', '2:30','3:00', '3:30',
  '4:00', '4:30','5:00', '5:30','6:00', '6:30','7:00', '7:30','8:00', '8:30','9:00', '9:30','10:00',
  '10:30','11:00', '11:30','13:00', '13:30','14:00', '14:30','15:00', '15:30','16:00', '16:30','17:00',
   '17:30','18:00', '18:30','19:00', '19:30','20:00', '20:30','21:00', '21:30','22:00', '22:30','23:00', '23:30','24:00']

let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  }


let addFormFields = () => {
    setFormValues([...formValues, { orgin: "", destination: "",departureTime: ""}])
  }

let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues)
}



const onToggle = (num) => {
  setActiveNums((state) => {
    return {
      ...state,
      [num]: !state[num],
    };
  });
  if (num == 'ULR') {
    setPassengers(14)
  }
  if (num == 'HEAVY') {
    setPassengers(12)
  }
  if (num == 'SMID') {
    setPassengers(9)
  }
};


console.log(aircraftRegistration)
//SMID = Challenger , ULR = GLF5, HEAVY = GLF4

  const aircrafs = ['CL30', 'GLF4', 'GLF5']


  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );

  const [startDay, setStartDay] = useState(
    null
  );


//this is to add the timezone to give the correct date
  // .tz('America/Los_Angeles').

  // console.log(date + '.000Z')

  const option = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  // useEffect(() => {
  //   if(inputValue == 'Tuesday'){
  //     setTuesday(basePrice * (0.82))
  //   }
  //   else if(inputValue == 'Friday'){
  //     setTuesday(basePrice * 1.15)
  //   }
  //   else if(inputValue == 'Sunday'){
  //     setTuesday(basePrice * 1.15)
  //   }
  //   else if(inputValue == 'Monday'){
  //     setTuesday(basePrice)
  //   }
  //   else if(inputValue == 'Saturday'){
  //     setTuesday(basePrice)
  //   }
  //   else if(inputValue == 'Thursday'){
  //     setTuesday(basePrice)
  //   }
  //   else if(inputValue == 'Wednesday'){
  //     setTuesday(basePrice * (0.82))
  //   }


  // }, [basePrice]);








  const headers = {
    accept: "application/json",
    "x-vendorId": "a1b077f2-2076-418b-a87a-5fd9e5ec0b5f",
    "x-api-key": "FJRNS8HJNkRwMX1b0cdRxFdyiXPBgce0pkIySmvqpOc=",
    "Content-Type": "application/json-patch+json",
    "timeout": "50",
  };

  // const data =
  //   '{ "flight": { "departure":"KLAX" ,"destination": "KTEB", "scheduledTimeOfDeparture": "2022-02-23T11:24:36.000Z", "aircraftRegistration": "CL30" } }';

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://public-api.foreflight.com/public/api/aircraft`,
          { headers }
        )
        .then((res) => {
          const persons = res.data;
          // console.log(res)

          setAirports(persons);
        });


        // { 'flight': { 'departure': 'KTEB', 'destination': 'KVNY', 'scheduledTimeOfDeparture': '2022-02-25T11:24:36.000Z', 'aircraftRegistration': "N150MB" } },




    };
    fetchData();
  }, []);

  // const icao = () => {
  //   var config = {
  //     method: 'get',
  //     url: `https://maps.googleapis.com/maps/api/timezone/json?location=25.795361%2C-80.290111&timestamp=1331161200&key=AIzaSyCueuRnq4kS5iAVacaE-rBkpL8eVqw37Tg`,
  //     headers: { }
  //   };

  //    axios(config)
  //   .then(function (response) {

  //     const res = response.data.timeZoneId
  //     console.log(res)

  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  // }
// icao()
const dateChange = (e, date) => {
    setStartDate(date)
    let d1 = startDate
    // let day = getDay(d1)
    console.log(getDay(d1))

return getDay(d1)
  }

  const handleAirCraft = (e) => {
    let arr = [];
    // console.log(airports);
    airports.forEach((element) => {
      if (element.aircraftModelCode == e.target.value) {
        arr.push(element.aircraftRegistration);
      }
    });
    // console.log(e.target.value);
    // console.log(arr);
    setArray(arr);
    return arr;
  };

  const handleAirCrafRegist = (e) => {
    let arr = [];
    // console.log(airports);
    airports.forEach((element) => {
      if (element.aircraftModelCode == e.target.value) {
        arr.push(element.aircraftRegistration);
      }
    });
    // console.log(e.target.value);
    // console.log(arr);


    //This Is where I left off
    setAircraftRegistration(arr[0]);
    console.log(aircraftRegistration)
    return aircraftRegistration;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

//     var x
//     for(let i = 0; i < array.length; i++){
//       x = array[i]
//       console.log(x)
// }
    console.log(array);
    console.log("We did it");
    alert(JSON.stringify(formValues));
    console.log(formValues[0].orgin)
    console.log(formValues[1].orgin)
  };
  console.log(formValues)
  const icaofunc = () => {
     axios.get(
      `https://www.airport-data.com/api/ap_info.json?icao=${departure}`

    )
    .then((res) => {
      console.log(res.data)
      if(departure.length == 4){
        setLat(res.data.latitude)
        setLong(res.data.longitude)
      console.log(lat, long)


      }


    })
  }

  console.log(formValues)
  const handleSub = async (e) => {
    e.preventDefault();
    // "2022-02-23T11:24:36.000Z"
    // const date = moment.utc().format('YYYY-MM-DDTHH:mm:ss');
    // console.log(date + '.000Z')
//      axios.get(
//       `https://www.airport-data.com/api/ap_info.json?icao=${departure}`

//     )
//     .then((res) => {
//       console.log(res.data);
//       setLat(res.data.latitude)
//       setLong(res.data.longitude)


//     }
//  )

// alert(JSON.stringify(formValues));
//     console.log(formValues[0].orgin)
//     console.log(formValues[1].orgin)
setDeparture(formValues[0].orgin)
setDestination(formValues[0].destination)


await axios.get(
  `https://www.airport-data.com/api/ap_info.json?icao=${departure}`

)
.then((res) => {
  console.log(res.data)
  if(departure.length == 4){
    setLat(res.data.latitude)
    setLong(res.data.longitude)
  console.log(lat, long)


  }
  const config = {
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/timezone/json?location=${lat}%2C${long}&timestamp=1331161200&key=AIzaSyCueuRnq4kS5iAVacaE-rBkpL8eVqw37Tg`,
    headers: { }
  };
return axios(config).then( (response)  => {

  const res = response.data.timeZoneId
  console.log(res)
  setTimeZ(res)
  setDates(moment.utc().format('YYYY-MM-DDTHH:mm:ss'))

})
.catch(function (error) {
  console.log(error);
});

})



  await axios.post(
      `https://public-api.foreflight.com/public/api/flights/performance`,
      { 'flight': { 'departure': departure, 'destination': destination, 'scheduledTimeOfDeparture': moment.utc().format('YYYY-MM-DDTHH:mm:ss'), 'aircraftRegistration': aircraftRegistration } },
      { headers }
    )
    .then((result) => {
      const token = result.data
      console.log(result)
      console.log(token)
      let avgfuel = token.performance.fuel.flightFuel
      setFuelBurn(avgfuel)
      let time = token.performance.times.timeToDestinationMinutes
      setTime(time)
      let engine = ((time/60) + 12 ) * 1350
      let baseP = ((avgfuel * 2.25) + engine)
      setBasePrice(baseP)
      if(startDay == '2'){
        setTuesday(.85 )
      }
      else if(startDay == '5'){
        setTuesday()
      }
      else if(startDay == '0'){
        setTuesday( )
      }
      else if(startDay == '1'){
        setTuesday()
      }
      else if(startDay == '6'){
        setTuesday()
      }
      else if(startDay == '4'){
        setTuesday()
      }
      else if(startDay == '3'){
        setTuesday( )
      }

//       let d1 = startDate
// console.log(getDay(startDate))
// let hourOfDay = format(d1 , 'HH')


// if(hourOfDay === '05'){
//   setHourOfDayFare(tuesdayFare * 1.30)
// }
// else if(hourOfDay === '06'){
//   setHourOfDayFare(tuesdayFare * 1.20)
// }
// else if(hourOfDay === '07'){
//   setHourOfDayFare(tuesdayFare * 1.20)
// }
// else if(hourOfDay === '08'){
//   setHourOfDayFare(tuesdayFare * 1.20)
// }
// else if(hourOfDay === '22' || '23' || '24'){
//   setHourOfDayFare(tuesdayFare * 1.30)
// }



    console.log(getDay(startDate))
    console.log(avgfuel)})



    // axios.post(
    //   `https://public-api.foreflight.com/public/api/flights/performance`,
    //   { 'flight': { 'departure': departure, 'destination': destination, 'scheduledTimeOfDeparture': moment.utc().format('YYYY-MM-DDTHH:mm:ss'), 'aircraftRegistration': aircraftRegistration } },
    //   { headers }
    // )
    // .then((result) => {
    //   const token = result.data
    //   console.log(token)
    //   let time = token.performance.times.timeToDestinationMinutes
    //   setTime(time)



    // console.log(time)});

    console.log("Almost");


    await axios.post(
      `https://public-api.foreflight.com/public/api/flights/performance`,
      { 'flight': { 'departure': 'KOPF', 'destination': destination, 'scheduledTimeOfDeparture': moment.utc().format('YYYY-MM-DDTHH:mm:ss'), 'aircraftRegistration': aircraftRegistration } },
      { headers }
    )
    .then((result) => {
      const token = result.data

      let tim = token.performance.times.timeToDestinationMinutes
      console.log('Closest HomeBase KOPF from Destination time ' + tim)

      setDestinationHomeBse(tim)
      if(tim <= destinationHomeBse)
      setDestinationHomeBase('KOPF')

      let d1 = startDate
console.log(getDay(startDate))
let hourOfDay = format(d1 , 'HH')


if(hourOfDay === '05'){
  setHourOfDayFare(tuesdayFare * 1.30)
}
else if(hourOfDay === '06'){
  setHourOfDayFare(tuesdayFare * 1.20)
}
else if(hourOfDay === '07'){
  setHourOfDayFare(tuesdayFare * 1.20)
}
else if(hourOfDay === '08'){
  setHourOfDayFare(tuesdayFare * 1.20)
}
else if(hourOfDay === '22' || '23' || '24'){
  setHourOfDayFare(tuesdayFare * 1.30)
}
else {
  setHourOfDayFare(tuesdayFare)
}




    });
       axios.post(
        `https://public-api.foreflight.com/public/api/flights/performance`,
        { 'flight': { 'departure': 'KVNY', 'destination': formValues.destination, 'scheduledTimeOfDeparture': moment.utc().format('YYYY-MM-DDTHH:mm:ss'), 'aircraftRegistration': aircraftRegistration } },
        { headers }
      )
      .then((result) => {
        const token = result.data


        let tim = token.performance.times.timeToDestinationMinutes
        console.log('Closest HomeBase KVNY from Destination time ' + tim)
        if(tim <= destinationHomeBse || destination == 'KVNY'){
          setDestinationHomeBse(tim)
          setDestinationHomeBase('KVNY')
        }

      });
        axios.post(
          `https://public-api.foreflight.com/public/api/flights/performance`,
          { 'flight': { 'departure': 'KTEB', 'destination': destination, 'scheduledTimeOfDeparture': moment.utc().format('YYYY-MM-DDTHH:mm:ss'), 'aircraftRegistration': aircraftRegistration } },
          { headers }
        )
        .then((result) => {
          const token = result.data



          let tim = token.performance.times.timeToDestinationMinutes
          console.log('Closest homebase to destination KTEB ' + tim)
          if(tim <= destinationHomeBse || destination == 'KTEB'){
            setDestinationHomeBse(tim)
            setDestinationHomeBase('KTEB')
          }

        });
//I got rid of every await starting from here so let's see if it works now
        // await axios.post(
        //     `https://public-api.foreflight.com/public/api/flights/performance`,
        //     { 'flight': { 'departure': 'KTEB', 'destination': departure, 'scheduledTimeOfDeparture': moment.utc().format('YYYY-MM-DDTHH:mm:ss'), 'aircraftRegistration': aircraftRegistration } },
        //     { headers }
        //   )
        //   .then((result) => {
        //     const token = result.data

        //     let tim = token.performance.times.timeToDestinationMinutes
        //     console.log('Closest HomeBase KTEB from Departure time ' + tim)


        //   });

        //   await axios.post(
        //       `https://public-api.foreflight.com/public/api/flights/performance`,
        //       { 'flight': { 'departure': 'KVNY', 'destination': departure, 'scheduledTimeOfDeparture': moment.utc().format('YYYY-MM-DDTHH:mm:ss'), 'aircraftRegistration': aircraftRegistration } },
        //       { headers }
        //     )
        //     .then((result) => {
        //       const token = result.data

        //       let tim = token.performance.times.timeToDestinationMinutes
        //       console.log('Closest HomeBase KVNY from Departure time ' + tim)});

        //    await  axios.post(
        //         `https://public-api.foreflight.com/public/api/flights/performance`,
        //         { 'flight': { 'departure': 'KOPF', 'destination': departure, 'scheduledTimeOfDeparture': moment.utc().format('YYYY-MM-DDTHH:mm:ss'), 'aircraftRegistration': aircraftRegistration } },
        //         { headers }
        //       )
        //       .then((result) => {
        //         const token = result.data

        //         let tim = token.performance.times.timeToDestinationMinutes
        //         console.log('Closest HomeBase KOPF from Departure time ' + tim)});
                console.log('THIS IS IT RIGHT HERE THE DESTINATIONS CLOSEST HOMEBASE !!!!!!!!!!!!!! '+ destinationHomeBase + ' ' + destinationHomeBse)

//KTEB

  };



  console.log(tuesdayFare)

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

console.log(inputValue)
// let d1 = startDate
// console.log(getDay(startDate))
// let hourOfDay = format(d1 , 'HH')

// if(hourOfDay === '05'){
//   setHourOfDayFare(tuesdayFare * 1.35)
// }

// const DayOfHourFunc = () =>{
//   let text = "";
//   let i = 22
//   while(i <= 24){
//     text += "The number is " + i;
//     i++;
//     console.log(text)
//   }
// console.log(text)
// }
// DayOfHourFunc()

  return (
    <div style={{
      backgroundColor: 'black',

    }}>
      <div className="apipage">
        <a href="https://public-api.foreflight.com/public/api/aircraft">
          <button type="button" className="startapi">
            Start API Server
          </button>{" "}
        </a>
    {/* </div> */}
    <div>
    <h2 className="apipage white_text">New Quote</h2>
    <div className="wrapper">
      <div className="okay">
      {crafs.map((craf) => {
        return (
          <button
            onClick={() => {onToggle(craf); console.log(craf);


              if(craf == 'HEAVY'){  airports.forEach((element) => {
              if (element.aircraftModelCode == 'GLF4') {
                setAircraftRegistration(element.aircraftRegistration);
              }
            });}
          //   if(craf == 'HEAVY'){if (!!activeNums['SMID']){onToggle(crafs[1])};if (!!activeNums['ULR']){onToggle(crafs[2])}
          // }





            if(craf == 'SMID'){airports.forEach((element) => {
              if (element.aircraftModelCode == 'CL30') {
                setAircraftRegistration(element.aircraftRegistration);
              }
            });}
            // if(craf == 'SMID'){if (!!activeNums['HEAVY']){onToggle(crafs[0])};if (!!activeNums['ULR']){onToggle(crafs[2])}
            // }





            if(craf == 'ULR'){airports.forEach((element) => {
              if (element.aircraftModelCode == 'GLF5') {
                setAircraftRegistration(element.aircraftRegistration);
              }
            });}
            // if(craf == 'ULR'){if (!!activeNums['HEAVY']){onToggle(crafs[0])};if (!!activeNums['SMID']){onToggle(crafs[1])}; }

            else if (!!activeNums[craf]) {setPassengers(0)}
             }}
            style={{
              color: !!activeNums[craf] ? 'green' : 'gray',
              backgroundColor: !!activeNums[craf] ? 'white' : '   ',
              outline: 'none',
              border: 'none',
            }}
            key={craf}
          >
            {craf}
          </button>
        );
      })}
      </div>

      <div className="okay">
       {nums.map((num) => {

        return (
          <button
            onClick={() => {onToggle(num); if(num == 'MULT'){if (!!activeNums['OW']){onToggle(nums[0])};if (!!activeNums['RT']){onToggle(nums[1])}; !!activeNums[num] ? removeFormFields() :  addFormFields()}
            ;if(num == 'RT'){if (!!activeNums['OW']){onToggle(nums[0])};if (!!activeNums['MULT']){onToggle(nums[2], removeFormFields())}
            };
            if(num == 'OW'){if (!!activeNums['RT']){onToggle(nums[1])};if (!!activeNums['MULT']){onToggle(nums[2], removeFormFields())}
            };
             }}
            style={{
              color: !!activeNums[num] ? 'green' : 'gray',
              backgroundColor: !!activeNums[num] ? 'transparent' : 'white',
              outline: 'none',
              border: 'none',
            }}
            key={num}
          >
            {num}
          </button>
        );
      })}
</div>
<div className="okay">
<Autocomplete
      disablePortal
      id="combo-box-demo"
      options={customers}
      sx={{ width: 200}}
      renderInput={(params) => <TextField {...params} label="Customer"  />}
      onChange={(event, value) =>

      console.log(value)
      }
/>

    </div>
    <div className="okay">
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={option}
      // inputValue={inputValue}

      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label="Organization"/>}
      onChange={(event, value) => setInputValue(value)}
    />
    </div>

    </div>
    </div>






<br></br>

        <form onSubmit={handleSub}>
        <div >{formValues.map((element, index) => (
            <div className="wrapper" key={index}>
              <div className="okay" key={index}>
              <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            name="orgin"

            freeSolo='true'
          value={element.orgin || ""}
            sx={{ width: 200 }}
      renderInput={(params) =>  <TextField {...params} label="Orgin *" name="orgin" />}
      onSelect={(e, value) => handleChange(index, e)}
    />
    </div>

<div className="okay">
                 <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            name="destination"
            freeSolo='true'

          value={element.destination || ""}
            sx={{ width: 200 }}
      renderInput={(params) =>  <TextField {...params} label="Destination *" name="destination" />}
      onSelect={e => handleChange(index, e)}
    />
    </div>

{/* <DatePicker
      selected={startDate}
      onChange={dateChange}
      dateFormat="MMMM d, yyyy"
    /> */}
    {/* Switch Time and Date input boxes */}

    <div className="okay">
     <DatePicker
      selected={startDate}
      name={"date"}

      onSelect={(item) => {
         setStartDate(item)
         setStartDay(item.getDay())
        //  if(item.getDay == 2){
        //   setTuesday(basePrice * (0.82))
        // }
        // else if(item.getDay == 6){
        //   setTuesday(basePrice * 1.15)
        // }
        // else if(item.getDay == 0){
        //   setTuesday(basePrice * 1.15)
        // }
        // else if(item.getDay == 1){
        //   setTuesday(basePrice)
        // }
        // else if(item.getDay == 3){
        //   setTuesday(basePrice)
        // }
        // else if(item.getDay == 5){
        //   setTuesday(basePrice)
        // }
        // else if(item.getDay == 4){
        //   setTuesday(basePrice * (0.82))
        // }

      }}

      dateFormat="MMMM d, yyyy"
    />
</div>

{console.log(startDay)}



    <div className="okay">
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={timeOptions}
            name="departureTime"
            freeSolo='true'

          value={element.departureTime || ""}
            sx={{ width: 200 }}
      renderInput={(params) =>  <TextField {...params} label="Departure Time *" name="departureTime" />}
      onSelect={e => handleChange(index, e)}
    />
</div>

              {
                index === 1 ?
                <>
                <div className="wrapper">
                <div className="okay">
                  <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
                  {/* <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> */}
                </div>
                </div>
                  </>

                : null
              }
                        {
                index > 1 ?
                <>
                <div className="wrapper">
                <div className="okay">

                  <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button>
                </div>
                </div>
                  </>

                : null
              }
            </div>
          ))}
        <label className="white_text"  htmlFor="passengers"># of Passengers (OPTIONAL):  </label><input

id="passengers"
type="number"
value={passengers}
onChange={(e) => setPassengers(e.target.value)}
placeholder="Passengers (OPTIONAL)"
/>
            {(activeNums.RT) ? <>
  {formRTValues.map((element, index) => (
    <div className="wrapper">
      <div className="okay" key={index}>
              <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            name="orgin"

            freeSolo='true'
          value={formValues[0].orgin}
            sx={{ width: 200 }}
      renderInput={(params) =>  <TextField {...params} label="Orgin *" name="orgin" />}
      onSelect={(e, value) => handleChange(index, e)}
    />
    </div>
    <div className="okay">
                 <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            name="destination"
            freeSolo='true'

          value={formValues[0].destination}
            sx={{ width: 200 }}
      renderInput={(params) =>  <TextField {...params} label="Destination *" name="destination" />}
      onSelect={e => handleChange(index, e)}
    />
    </div>
    <div className="okay"><DatePicker
    selected={returnDate}
    name={"returnDate"}

    onChange={(item) => {
      setReturnDate(item)
      console.log(returnDate)
    }}

    dateFormat="MMMM d, yyyy"
  /> </div>
      <div className="okay">
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={timeOptions}
            name="departureTime"
            freeSolo='true'
          value={element.departureTime || ""}
            sx={{ width: 200 }}
      renderInput={(params) =>  <TextField {...params} label="Return Time" name="returnTime" />}
      onSelect={e => { handleRTChange(index, e)}}
    /> </div>



  </div>))}
</> : console.log('null')}





          <div className="button-section">


          </div>

      </div>
      <div className="apipage"> <button className='startapi' type="submit">
          Submit
        </button></div>
            <div className="row">

            <div className="column" >

        {/* <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      freeSolo
      autoSelect

      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label="Departure"  />}
      onChange={(event, value) => setDeparture(value)}
    /> */}
    {/* <br></br> */}
{/*
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={aircrafs}
      freeSolo
      autoSelect

      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label="Aircraft Model Code"  />}
      onChange={(event, value) => {
        let arr = []
        airports.forEach((element) => {
          if(element.aircraftModelCode == value){
            arr.push(element.aircraftRegistration);
          }
        });
        setAircraftRegistration(arr[0])
        console.log(aircraftRegistration)
        return aircraftRegistration
      }}
    /> */}


    {/* <label className='labels'htmlFor="myInput">Passengers</label>
     <input

          id="myInput"
          type="number"
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
          placeholder="Passengers (OPTIONAL)"
        /> */}
  </div>

        {/* <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Destination"
        /> */}
        <div className="column" >
               {/* <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      freeSolo
      autoSelect

      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label="Destination"  />}
      onChange={(event, value) => setDestination(value)}
    /> */}
    {/* <br></br> */}
{/* DATEEEE PICKER --------------------------------------------------------------------------- */}
         {/* <br></br>
     <DatePicker
      selected={startDate}
      onChange={(date) => {setStartDate(date)
        let d1 = startDate
        console.log(getDay(startDate))
        let hourOfDay = format(d1 , 'HH')
        console.log(hourOfDay)


        if(hourOfDay === '05'){
          setHourOfDayFare(tuesdayFare * 1.30)
        }
         if(hourOfDay === '06'){
          setHourOfDayFare(tuesdayFare * 1.20)
        }
         if(hourOfDay === '07'){
          setHourOfDayFare(tuesdayFare * 1.20)
        }
         if(hourOfDay === '08'){
          setHourOfDayFare(tuesdayFare * 1.20)
        }
         if(hourOfDay === '22' || '23' || '24'){
          setHourOfDayFare(tuesdayFare * 1.30)
        }
       if (hourOfDay === '09'){setHourOfDayFare(tuesdayFare)
      }
      else {setHourOfDayFare(tuesdayFare)}}}
      showTimeSelect
      dateFormat="MMMM d, yyyy h:mm"
    />
    <br></br> */}

         {/* <input
          type="text"

          onChange={handleAirCrafRegist}
          placeholder="Aircraft Registration"
        /> */}
        </div>


{/* <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={aircrafs}
      freeSolo
      autoSelect

      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label="Aircraft Model Code"  />}
      onChange={(event, value) => {
        let arr = []
        airports.forEach((element) => {
          if(element.aircraftModelCode == value){
            arr.push(element.aircraftRegistration);
          }
        });
        setAircraftRegistration(arr[0])
        console.log(aircraftRegistration)
        return aircraftRegistration
      }}
    /> */}
    <br></br>
{/* <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={customers}
      freeSolo
      autoSelect

      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label="Customer"  />}
      onChange={(event, value) =>

      console.log(value)
      }
    /> */}




</div>
       {/* <div> <button className='startapi' type="submit">
          Submit
        </button></div> */}


        </form>






        <p> Time: {time} minutes</p>
        <p> Base price: ${basePrice}</p>
        <p> Fuel Burn: {fuelBurn} gallons</p>
        <p>Week Day Fare: ${Math.round(100 * tuesdayFare)/100}</p>
        <p>Hour of Day Fare: ${Math.round((100 * hourOfDayFare)/100)}</p>
        <p>Destination HomeBase: {destinationHomeBase}</p>
        <p>Departure HomeBase: {departureHomeBase}</p>
        <p># of Passengers (OPTIONAL): <input

id="myInput"
type="number"
value={passengers}
onChange={(e) => setPassengers(e.target.value)}
placeholder="Passengers (OPTIONAL)"
/></p>

        <h2> Aircraft Registration List: </h2>

        <br></br>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleAirCraft}
            placeholder='Aircraft Type'
          />
          <button
            onClick={() => setHtml(renderHtml())}
            className="startapi"
            type="submit"
          >
            Submit
          </button>

          {html}
        </form>
        {/* <h2> Aircraft Types: </h2>
        {aircrafttype}
        <ul>{renderAirCraftTypes}</ul> */}
      </div>

    </div>
  );
}

export default AircraftList;
