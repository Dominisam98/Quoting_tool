import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";
import { Button, useScrollTrigger } from "@mui/material";
import './pricing.css'
import * as priceStore from "../../store/price";
import * as priceActions from "../../store/price";

const currentcyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: 5
  });




function Pricing() {
    const priceReducer = useSelector((state) => state.priceReducer);
    let prices = priceReducer?.allPrices
    const [priceState, setPriceState] = useState(prices);
    const dispatch = useDispatch();


    if(!prices){
        dispatch(priceStore.thunk_getAllPrices());
      }

      useEffect(() => {
        dispatch(priceStore.thunk_getAllPrices());
        setPriceState(priceReducer?.allPrices)
        console.log(prices)
      }, [dispatch]);




      let trial;
      let trialOne;
      let trialTwo;
      let trialThree;
      let trialFour;
      let trialFive;
      let trialSix;
      let trialSeven;
      let trialEight;
      let trialNine;
      let trialTen;
      let trialEleven;
      let trialTwelve;
      let trialThirteen;
      let trialFourteen;
      let trialFifteen;
      let trialSixteen;
      let trialSeventeen;
      let trialEighteen;
      let trialNinteen;
      let trialTwenty;
      let trialTwentyOne
      let trialTwentyTwo;
      let trialTwentyThree;
      let trialTwentyFour;
      let trialTwentyFive;
      let trialTwentySix;
      let trialTwentySeven;
      let trialTwentyEight;
      let trialTwentyNine;
      let trialThirty;
      let trialThirtyOne;
      let trialThirtyTwo;
      let trialThirtyThree;
      let trialThirtyFour;
      let trialThirtyFive;
      let trialThirtySix;
      let trialThirtySeven;
      let trialThirtyEight;
      let trialThirtyNine;
      let trialFourty;
      let trialFourtyOne;
      let trialFourtyTwo;
      let trialFourtyThree;
      let trialFourtyFour;
      let trialFourtyFive;
      let trialFourtySix;
      let trialFourtySeven;
      let trialFourtyEight;
      let trialFourtyNine;
      let trialFifty;
      let trialFiftyOne;
      let trialFiftyTwo;
      let trialFiftyThree;
      let trialFiftyFour;
      let trialFiftyFive;
      let trialFiftySix;
      let trialFiftySeven;
      let trialFiftyEight;

      priceState && priceState.map((spot,key) => ( key == 0 ? trial = spot.varEight : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialOne = spot.varOne : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialTwo = spot.varTwo : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialThree = spot.varThree : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialFour = spot.varFour : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialFive = spot.varFive : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialSix = spot.varSix : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialSeven = spot.varSeven : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialNine = spot.varNine : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialTen = spot.varTen : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialEleven = spot.varEleven : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialTwelve = spot.varTwelve : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialThirteen = spot.varThirteen : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialFourteen = spot.varFourteen : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialFifteen = spot.varFifteen : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialSixteen = spot.varSixteen : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialSeventeen = spot.varSeventeen : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialEighteen = spot.varEighteen : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialNinteen = spot.varNinteen : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialTwenty = spot.varTwenty : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialTwentyOne = spot.varTwentyOne : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialTwentyTwo = spot.varTwentyTwo : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialTwentyThree = spot.varTwentyThree : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialTwentyFour = spot.varTwentyFour : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialTwentyFive = spot.varTwentyFive : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialTwentySix = spot.varTwentySix : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialTwentySeven = spot.varTwentySeven : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialTwentyEight = spot.varTwentyEight : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialTwentyNine = spot.varTwentyNine : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialThirty = spot.varThirty : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialThirtyOne = spot.varThirtyOne : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialThirtyTwo = spot.varThirtyTwo : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialThirtyThree = spot.varThirtyThree : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialThirtyFour = spot.varThirtyFour : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialThirtyFive = spot.varThirtyFive : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialThirtySix = spot.varThirtySix : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialThirtySeven = spot.varThirtySeven : null))
            priceState && priceState.map((spot,key) => ( key == 0 ? trialThirtySeven = spot.varThirtySeven : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialThirtyNine = spot.varThirtyNine : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialFourty = spot.varFourty : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialFourtyOne = spot.varFourtyOne : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialFourtyTwo = spot.varFourtyTwo : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialFourtyThree = spot.varFourtyThree : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialFourtyFour = spot.varFourtyFour : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialFourtyFive = spot.varFourtyFive : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialFourtySix = spot.varFourtySix : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialFourtySeven = spot.varFourtySeven : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialFourtyEight = spot.varFourtyEight : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialFourtyNine = spot.varFourtyNine : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialFifty = spot.varFifty : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialFiftyOne = spot.varFiftyOne : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialFiftyTwo = spot.varFiftyTwo : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialFiftyThree = spot.varFiftyThree : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialFiftyFour = spot.varFiftyFour : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialFiftyFive = spot.varFiftyFive : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialFiftySix = spot.varFiftySix : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialFiftySeven = spot.varFiftySeven : null))
      priceState && priceState.map((spot,key) => ( key == 0 ? trialFiftyEight = spot.varFiftyEight : null))











      const user = useSelector((state) => state.session.user);

      const history = useHistory();





    const [price, setPrice] = useState(80 );
    const [varOne, setVarOne] = useState(trialOne);
    const [varTwo, setVarTwo] = useState(trialTwo );
    const [varThree, setVarThree] = useState(trialThree);
    const [varFour, setVarFour] = useState(trialFour);
    const [varFive, setVarFive] = useState(trialFive );
    const [varSix, setVarSix] = useState(trialSix );
    const [varSeven, setVarSeven] = useState(trialSeven );
    const [varEight, setVarEight] = useState(trial);
    const [varNine, setVarNine] = useState(trialNine );
    const [varTen, setVarTen] = useState(trialTen);
    const [varEleven, setVarEleven] = useState(trialEleven );
    const [varTwelve, setVarTwelve] = useState(trialTwelve );
    const [varThirteen, setVarThirteen] = useState(trialThirteen );
    const [varFourteen, setVarFourteen] = useState(trialFourteen);
    const [varFifteen, setVarFifteen] = useState(trialFifteen );
    const [varSixteen, setVarSixteen] = useState(trialSixteen);
    const [varSeventeen, setVarSeventeen] = useState(trialSeventeen );
    const [varEighteen, setVarEighteen] = useState(trialEighteen );
    const [varNinteen, setVarNinteen] = useState(trialNinteen );
    const [varTwenty, setVarTwenty] = useState(trialTwenty);
    const [varTwentyOne, setVarTwentyOne] = useState(trialTwentyOne );
    const [varTwentyTwo, setVarTwentyTwo] = useState(trialTwentyTwo);
    const [varTwentyThree, setVarTwentyThree] = useState(trialTwentyThree);
    const [varTwentyFour, setVarTwentyFour] = useState(trialTwentyFour);
    const [varTwentyFive, setVarTwentyFive] = useState(trialTwentyFive);
    const [varTwentySix, setVarTwentySix] = useState(trialTwentySix);
    const [varTwentySeven, setVarTwentySeven] = useState(trialTwentySeven );
    const [varTwentyEight, setVarTwentyEight] = useState(trialTwentyEight );
    const [varTwentyNine, setVarTwentyNine] = useState(trialTwentyNine );
    const [varThirty, setVarThirty] = useState(trialThirty);
    const [varThirtyOne, setVarThirtyOne] = useState(trialThirtyOne);
    const [varThirtyTwo, setVarThirtyTwo] = useState(trialThirtyTwo);
    const [varThirtyThree, setVarThirtyThree] = useState(trialThirtyThree );
    const [varThirtyFour, setVarThirtyFour] = useState(trialThirtyFour);
    const [varThirtyFive, setVarThirtyFive] = useState(trialThirtyFive);
    const [varThirtySix, setVarThirtySix] = useState(trialThirtySix);
    const [varThirtySeven, setVarThirtySeven] = useState(trialThirtySeven );
    const [varThirtyEigh, setVarThirtyEigh] = useState(80);
    const [varThirtyNine, setVarThirtyNine] = useState(trialThirtyNine );
    const [varFourty, setVarFourty] = useState(trialFourty );
    const [varFourtyOne, setVarFourtyOne] = useState(trialFourtyOne );
    const [varFourtyTwo, setVarFourtyTwo] = useState(trialFourtyTwo );
    const [varFourtyThree, setVarFourtyThree] = useState(trialFourtyThree);
    const [varFourtyFour, setVarFourtyFour] = useState(trialFourtyFour );
    const [varFourtyFive, setVarFourtyFive] = useState(trialFourtyFive);
    const [varFourtySix, setVarFourtySix] = useState(trialFourtySix );
    const [varFourtySeven, setVarFourtySeven] = useState(trialFourtySeven );
    const [varFourtyEight, setVarFourtyEight] = useState(trialFourtyEight );
    const [varFourtyNine, setVarFourtyNine] = useState(trialFourtyNine );
    const [varFifty, setVarFifty] = useState(trialFifty );
    const [varFiftyOne, setVarFiftyOne] = useState(trialFiftyOne );
    const [varFiftyTwo, setVarFiftyTwo] = useState(trialFiftyTwo );
    const [varFiftyThree, setVarFiftyThree] = useState(trialFiftyThree );
    const [varFiftyFour, setVarFiftyFour] = useState(trialFiftyFour );
    const [varFiftyFive, setVarFiftyFive] = useState(trialFiftyFive);
    const [varFiftySix, setVarFiftySix] = useState(trialFiftySix );
    const [varFiftySeven, setVarFiftySeven] = useState(trialFiftySeven );
    const [varFiftyEight, setVarFiftyEight] = useState(trialFiftyEight );



console.log(trialOne)
    const handleSubmite = async (e) => {
        e.preventDefault();
        const userId = user.id;

        //setting images 1-3 to urls submitted on a spot


        //front-end validations
        const validationErrors = []
        // if(!name || name.length > 40){
        //   validationErrors.push("Spot name must be between 1 and 40 characters.")
        // }
        // if (!address || address.length > 40) {
        //   validationErrors.push("Address must be between 1 and 40 characters.");
        // }
        // if(!city || city.length > 20) {
        //   validationErrors.push("City must be between 1 and 20 characters.");
        // }
        // if(!state || state.length > 20){
        //   validationErrors.push("Please enter valid state.");
        // }
        // if (!country || country.length > 20) {
        //   validationErrors.push("Country must be between 1 and 20 characters.");
        // }

        // if (price <= 0) {
        //   validationErrors.push(
        //     "Please enter a valid price between $1 and $1,000,000"
        //   );
        // }



        //checking for specific errors to set input errors


        //checking for back-end validations
        if (!validationErrors.length) {
          await dispatch(
            priceActions.thunk_addPrice({
              userId,
              varOne,
              varTwo,
              varThree,
              varFour,
              varFive,
              varSix,
              varSeven,
              varEight,
              varNine,
              varTen,
              varEleven, varTwelve, varThirteen, varFourteen, varFifteen, varSixteen, varSeventeen, varEighteen, varNinteen, varTwenty, varTwentyOne, varTwentyTwo, varTwentyThree, varTwentyFour, varTwentyFive, varTwentySix, varTwentySeven, varTwentyEight, varTwentyNine, varThirty, varThirtyOne, varThirtyTwo, varThirtyThree, varThirtyFour, varThirtyFive, varThirtySix, varThirtySeven, varThirtyEigh, varThirtyNine, varFourty, varFourtyOne, varFourtyTwo, varFourtyThree, varFourtyFour, varFourtyFive, varFourtySix, varFourtySeven, varFourtyEight, varFourtyNine, varFifty, varFiftyOne, varFiftyTwo, varFiftyThree, varFiftyFour, varFiftyFive, varFiftySix, varFiftySeven, varFiftyEight
            })
          ).catch(async (res) => {
            const data = await res.json();

          });
          await dispatch(priceStore.thunk_getAllPrices()).then(
            (res) => res && history.push("/quotes/")
          );
        }
      };

      if(!prices){
        dispatch(priceStore.thunk_getAllPrices());
      }
      useEffect(() => {
          dispatch(priceStore.thunk_getAllPrices());
          setPriceState(priceReducer?.allPrices)


        }, [dispatch, setPriceState]);













    const [value, setValue] = useState("");

    const keyPressHanlder = (event) => {
      const { key } = event;
      setValue((prevValue) =>
        key !== "Backspace"
          ? !Number.isNaN(parseInt(key)) || key === "," || key === "."
            ? prevValue + key
            : prevValue
          : prevValue.substring(0, prevValue.length - 1)
      );
    };

console.log(varTen)



console.log(varTen)


  return (
    <>
    <div className="mainBody">
<form    onSubmit={handleSubmite}>
      <table id="tabl">
        <tr>
          <th className='theader'>Base Fare</th>
          <th className='theaderSM'>SMID<tr><td className="tdataborder"></td><td className="tdataSM">0-2.5</td><td className="tdataborder"></td><td className="tdataSM">2.5-3.5</td><td className="tdataborder"></td><td className="tdataSM">3.5-4.6</td> <td className="tdataborder"></td><td className="tdataSM">3.5-4.6</td></tr></th>
          <th className='theaderHV'>HVY<tr><td className="tdataborder"></td><td className="tdataSM">0-2</td><td className="tdataborder"></td><td className="tdataSM">2-4</td><td className="tdataborder"></td><td className="tdataSM">4-6</td><td className="tdataborder"></td><td className="tdataSM">6+</td></tr></th>
          <th className='theaderUL'>ULR <tr><td className="tdataborder"></td><td className="tdataSM">0-2</td><td className="tdataborder"></td><td className="tdataSM">2-4</td><td className="tdataborder"></td><td className="tdataSM">4-6</td><td className="tdataborder"></td><td className="tdataSM">6+</td><td className="tdataborder"></td><td className="tdataSM">7+</td><td className="tdataborder"></td><td className="tdataSM">6+</td></tr></th>

        </tr>

            <tr >
            <td className="tdata"><tr><td>Routing</td><td></td></tr><tr><td></td><td>BTB</td></tr><tr><td></td><td>BTNB</td></tr><tr><td></td><td>NBTNB</td></tr><td></td></td>
              <td className="tdata"><tr><td></td><td className="variab"> <input
id='myInput'
className="variab"
type="number"
value={varEight}
placeholder={trial}
onChange={(e) => {setVarEight(e.target.value)}}

/></td><td className="variab"><input

id='myInput'
className="variab"
type="number"
value={varOne}
onChange={(e) => {setVarOne(e.target.value)}}

/></td></tr><tr><td className="variab"> <input
className="variab"
id='myInputO'
        name="currency-input"
        onKeyDown={keyPressHanlder}
        placeholder={"$" + trialTwo}
        value={varTwo}
        onChange={(e) => {setVarTwo(e.target.value)}}
      /></td><td>{`$` + varTwo * varEight / 100}</td><td>{`$` + varTwo * varOne / 100}</td></tr><tr><td>$14,145</td><td>$11,716</td><td>$9,773</td></tr><tr><td>$16,145</td><td>$13,716</td><td>$11,773</td></tr><tr className="whi">-</tr></td>
              <td className="tdata"><tr><td></td><td className="variab"><input
id='myInput'
className="variab"
type="number"

value={varThree}
onChange={(e) => {setVarThree(e.target.value)}}

/></td><td className="variab"><input
id='myInput'
className="variab"
type="number"
placeholder={` $  ${trialFour}`}
value={varFour}
onChange={(e) => {setVarFour(e.target.value)}}

/></td><td className="variab"><input
id='myInput'
className="variab"
type="number"
value={varFive}
onChange={(e) => {setVarFive(e.target.value)}}

/></td></tr><tr><td className="variab"><input
className="variab"
id='myInputO'
        name="currency-input"
        onKeyDown={keyPressHanlder}
        placeholder={"$14,200"}
        value={varSix}
        onChange={(e) => {setVarSix(e.target.value)}}
      /></td><td>$11,360</td><td>$9,088</td><td>$7,270</td></tr><tr><td>$16,200</td><td>$13,360</td><td>$11,088</td><td>$9,270</td></tr><tr><td>$18,200</td><td>$15,360</td><td>$13,088</td><td>$11,270</td></tr><tr className="whi">-</tr></td>
              <td className="tdata"><tr><td></td><td className="variab"><input
id='myInput'
className="variab"
type="number"
value={varSeven}
onChange={(e) => {setVarSeven(e.target.value)}}

/></td><td className="variab"><input
id='myInput'
className="variab"
type="number"
value={varNine}
onChange={(e) => {setVarNine(e.target.value)}}

/></td><td className="variab"><input
id='myInput'
className="variab"
type="number"
value={varTen}
onChange={(e) => {setVarTen(e.target.value)}}

/></td><td className="variab"><input
id='myInput'
className="variab"
type="number"
value={varEleven}
onChange={(e) => {setVarEleven(e.target.value)}}

/></td><td className="variab"><input
id='myInput'
className="variab"
type="number"
value={varTwelve}
onChange={(e) => {setVarTwelve(e.target.value)}}

/></td></tr><tr><td><input
className="variab"
id='myInputO'
        name="currency-input"
        onKeyDown={keyPressHanlder}
        placeholder={"$16,300"}
        value={varThirteen}
        onChange={(e) => {setVarThirteen(e.target.value)}}
      /></td><td>$13,040</td><td>$10,432</td><td>$8,346</td><td>$6,676</td><td>$5,341</td></tr><tr><td>$18,300</td><td>$15,040</td><td>$12,432</td><td>$10,346</td><td>$8,676</td><td>$7,341</td></tr><tr><td>$20,300</td><td>$17,040</td><td>$14,432</td><td>$12,346</td><td>$10,676</td><td>$9,341</td></tr><tr className="whi">-</tr></td>

            </tr>
{/* <div className='fes'>Fees</div> */}
            <tr>
          <th className='theader'>Fees</th>
          <th className='theaderSM'>SMID</th>
          <th className='theaderSM'>HVY</th>
          <th className='theaderULE'>ULR</th>
        </tr>
        <tr >
        <td className="tdata"><tr><td>Time of Day</td><td>8pm-6am</td></tr><tr><td></td><td>8pm-6am</td></tr><tr><td></td><td>7Am-8pm</td></tr><tr><td>Day of The Week</td></tr><tr><td>SUN, MON, THU, FRI</td></tr><tr><td>SAT, TUE, WED</td></tr><tr><td>International</td></tr> <tr><td>Landing</td></tr><tr><td>Parking</td></tr><tr><td>Catering</td></tr></td>
              <td className="tdata"><tr><td></td><td><input
      className="variab"
      id='myInputO'
              name="currency-input"
              onKeyDown={keyPressHanlder}
              placeholder={"$15,000"}
              value={varFourteen}
              onChange={(e) => {setVarFourteen(e.target.value)}}
            /></td></tr><tr><td></td><td><input
            className="variab"
            id='myInputO'
                    name="currency-input"
                    onKeyDown={keyPressHanlder}
                    placeholder={"$2,000"}
                    value={varFifteen}
                    onChange={(e) => {setVarFifteen(e.target.value)}}
                  /></td></tr><tr></tr><tr><td></td><td>$0</td></tr><tr><td></td><td className="whi">$0</td></tr><tr><td></td><td className="variab">100%</td></tr><tr><td></td><td className="variab">85%</td></tr><tr className="whi"><td className="whi">--------------</td> <td className="variab"><input
                  className="variab"
                  id='myInputO'
                          name="currency-input"
                          onKeyDown={keyPressHanlder}
                          placeholder={"$3,500"}
                          value={varSixteen}
                          onChange={(e) => {setVarSixteen(e.target.value)}}
                        /></td></tr><tr className="whi"><td className="whi">--------------</td> <td className="variab"><input
                        className="variab"
                        id='myInputO'
                                name="currency-input"
                                onKeyDown={keyPressHanlder}
                                placeholder={"$3,500"}
                                value={varSeventeen}
                                onChange={(e) => {setVarSeventeen(e.target.value)}}
                              /></td></tr> <tr className="whi"><td className="whi">--------------</td> <td className="variab"><input
                              className="variab"
                              id='myInputO'
                                      name="currency-input"
                                      onKeyDown={keyPressHanlder}
                                      placeholder={"$3,500"}
                                      value={varEighteen}
                                      onChange={(e) => {setVarEighteen(e.target.value)}}
                                    /></td></tr> <tr className="whi"><td className="whi">--------------</td> <td className="variab"><input
                                    className="variab"
                                    id='myInputO'
                                            name="currency-input"
                                            onKeyDown={keyPressHanlder}
                                            placeholder={"$3,500"}
                                            value={varNinteen}
                                            onChange={(e) => {setVarNinteen(e.target.value)}}
                                          /></td></tr></td>
              <td className="tdata"><tr><td></td></tr><tr><td></td><td><input
            className="variab"
            id='myInputO'
                    name="currency-input"
                    onKeyDown={keyPressHanlder}
                    placeholder={"$2,000"}
                    value={varTwenty}
                    onChange={(e) => {setVarTwenty(e.target.value)}}
                  /></td></tr><tr><td></td><td><input
            className="variab"
            id='myInputO'
                    name="currency-input"
                    onKeyDown={keyPressHanlder}
                    placeholder={"$2,000"}
                    value={varTwentyOne}
                    onChange={(e) => {setVarTwentyOne(e.target.value)}}
                  /></td></tr><tr></tr><tr><td></td><td>$0</td></tr><tr><td></td><td className="whi">$0</td></tr><tr><td></td><td className="variab">100%</td></tr><tr><td></td><td className="variab">85%</td></tr><tr><td className="whi">------------------</td><td className="variab"><input
                  className="variab"
                  id='myInputO'
                          name="currency-input"
                          onKeyDown={keyPressHanlder}
                          placeholder={"$3,500"}
                          value={varTwentyTwo}
                          onChange={(e) => {setVarTwentyTwo(e.target.value)}}
                        /></td></tr><tr><td className="whi">------------------</td><td className="variab"><input
                        className="variab"
                        id='myInputO'
                                name="currency-input"
                                onKeyDown={keyPressHanlder}
                                placeholder={"$3,500"}
                                value={varTwentyThree}
                                onChange={(e) => {setVarTwentyThree(e.target.value)}}
                              /></td></tr><tr><td className="whi">------------------</td><td className="variab"><input
                              className="variab"
                              id='myInputO'
                                      name="currency-input"
                                      onKeyDown={keyPressHanlder}
                                      placeholder={"$3,500"}
                                      value={varTwentyFour}
                                      onChange={(e) => {setVarTwentyFour(e.target.value)}}
                                    /></td></tr><tr><td className="whi">------------------</td><td className="variab"><input
                                    className="variab"
                                    id='myInputO'
                                            name="currency-input"
                                            onKeyDown={keyPressHanlder}
                                            placeholder={"$3,500"}
                                            value={varTwentyFive}
                                            onChange={(e) => {setVarTwentyFive(e.target.value)}}
                                          /></td></tr></td>
              <td className="tdata"><tr><td></td></tr><tr><td></td><td><input
      className="variab"
      id='myInputO'
              name="currency-input"
              onKeyDown={keyPressHanlder}
              placeholder={"$15,000"}
              value={varTwentySix}
              onChange={(e) => {setVarTwentySix(e.target.value)}}
            /></td></tr><tr><td></td><td><input
            className="variab"
            id='myInputO'
                    name="currency-input"
                    onKeyDown={keyPressHanlder}
                    placeholder={"$2,000"}
                    value={varTwentySeven}
                    onChange={(e) => {setVarTwentySeven(e.target.value)}}
                  /></td></tr><tr></tr><tr><td></td><td>$0</td></tr><tr><td></td><td className="whi">$0</td></tr><tr><td></td><td className="variab">100%</td></tr><tr><td></td><td className="variab">85%</td></tr><tr><td className="whi">--------------------------------</td><td className="variab"><input
                  className="variab"
                  id='myInputO'
                          name="currency-input"
                          onKeyDown={keyPressHanlder}
                          placeholder={"$3,500"}
                          value={varTwentyEight}
                          onChange={(e) => {setVarTwentyEight(e.target.value)}}
                        /></td></tr> <tr><td className="whi">--------------------------------</td><td className="variab"><input
                        className="variab"
                        id='myInputO'
                                name="currency-input"
                                onKeyDown={keyPressHanlder}
                                placeholder={"$3,500"}
                                value={varTwentyNine}
                                onChange={(e) => {setVarTwentyNine(e.target.value)}}
                              /></td></tr> <tr><td className="whi">--------------------------------</td><td className="variab"><input
                              className="variab"
                              id='myInputO'
                                      name="currency-input"
                                      onKeyDown={keyPressHanlder}
                                      placeholder={"$3,500"}
                                      value={varThirty}
                                      onChange={(e) => {setVarThirty(e.target.value)}}
                                    /></td></tr> <tr><td className="whi">--------------------------------</td><td className="variab"><input
                                    className="variab"
                                    id='myInputO'
                                            name="currency-input"
                                            onKeyDown={keyPressHanlder}
                                            placeholder={"$3,500"}
                                            value={varThirtyOne}
                                            onChange={(e) => {setVarThirtyOne(e.target.value)}}
                                          /></td></tr></td>

            </tr>

            <tr>
          <th className='theader'>Demand / Capacity
</th>
          <th className='theaderSM'>SMID</th>
          <th className='theaderSM'>HVY</th>
          <th className='theaderULE'>ULR</th>
        </tr>
        <tr >
        <td className="tdata"><tr><td>Peak Days</td> <td>P0</td></tr><tr><td></td><td>P1</td></tr><tr><td></td><td>P2</td></tr><tr><td></td><td>P3</td></tr><tr><td></td><td>P4</td></tr><tr><td>Demand / Directional Demand</td><td></td></tr><tr><td></td><td>D0</td></tr><tr><td></td><td>D1</td></tr><tr><td></td><td>D2</td></tr><tr><td></td><td>D3</td></tr><tr><td></td><td>D4</td></tr></td>
              <td className="tdata"><tr><td>Decline</td> </tr><tr><td className="variab"><input
className="variab"
id='myInputO'
        name="currency-input"
        onKeyDown={keyPressHanlder}
        placeholder={"$12,590"}
        value={varThirtyTwo}
        onChange={(e) => {setVarThirtyTwo(e.target.value)}}
      /></td></tr><tr><td className="variab"><input
      className="variab"
      id='myInputO'
              name="currency-input"
              onKeyDown={keyPressHanlder}
              placeholder={"$10,555"}
              value={varThirtyThree}
              onChange={(e) => {setVarThirtyThree(e.target.value)}}
            /></td></tr><tr><td className="variab"><input
            className="variab"
            id='myInputO'
                    name="currency-input"
                    onKeyDown={keyPressHanlder}
                    placeholder={"$10,000"}
                    value={varThirtyFour}
                    onChange={(e) => {setVarThirtyFour(e.target.value)}}
                  /></td></tr><tr><td className="variab"><input
                  className="variab"
                  id='myInputO'
                          name="currency-input"
                          onKeyDown={keyPressHanlder}
                          placeholder={"$3,000"}
                          value={varThirtyFive}
                          onChange={(e) => {setVarThirtyFive(e.target.value)}}
                        /></td></tr><tr><td className="whi">Demand / Directional </td></tr><tr><td>Decline</td><td></td></tr><tr><td>-5000</td><td></td></tr><tr><td><input
                  className="variab"
                  id='myInputO'
                          name="currency-input"
                          onKeyDown={keyPressHanlder}
                          placeholder={"$10,000"}
                          value={varThirtySix}
                          onChange={(e) => {setVarThirtySix(e.target.value)}}
                        /></td><td className="whi">2</td></tr><tr><td><input
                        className="variab"
                        id='myInputO'
                                name="currency-input"
                                onKeyDown={keyPressHanlder}
                                placeholder={"$10,000"}
                                value={varThirtySeven}
                                onChange={(e) => {setVarThirtySeven(e.target.value)}}
                              /></td><td className="whi">D3</td></tr><tr><td><input
                              className="variab"
                              id='myInputO'
                                      name="currency-input"
                                      onKeyDown={keyPressHanlder}
                                      placeholder={"$3,000"}
                                      value={varThirtyEigh}
                                      onChange={(e) => {setVarThirtyEigh(e.target.value)}}
                                    /></td><td className="whi">D4</td></tr></td>
              <td className="tdata"><tr><td>Decline</td> </tr><tr><td className="variab"><input
className="variab"
id='myInputO'
        name="currency-input"
        onKeyDown={keyPressHanlder}
        placeholder={"$12,590"}
        value={varThirtyNine}
        onChange={(e) => {setVarThirtyNine(e.target.value)}}
      /></td></tr><tr><td className="variab"><input
      className="variab"
      id='myInputO'
              name="currency-input"
              onKeyDown={keyPressHanlder}
              placeholder={"$10,555"}
              value={varFourty}
              onChange={(e) => {setVarFourty(e.target.value)}}
            /></td></tr><tr><td className="variab"><input
            className="variab"
            id='myInputO'
                    name="currency-input"
                    onKeyDown={keyPressHanlder}
                    placeholder={"$10,000"}
                    value={varFourtyOne}
                    onChange={(e) => {setVarFourtyOne(e.target.value)}}
                  /></td></tr><tr><td className="variab"><input
                  className="variab"
                  id='myInputO'
                          name="currency-input"
                          onKeyDown={keyPressHanlder}
                          placeholder={"$3,000"}
                          value={varFourtyTwo}
                          onChange={(e) => {setVarFourtyTwo(e.target.value)}}
                        /></td></tr><tr><td className="whi">Demand / Directional Demand</td></tr><tr><td>Decline</td><td></td></tr><tr><td>-5000</td><td></td></tr><tr><td><input
                  className="variab"
                  id='myInputO'
                          name="currency-input"
                          onKeyDown={keyPressHanlder}
                          placeholder={"$10,000"}
                          value={varFourtyThree}
                          onChange={(e) => {setVarFourtyThree(e.target.value)}}
                        /></td><td className="whi">2</td></tr><tr><td><input
                        className="variab"
                        id='myInputO'
                                name="currency-input"
                                onKeyDown={keyPressHanlder}
                                placeholder={"$10,000"}
                                value={varFourtyFour}
                                onChange={(e) => {setVarFourtyFour(e.target.value)}}
                              /></td><td className="whi">D3</td></tr><tr><td><input
                              className="variab"
                              id='myInputO'
                                      name="currency-input"
                                      onKeyDown={keyPressHanlder}
                                      placeholder={"$3,000"}
                                      value={varFourtyFive}
                                      onChange={(e) => {setVarFourtyFive(e.target.value)}}
                                    /></td><td className="whi">D4</td></tr></td>
              <td className="tdata"><tr><td>Decline</td> </tr><tr><td className="variab"><input
className="variab"
id='myInputO'
        name="currency-input"
        onKeyDown={keyPressHanlder}
        placeholder={"$12,590"}
        value={varFourtySix}
        onChange={(e) => {setVarFourtySix(e.target.value)}}
      /></td></tr><tr><td className="variab"><input
      className="variab"
      id='myInputO'
              name="currency-input"
              onKeyDown={keyPressHanlder}
              placeholder={"$10,555"}
              value={varFourtySeven}
              onChange={(e) => {setVarFourtySeven(e.target.value)}}
            /></td></tr><tr><td className="variab"><input
            className="variab"
            id='myInputO'
                    name="currency-input"
                    onKeyDown={keyPressHanlder}
                    placeholder={"$10,000"}
                    value={varFourtyEight}
                    onChange={(e) => {setVarFourtyEight(e.target.value)}}
                  /></td></tr><tr><td className="variab"><input
                  className="variab"
                  id='myInputO'
                          name="currency-input"
                          onKeyDown={keyPressHanlder}
                          placeholder={"$3,000"}
                          value={varFourtyNine}
                          onChange={(e) => {setVarFourtyNine(e.target.value)}}
                        /></td></tr><tr><td className="whi">Demand / Directional Demand</td></tr><tr><td>Decline</td><td></td></tr><tr><td>-5000</td><td></td></tr><tr><td><input
                  className="variab"
                  id='myInputO'
                          name="currency-input"
                          onKeyDown={keyPressHanlder}
                          placeholder={"$10,000"}
                          value={varFifty}
                          onChange={(e) => {setVarFifty(e.target.value)}}
                        /></td><td className="whi">2</td></tr><tr><td><input
                        className="variab"
                        id='myInputO'
                                name="currency-input"
                                onKeyDown={keyPressHanlder}
                                placeholder={"$10,000"}
                                value={varFiftyOne}
                                onChange={(e) => {setVarFiftyOne(e.target.value)}}
                              /></td><td className="whi">D3</td></tr><tr><td><input
                              className="variab"
                              id='myInputO'
                                      name="currency-input"
                                      onKeyDown={keyPressHanlder}
                                      placeholder={"$3,000"}
                                      value={varFiftyTwo}
                                      onChange={(e) => {setVarFiftyTwo(e.target.value)}}
                                    /></td><td className="whi">D4</td></tr></td>

            </tr>


            <tr>
          <th className='theader'>Expensive Airports
</th>
          <th className='theaderSM'>SMID</th>
          <th className='theaderSM'>HVY</th>
          <th className='theaderSM'>ULR</th>
        </tr>
        <tr >
        <td className="tdata"><tr><td>BOS</td></tr><tr><td>JFK</td></tr><tr><td>ASE</td></tr></td>
              <td className="tdata"><tr><td className="whi">$12,590</td></tr><tr><td className="whi">10,555</td></tr><tr><td className="variab"><input
                  className="variab"
                  id='myInputO'
                          name="currency-input"
                          onKeyDown={keyPressHanlder}
                          placeholder={"$2,500"}
                          value={varFiftyThree}
                          onChange={(e) => {setVarFiftyThree(e.target.value)}}
                        /></td></tr><tr><td className="variab"><input
                        className="variab"
                        id='myInputO'
                                name="currency-input"
                                onKeyDown={keyPressHanlder}
                                placeholder={"$2,000"}
                                value={varFiftyFour}
                                onChange={(e) => {setVarFiftyFour(e.target.value)}}
                              /></td></tr><tr><td className="variab"><input
                        className="variab"
                        id='myInputO'
                                name="currency-input"
                                onKeyDown={keyPressHanlder}
                                placeholder={"$2,000"}
                                value={varFiftyFive}
                                onChange={(e) => {setVarFiftyFive(e.target.value)}}
                              /></td><td></td></tr><tr><td></td><td className="whi">2</td></tr><tr><td></td><td className="whi">D4</td></tr></td>
              <td className="tdata"><tr><td className="whi">$12,590</td></tr><tr><td className="whi">10,555</td></tr><tr><td className="variab"><input
                  className="variab"
                  id='myInputO'
                          name="currency-input"
                          onKeyDown={keyPressHanlder}
                          placeholder={"$2,500"}
                          value={varFiftySix}
                          onChange={(e) => {setVarFiftySix(e.target.value)}}
                        /></td></tr><tr><td className="variab"><input
                        className="variab"
                        id='myInputO'
                                name="currency-input"
                                onKeyDown={keyPressHanlder}
                                placeholder={"$2,000"}
                                value={varFiftySeven}
                                onChange={(e) => {setVarFiftySeven(e.target.value)}}
                              /></td></tr><tr><td className="variab"><input
                        className="variab"
                        id='myInputO'
                                name="currency-input"
                                onKeyDown={keyPressHanlder}
                                placeholder={"$2,000"}
                                value={varFiftyEight}
                                onChange={(e) => {setVarFiftyEight(e.target.value)}}
                              /></td><td></td></tr><tr><td></td><td className="whi">2</td></tr><tr><td></td><td className="whi">D4</td></tr></td>
              <td className="tdata"><tr><td className="whi">$12,590</td></tr><tr><td className="whi">10,555</td></tr><tr><td className="variab"><input
                  className="variab"
                  id='myInputO'
                          name="currency-input"
                          onKeyDown={keyPressHanlder}
                          placeholder={"$2,500"}
                          value={value !== "" ? currentcyFormat.format(value) : ""}
                          onChange={(e) => {}}
                        /></td></tr><tr><td className="variab"><input
                        className="variab"
                        id='myInputO'
                                name="currency-input"
                                onKeyDown={keyPressHanlder}
                                placeholder={"$2,000"}
                                value={value !== "" ? currentcyFormat.format(value) : ""}
                                onChange={(e) => {}}
                              /></td></tr><tr><td className="variab"><input
                              className="variab"
                              id='myInputO'
                                      name="currency-input"
                                      onKeyDown={keyPressHanlder}
                                      placeholder={"$2,000"}
                                      value={value !== "" ? currentcyFormat.format(value) : ""}
                                      onChange={(e) => {}}
                                    /></td><td></td></tr><tr><td></td><td className="whi">2</td></tr><tr><td></td><td className="whi">D4</td></tr></td>

            </tr>
            <tr>
          <th className='theader'>Alternate Airports
</th>
          <th className='tdataSM'></th>

        </tr>
        <tr >
        <td className="tdata"><tr><td>BOS</td></tr><tr><td>JFK</td></tr><tr><td>ASE</td></tr></td>
              <td className="tdata"><tr><td className="whi">$12,590</td></tr><tr><td className="whi">10,555</td></tr><tr><td className="variab">MIA, FLL, PBI</td></tr><tr><td className="variab">JFK, EWR</td></tr><tr><td className="variab">LAX, BUR</td><td></td></tr><tr><td></td><td className="whi">2</td></tr><tr><td></td><td className="whi">D4</td></tr></td>


            </tr>
            <tr>
          <th className='theader'>TIME OF YEAR
</th>
          <th className='tdataSM'></th>

        </tr>
        <tr >
        <td className="tdata"><tr><td>12 Months Out</td></tr></td>
              <td className="tdata"><tr><td className="variab"></td></tr><tr><td className="whi">10,555</td></tr><tr><td className="whi">MIA, FLL, PBI</td></tr><tr><td className="variab"><tr><td className="variab"><input
                        className="variab"
                        id='myInputO'
                                name="currency-input"
                                onKeyDown={keyPressHanlder}
                                placeholder={"$4,000"}
                                value={value !== "" ? currentcyFormat.format(value) : ""}
                                onChange={(e) => {}}
                              /></td></tr></td></tr><tr><td className="whi">LAX, BUR</td><td></td></tr><tr><td></td><td className="whi">2</td></tr><tr><td></td><td className="whi">D4</td></tr></td>


            </tr>
      </table>
      <Button style={{
          borderRadius: 10,
          backgroundColor: "black",
          marginBottom: 20,
          }}
          onClick={() => {
            setPriceState(priceReducer?.allPrices)
              }}

          type="submit" variant="contained">Save Prices
        </Button>
      </form>
      </div>

    </>
  );
}

export default Pricing;
