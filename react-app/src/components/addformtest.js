// import moment from 'moment';
// import React, { useState } from 'react'
// import TimePicker from 'react-time-picker';



// const AddForm = () => {
//     // moment.utc().tz(timez).format('YYYY-MM-DDTHH:mm:ss')
//     // var date = moment.utc().format('YYYY-MM-DD hh:mm:ss');

//     // var localTime  = moment.utc(date).toDate();

//     // localTime = moment(localTime).format('YYYY-MM-DD hh:mm:ss');
//     // console.log(typeof localTime)
//     // const [value, onChange] = useState("12:00");
//     const [formValues, setFormValues] = useState([{ orgin: "", destination : "" }])

//     let handleChange = (i, e) => {
//         let newFormValues = [...formValues];
//         newFormValues[i][e.target.orgin] = e.target.value;
//         setFormValues(newFormValues);

//       }



//     let addFormFields = () => {
//         setFormValues([...formValues, { orgin: "", destination: ""}])
//       }

//     let removeFormFields = (i) => {
//         let newFormValues = [...formValues];
//         newFormValues.splice(i, 1);
//         setFormValues(newFormValues)
//     }

//     let handleSubmit = (event) => {
//         event.preventDefault();
//         alert(JSON.stringify(formValues));
//         console.log(formValues)

//     }

//     return (
//         <form  onSubmit={handleSubmit}>
//           {formValues.map((element, index) => (
//             <div classorgin="form-inline" key={index}>
//               <label>orgin</label>
//               <input type="text"  name="orgin" value={element.orgin || ""} onChange={e => handleChange(index, e)} />
//               <label>destination</label>
//               <input type="text" name="destination" value={element.destination || ""} onChange={e => handleChange(index, e)} />
//               {/* <label>Start Time</label> */}
//               {/* <input type="text" orgin="start" value={element.start || ""} onChange={e => handleChange(index, e)} />
//               <TimePicker onChange={onChange} value={value} /> */}

//               {
//                 index ?
//                   <button type="button"  classorgin="button remove" onClick={() => removeFormFields(index)}>Remove</button>
//                 : null
//               }
//             </div>
//           ))}



//           <div classorgin="button-section">
//               <button classorgin="button add" type="button" onClick={() => addFormFields()}>Add a leg</button>
//               <button classorgin="button submit" type="submit">Submit</button>
//           </div>
//       </form>
//     )
// }

// export default AddForm
























import axios from "axios";
import moment from 'moment';
import React, { useEffect, useState , useRef} from 'react'
import TimePicker from 'react-time-picker';
import TextField from '@mui/material/TextField';
import { Autocomplete } from '@mui/material';
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { getTime, getDay, format } from "date-fns";
import { options } from "./foredata";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";

import './foreflight.css'






const AddForm = () => {

  const [activeNums, setActiveNums] = React.useState({OW: 'OW', BASE: 'BASE', WHOLESALE: 'WHOLESALE', STD: 'STD'});
    var localTime  = moment.utc().toDate();

    const menuStyle = {
      width: 120, height: 31, backgroundImage: `url(${'http://3.bp.blogspot.com/-4oAWWCcNNz4/Tjr3nKNyVUI/AAAAAAAAPLU/Pouua-pNsEY/s1600/sq.gif'})`,
            backgroundSize: '30=8px', paddingLeft: '0px', backgroundColor:'green'
    }
    console.log(localTime)
    const [value, onChange] = useState(localTime);
    const [inputValue, setInputValue] = useState('');
    const [destination, setDestination] = useState('');
    const [orgin, setOrgin] = useState('');
    const [startDate, setStartDate] = useState(
    null
    );

    const routeInd = ['STD','MUST MOVE']
    const nums = ['OW','RT','MULT']
    const custoprice = ['STANDARD','PREMIUM', 'DISCOUNT']


  const [formValues, setFormValues] = useState([{ orgin: "", destination : "",departureTime: "",}])
  const [formRTValues, setRTFormValues] = useState([{returnTime: "",}])



    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues( newFormValues);
      }

      let handleRTChange = (i, e) => {
        let newFormValues = [...formRTValues];
        newFormValues[i][e.target.name] = e.target.value;
        setRTFormValues( newFormValues);
      }

    let addFormFields = () => {
        setFormValues([...formValues, { orgin: "", destination: "",departureTime: ""}])
      }



      let addRTFormFields = () => {
        setRTFormValues([...formRTValues, {returnTime: ""}])

      }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    let removeRTFormFields = (i) => {
      let newFormValues = [...formRTValues];
      newFormValues.splice(i, 1);
      setRTFormValues(newFormValues)
  }

    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
        console.log(formValues[0].orgin)
        console.log(value)
        console.log(orgin)
        // console.log(formValues[1].orgin)

    }

    const onToggle = (num) => {
      setActiveNums((state) => {
        return {
          ...state,
          [num]: !state[num],
        };
      });
      if (num == 'MULT') {
        console.log('works')
      }
      if (num == 'RT') {
        console.log('Roundtrip')
      }
    };

    const moviesRef = useRef(null)

    useEffect(() => {
    console.log(formValues)
    console.log(formRTValues)



          },[]);



    //       // { 'flight': { 'departure': 'KTEB', 'destination': 'KVNY', 'scheduledTimeOfDeparture': '2022-02-25T11:24:36.000Z', 'aircraftRegistration': "N150MB" } },


    console.log(formValues)
    console.log(formRTValues)


    //   };
    //   fetchData();
    // }, []);


console.log(formValues.orgin)
console.log(destination)
console.log(activeNums.RT)

  document.getElementById("button")

const timeOptions = ['0:00', '0:30','12:00', '12:30', '1:00', '1:30','2:00', '2:30','3:00', '3:30',
'4:00', '4:30','5:00', '5:30','6:00', '6:30','7:00', '7:30','8:00', '8:30','9:00', '9:30','10:00', '10:30','11:00', '11:30','13:00', '13:30','14:00', '14:30','15:00', '15:30','16:00', '16:30','17:00', '17:30','18:00', '18:30','19:00', '19:30','20:00', '20:30','21:00', '21:30','22:00', '22:30','23:00', '23:30','24:00']
    return (
      <>
      {/* <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={option}
      // inputValue={inputValue}
      freeSolo
      autoSelect
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Orgin"  />}
      onChange={(event, value) => setInputValue(value)}
    /> */}
     {/* <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={option}
      // inputValue={inputValue}

      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Destination"  />}
      onChange={(event, value) => setDestination(value)}
    /> */}

<div>

      {nums.map((num) => {

        return (
          <>

          <button
            // eslint-disable-next-line no-unused-expressions
            autoFocus
            id="button"
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
          </>
        );
      })}


    </div>

    <div>

{routeInd.map((num) => {

  return (
    <>

    <button
      // eslint-disable-next-line no-unused-expressions
      autoFocus
      id="button"
      onClick={() => {onToggle(num); if(num == 'STD'){if (!!activeNums['MUST MOVE']){onToggle(routeInd[1])};}
      ;if(num == 'MUST MOVE'){if (!!activeNums['STD']){onToggle(routeInd[0])};
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
    </>
  );
})}


</div>

<div>

      {custoprice.map((num) => {

        return (
          <>

          <button
            // eslint-disable-next-line no-unused-expressions
            autoFocus
            id="button"
            onClick={() => {onToggle(num); if(num == 'DISCOUNT'){if (!!activeNums['STANARD']){onToggle(custoprice[0])};if (!!activeNums['PREMIUM']){onToggle(custoprice[1])};}
            ;if(num == 'PREMIUM'){if (!!activeNums['STANDARD']){onToggle(custoprice[0])};if (!!activeNums['DISCOUNT']){onToggle(custoprice[2])}
            };
            if(num == 'STANDARD'){if (!!activeNums['PREMIUM']){onToggle(custoprice[1])};if (!!activeNums['DISCOUNT']){onToggle(custoprice[2])}
            };
             }}

            style={{


              color: !!activeNums[num] ? 'green' : 'gray',
            backgroundColor: !!activeNums[num] ? 'white' : '    ',
              outline: 'none',
              border: 'none',
            }}
            key={num}
          >
            {num}
          </button>
          </>
        );
      })}


    </div>










        <form  onSubmit={handleSubmit}>
          {formValues.map((element, index) => (
            <div className="form-inline" key={index}>
              {/* <label>Orgin</label>
              <input type="text" name="orgin" value={element.orgin || ""} onChange={e => handleChange(index, e)} /> */}
              <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            name="orgin"
            freeSolo='true'
      // inputValue={inputValue}
          value={element.orgin || ""}
          sx={{ width: 150, height:'38px', backgroundImage: `url('http://3.bp.blogspot.com/-4oAWWCcNNz4/Tjr3nKNyVUI/AAAAAAAAPLU/Pouua-pNsEY/s1600/sq.gif')`, backgroundSize: '38px', letterSpacing:'38px', paddingLeft: '0px', color:'green' }}
      renderInput={(params) =>  <TextField letterSpacing={50} style={{ width: 150, height:'38px', backgroundImage: `url('http://3.bp.blogspot.com/-4oAWWCcNNz4/Tjr3nKNyVUI/AAAAAAAAPLU/Pouua-pNsEY/s1600/sq.gif')`, backgroundSize: '38px', letterSpacing:'38px', paddingLeft: '0px', color: 'green' }}{...params} inputStyle={{ letterSpacing: 20 }} label="Orgin" name="orgin" />}
      onSelect={e => {handleChange(index, e)
      setOrgin(e.target.value)}}
    />
                 <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            name="destination"
            freeSolo='true'
      // inputValue={inputValue}
          value={element.destination || ""}
            style={{ width: 200 }}
      renderInput={(params) =>  <TextField {...params} label="destination" name="destination" />}
      onSelect={e => handleChange(index, e)}
    />

     <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={timeOptions}
            name="departureTime"
            freeSolo='true'
          value={element.departureTime || ""}
            sx={{ width: 120, height: 31, backgroundImage: `url(${'http://3.bp.blogspot.com/-4oAWWCcNNz4/Tjr3nKNyVUI/AAAAAAAAPLU/Pouua-pNsEY/s1600/sq.gif'})`,
            }}
            inputProps={{ style: menuStyle }}


      renderInput={(params) => <TextField  {...params}  name="departureTime" />}
      onSelect={e => {handleChange(index, e)}}
    />
     {/* <DatePicker
      selected={startDate}
      name={"date"}

      onChange={(item) => {
        console.log(item)
        // should print something like { name: "startDate", value: "the date object" }
        setFormValues({ ...formValues, [item.name]: item.value })
      }}

      showTimeSelect
      dateFormat="MMMM d, yyyy h:mm"
    /> */}
              {/* <label>Destination</label>
              <input type="text" name="destination" value={element.destination || ""} onChange={e => handleChange(index, e)} /> */}
              {/* <TimePicker onChange={onChange} value={value}  /> */}
              {
                index ?
                <>

                  <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button>
                  <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
                  </>
                : null
              }

            </div>
          ))}

          {(activeNums.RT) ? <>     {formRTValues.map((element, index) => (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={timeOptions}
            name="departureTime"
            freeSolo='true'
          value={element.departureTime || ""}
            sx={{ width: 300 }}
      renderInput={(params) =>  <TextField {...params} label="Return Time" name="returnTime" />}
      onSelect={e => { handleRTChange(index, e)}}
    />  ))}</> : console.log('null')}
          {/* {formRTValues.map((element, index) => (<Autocomplete
            disablePortal
            id="combo-box-demo"
            options={timeOptions}
            name="departureTime"
            freeSolo='true'
          value={element.departureTime || ""}
            sx={{ width: 300 }}
      renderInput={(params) =>  <TextField {...params} label="Departure Time" name="departureTime" />}
      onSelect={e => {handleChange(index, e); handleRTChange(index, e)}}
    />  ))} */}
           {/* <DatePicker
      selected={startDate}
      name={"date"}

      onChange={(item) => {

        setStartDate(item)
        console.log(startDate)

      }}

      dateFormat="MMMM d, yyyy"

      // dateFormat="MMMM d, yyyy"
    /> */}
    {/* <Flatpickr
        data-enable-time
        value={startDate}
        onChange={startDate => {
     setStartDate(startDate)
     console.log(startDate)
        }}
      /> */}
          <div className="button-section">

              <button className="button submit"  type="submit">Submit</button>
          </div>
          
      </form>

      </>
    )
}

export default AddForm
