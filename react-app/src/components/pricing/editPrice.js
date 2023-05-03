import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";
import { useScrollTrigger } from "@mui/material";
import './pricing.css'
import * as priceStore from "../../store/price";
const currentcyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: 5
  });




function EditPricing() {
    const priceReducer = useSelector((state) => state.priceReducer);
    let prices = priceReducer?.allPrices
    const [priceState, setPriceState] = useState(prices);
    const dispatch = useDispatch();


    if(!prices){
        dispatch(priceStore.thunk_getAllPrices());
      }

      useEffect(() => {
        dispatch(priceStore.thunk_getAllPrices());
        setPriceState(priceReducer?.allSPrices)
        console.log(prices)
      }, [dispatch]);










    const [price, setPrice] = useState(80 );
    const [varOne, setVarOne] = useState(80 );
    const [varTwo, setVarTwo] = useState(80 );
    const [varThree, setVarThree] = useState(80 );
    const [varFour, setVarFour] = useState(80 );
    const [varFive, setVarFive] = useState(80 );
    const [varSix, setVarSix] = useState(80 );
    const [varSeven, setVarSeven] = useState(80 );
    const [varEight, setVarEight] = useState(80 );
    const [varNine, setVarNine] = useState(80 );
    const [varTen, setVarTen] = useState(12145 );
    const [varEleven, setVarEleven] = useState(80 );
    const [varTwelve, setVarTweleve] = useState(80 );
    const [varThirteen, setVarThirteen] = useState(80 );
    const [varFourteen, setVarFourteen] = useState(80 );
    const [varFifteen, setVarFifteen] = useState(80 );
    const [varSixteen, setVarSixteen] = useState(80 );
    const [varSeventeen, setVarSeventeen] = useState(80 );
    const [varEighteen, setVarEighteen] = useState(80 );
    const [varNinteen, setVarNinteen] = useState(80 );
    const [varTwenty, setVarTwenty] = useState(80 );
    const [varTwentyOne, setVarTwentyOne] = useState(80 );
    const [varTwentyTwo, setVarTwentyTwo] = useState(80 );
    const [varTwentyThree, setVarTwentyThree] = useState(80 );
    const [varTwentyFour, setVarTwentyFour] = useState(80 );
    const [varTwentyFive, setVarTwentyFive] = useState(80 );
    const [varTwentySix, setVarTwentySix] = useState(80 );
    const [varTwentySeven, setVarTwentySeven] = useState(80 );
    const [varTwentyEight, setVarTwentyEight] = useState(80 );
    const [varTwentyNine, setVarTwentyNine] = useState(80 );
    const [varThirty, setVarThirty] = useState(80 );
    const [varThirtyOne, setVarThirtyOne] = useState(80 );
    const [varThirtyTwo, setVarThirtyTwo] = useState(80 );
    const [varThirtyThree, setVarThirtyThree] = useState(80 );
    const [varThirtyFour, setVarThirtyFour] = useState(80 );
    const [varThirtyFive, setVarThirtyFive] = useState(80 );
    const [varThirtySix, setVarThirtySix] = useState(80 );
    const [varThirtySeven, setVarThirtySeven] = useState(80 );
    const [varThirtyEight, setVarThirtyEight] = useState(80 );
    const [varThirtyNine, setVarThirtyNine] = useState(80 );
    const [varFourty, setVarFourty] = useState(80 );
    const [varFourtyOne, setVarFourtyOne] = useState(80 );
    const [varFourtyTwo, setVarFourtyTwo] = useState(80 );
    const [varFourtyThree, setVarFourtyThree] = useState(80 );
    const [varFourtyFour, setVarFourtyFour] = useState(80 );
    const [varFourtyFive, setVarFourtyFive] = useState(80 );
    const [varFourtySix, setVarFourtySix] = useState(80 );
    const [varFourtySeven, setVarFourtySeven] = useState(80 );
    const [varFourtyEight, setVarFourtyEight] = useState(80 );
    const [varFourtyNine, setVarFourtyNine] = useState(80 );
    const [varFifty, setVarFifty] = useState(80 );
    const [varFiftyOne, setVarFiftyOne] = useState(80 );
    const [varFiftyTwo, setVarFiftyTwo] = useState(80 );
    const [varFiftyThree, setVarFiftyThree] = useState(80 );
    const [varFiftyFour, setVarFiftyFour] = useState(80 );


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

      <table id="tabl">
        <tr>
          <th className='theader'>Base Fare</th>
          <th className='theaderSM'>SMID<tr><td className="tdataborder"></td><td className="tdataSM">0-2</td><td className="tdataborder"></td><td className="tdataSM">0-2</td><td className="tdataborder"></td><td className="tdataSM">4+</td></tr></th>
          <th className='theaderHV'>HVY<tr><td className="tdataborder"></td><td className="tdataSM">0-2</td><td className="tdataborder"></td><td className="tdataSM">2-4</td><td className="tdataborder"></td><td className="tdataSM">4-6</td><td className="tdataborder"></td><td className="tdataSM">6+</td></tr></th>
          <th className='theaderUL'>ULR <tr><td className="tdataborder"></td><td className="tdataSM">0-2</td><td className="tdataborder"></td><td className="tdataSM">2-4</td><td className="tdataborder"></td><td className="tdataSM">4-6</td><td className="tdataborder"></td><td className="tdataSM">6+</td><td className="tdataborder"></td><td className="tdataSM">7+</td><td className="tdataborder"></td><td className="tdataSM">6+</td></tr></th>
        </tr>

            <tr >
            <td className="tdata"><tr><td>Routing</td><td></td></tr><tr><td></td><td>BTB</td></tr><tr><td></td><td>BTNB</td></tr><tr><td></td><td>NBTNB</td></tr><td></td></td>
              <td className="tdata"><tr><td></td><td className="variab"> <input
id='myInput'
className="variab"
type="number"
value={price}
onChange={(e) => {setPrice(e.target.value)}}

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
        placeholder={"$12,145"}
        value={value !== "" ? currentcyFormat.format(value) : ""}
        onChange={(e) => {setVarTen(value.toLocaleString())}}
      /></td><td>$9,716</td><td>$7,713</td></tr><tr><td>$14,145</td><td>$11,716</td><td>$9,773</td></tr><tr><td>$16,145</td><td>$13,716</td><td>$11,773</td></tr><tr className="whi">-</tr></td>
              <td className="tdata"><tr><td></td><td className="variab"><input
id='myInput'
className="variab"
type="number"
value={price}
onChange={(e) => {setPrice(e.target.value)}}

/></td><td className="variab"><input
id='myInput'
className="variab"
type="number"
value={price}
onChange={(e) => {setPrice(e.target.value)}}

/></td><td className="variab"><input
id='myInput'
className="variab"
type="number"
value={price}
onChange={(e) => {setPrice(e.target.value)}}

/></td></tr><tr><td className="variab"><input
className="variab"
id='myInputO'
        name="currency-input"
        onKeyDown={keyPressHanlder}
        placeholder={"$14,200"}
        value={value !== "" ? currentcyFormat.format(value) : ""}
        onChange={(e) => {setVarTen(value.toLocaleString())}}
      /></td><td>$11,360</td><td>$9,088</td><td>$7,270</td></tr><tr><td>$16,200</td><td>$13,360</td><td>$11,088</td><td>$9,270</td></tr><tr><td>$18,200</td><td>$15,360</td><td>$13,088</td><td>$11,270</td></tr><tr className="whi">-</tr></td>
              <td className="tdata"><tr><td></td><td className="variab"><input
id='myInput'
className="variab"
type="number"
value={price}
onChange={(e) => {setPrice(e.target.value)}}

/></td><td className="variab"><input
id='myInput'
className="variab"
type="number"
value={price}
onChange={(e) => {setPrice(e.target.value)}}

/></td><td className="variab"><input
id='myInput'
className="variab"
type="number"
value={price}
onChange={(e) => {setPrice(e.target.value)}}

/></td><td className="variab"><input
id='myInput'
className="variab"
type="number"
value={price}
onChange={(e) => {setPrice(e.target.value)}}

/></td><td className="variab"><input
id='myInput'
className="variab"
type="number"
value={price}
onChange={(e) => {setPrice(e.target.value)}}

/></td></tr><tr><td><input
className="variab"
id='myInputO'
        name="currency-input"
        onKeyDown={keyPressHanlder}
        placeholder={"$16,300"}
        value={value !== "" ? currentcyFormat.format(value) : ""}
        onChange={(e) => {setVarTen(value.toLocaleString())}}
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
              value={value !== "" ? currentcyFormat.format(value) : ""}
              onChange={(e) => {setVarTen(value.toLocaleString())}}
            /></td></tr><tr><td></td><td><input
            className="variab"
            id='myInputO'
                    name="currency-input"
                    onKeyDown={keyPressHanlder}
                    placeholder={"$2,000"}
                    value={value !== "" ? currentcyFormat.format(value) : ""}
                    onChange={(e) => {setVarTen(value.toLocaleString())}}
                  /></td></tr><tr></tr><tr><td></td><td>$0</td></tr><tr><td></td><td className="variab">100%</td></tr><tr><td></td><td className="variab">85%</td></tr><tr className="whi"><td className="whi">--------------</td> <td className="variab"><input
                  className="variab"
                  id='myInputO'
                          name="currency-input"
                          onKeyDown={keyPressHanlder}
                          placeholder={"$3,500"}
                          value={value !== "" ? currentcyFormat.format(value) : ""}
                          onChange={(e) => {setVarTen(value.toLocaleString())}}
                        /></td></tr><tr className="whi"><td className="whi">--------------</td> <td className="variab"><input
                        className="variab"
                        id='myInputO'
                                name="currency-input"
                                onKeyDown={keyPressHanlder}
                                placeholder={"$3,500"}
                                value={value !== "" ? currentcyFormat.format(value) : ""}
                                onChange={(e) => {setVarTen(value.toLocaleString())}}
                              /></td></tr> <tr className="whi"><td className="whi">--------------</td> <td className="variab"><input
                              className="variab"
                              id='myInputO'
                                      name="currency-input"
                                      onKeyDown={keyPressHanlder}
                                      placeholder={"$3,500"}
                                      value={value !== "" ? currentcyFormat.format(value) : ""}
                                      onChange={(e) => {setVarTen(value.toLocaleString())}}
                                    /></td></tr> <tr className="whi"><td className="whi">--------------</td> <td className="variab"><input
                                    className="variab"
                                    id='myInputO'
                                            name="currency-input"
                                            onKeyDown={keyPressHanlder}
                                            placeholder={"$3,500"}
                                            value={value !== "" ? currentcyFormat.format(value) : ""}
                                            onChange={(e) => {setVarTen(value.toLocaleString())}}
                                          /></td></tr></td>
              <td className="tdata"><tr><td></td></tr><tr><td></td><td><input
      className="variab"
      id='myInputO'
              name="currency-input"
              onKeyDown={keyPressHanlder}
              placeholder={"$15,000"}
              value={value !== "" ? currentcyFormat.format(value) : ""}
              onChange={(e) => {setVarTen(value.toLocaleString())}}
            /></td></tr><tr><td></td><td><input
            className="variab"
            id='myInputO'
                    name="currency-input"
                    onKeyDown={keyPressHanlder}
                    placeholder={"$2,000"}
                    value={value !== "" ? currentcyFormat.format(value) : ""}
                    onChange={(e) => {setVarTen(value.toLocaleString())}}
                  /></td></tr><tr></tr><tr><td></td><td>$0</td></tr><tr><td></td><td className="variab">100%</td></tr><tr><td></td><td className="variab">85%</td></tr><tr><td className="whi">------------------</td><td className="variab"><input
                  className="variab"
                  id='myInputO'
                          name="currency-input"
                          onKeyDown={keyPressHanlder}
                          placeholder={"$3,500"}
                          value={value !== "" ? currentcyFormat.format(value) : ""}
                          onChange={(e) => {setVarTen(value.toLocaleString())}}
                        /></td></tr><tr><td className="whi">------------------</td><td className="variab"><input
                        className="variab"
                        id='myInputO'
                                name="currency-input"
                                onKeyDown={keyPressHanlder}
                                placeholder={"$3,500"}
                                value={value !== "" ? currentcyFormat.format(value) : ""}
                                onChange={(e) => {setVarTen(value.toLocaleString())}}
                              /></td></tr><tr><td className="whi">------------------</td><td className="variab"><input
                              className="variab"
                              id='myInputO'
                                      name="currency-input"
                                      onKeyDown={keyPressHanlder}
                                      placeholder={"$3,500"}
                                      value={value !== "" ? currentcyFormat.format(value) : ""}
                                      onChange={(e) => {setVarTen(value.toLocaleString())}}
                                    /></td></tr><tr><td className="whi">------------------</td><td className="variab"><input
                                    className="variab"
                                    id='myInputO'
                                            name="currency-input"
                                            onKeyDown={keyPressHanlder}
                                            placeholder={"$3,500"}
                                            value={value !== "" ? currentcyFormat.format(value) : ""}
                                            onChange={(e) => {setVarTen(value.toLocaleString())}}
                                          /></td></tr></td>
              <td className="tdata"><tr><td></td></tr><tr><td></td><td><input
      className="variab"
      id='myInputO'
              name="currency-input"
              onKeyDown={keyPressHanlder}
              placeholder={"$15,000"}
              value={value !== "" ? currentcyFormat.format(value) : ""}
              onChange={(e) => {setVarTen(value.toLocaleString())}}
            /></td></tr><tr><td></td><td><input
            className="variab"
            id='myInputO'
                    name="currency-input"
                    onKeyDown={keyPressHanlder}
                    placeholder={"$2,000"}
                    value={value !== "" ? currentcyFormat.format(value) : ""}
                    onChange={(e) => {setVarTen(value.toLocaleString())}}
                  /></td></tr><tr></tr><tr><td></td><td>$0</td></tr><tr><td></td><td className="variab">100%</td></tr><tr><td></td><td className="variab">85%</td></tr><tr><td className="whi">--------------------------------</td><td className="variab"><input
                  className="variab"
                  id='myInputO'
                          name="currency-input"
                          onKeyDown={keyPressHanlder}
                          placeholder={"$3,500"}
                          value={value !== "" ? currentcyFormat.format(value) : ""}
                          onChange={(e) => {setVarTen(value.toLocaleString())}}
                        /></td></tr> <tr><td className="whi">--------------------------------</td><td className="variab"><input
                        className="variab"
                        id='myInputO'
                                name="currency-input"
                                onKeyDown={keyPressHanlder}
                                placeholder={"$3,500"}
                                value={value !== "" ? currentcyFormat.format(value) : ""}
                                onChange={(e) => {setVarTen(value.toLocaleString())}}
                              /></td></tr> <tr><td className="whi">--------------------------------</td><td className="variab"><input
                              className="variab"
                              id='myInputO'
                                      name="currency-input"
                                      onKeyDown={keyPressHanlder}
                                      placeholder={"$3,500"}
                                      value={value !== "" ? currentcyFormat.format(value) : ""}
                                      onChange={(e) => {setVarTen(value.toLocaleString())}}
                                    /></td></tr> <tr><td className="whi">--------------------------------</td><td className="variab"><input
                                    className="variab"
                                    id='myInputO'
                                            name="currency-input"
                                            onKeyDown={keyPressHanlder}
                                            placeholder={"$3,500"}
                                            value={value !== "" ? currentcyFormat.format(value) : ""}
                                            onChange={(e) => {setVarTen(value.toLocaleString())}}
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
        value={value !== "" ? currentcyFormat.format(value) : ""}
        onChange={(e) => {setVarTen(value.toLocaleString())}}
      /></td></tr><tr><td className="variab"><input
      className="variab"
      id='myInputO'
              name="currency-input"
              onKeyDown={keyPressHanlder}
              placeholder={"$10,555"}
              value={value !== "" ? currentcyFormat.format(value) : ""}
              onChange={(e) => {setVarTen(value.toLocaleString())}}
            /></td></tr><tr><td className="variab"><input
            className="variab"
            id='myInputO'
                    name="currency-input"
                    onKeyDown={keyPressHanlder}
                    placeholder={"$10,000"}
                    value={value !== "" ? currentcyFormat.format(value) : ""}
                    onChange={(e) => {setVarTen(value.toLocaleString())}}
                  /></td></tr><tr><td className="variab"><input
                  className="variab"
                  id='myInputO'
                          name="currency-input"
                          onKeyDown={keyPressHanlder}
                          placeholder={"$3,000"}
                          value={value !== "" ? currentcyFormat.format(value) : ""}
                          onChange={(e) => {setVarTen(value.toLocaleString())}}
                        /></td></tr><tr><td className="whi">Demand / Directional </td></tr><tr><td>Decline</td><td></td></tr><tr><td>-5000</td><td></td></tr><tr><td><input
                  className="variab"
                  id='myInputO'
                          name="currency-input"
                          onKeyDown={keyPressHanlder}
                          placeholder={"$10,000"}
                          value={value !== "" ? currentcyFormat.format(value) : ""}
                          onChange={(e) => {setVarTen(value.toLocaleString())}}
                        /></td><td className="whi">2</td></tr><tr><td><input
                        className="variab"
                        id='myInputO'
                                name="currency-input"
                                onKeyDown={keyPressHanlder}
                                placeholder={"$10,000"}
                                value={value !== "" ? currentcyFormat.format(value) : ""}
                                onChange={(e) => {setVarTen(value.toLocaleString())}}
                              /></td><td className="whi">D3</td></tr><tr><td><input
                              className="variab"
                              id='myInputO'
                                      name="currency-input"
                                      onKeyDown={keyPressHanlder}
                                      placeholder={"$3,000"}
                                      value={value !== "" ? currentcyFormat.format(value) : ""}
                                      onChange={(e) => {setVarTen(value.toLocaleString())}}
                                    /></td><td className="whi">D4</td></tr></td>
              <td className="tdata"><tr><td>Decline</td> </tr><tr><td className="variab"><input
className="variab"
id='myInputO'
        name="currency-input"
        onKeyDown={keyPressHanlder}
        placeholder={"$12,590"}
        value={value !== "" ? currentcyFormat.format(value) : ""}
        onChange={(e) => {setVarTen(value.toLocaleString())}}
      /></td></tr><tr><td className="variab"><input
      className="variab"
      id='myInputO'
              name="currency-input"
              onKeyDown={keyPressHanlder}
              placeholder={"$10,555"}
              value={value !== "" ? currentcyFormat.format(value) : ""}
              onChange={(e) => {setVarTen(value.toLocaleString())}}
            /></td></tr><tr><td className="variab"><input
            className="variab"
            id='myInputO'
                    name="currency-input"
                    onKeyDown={keyPressHanlder}
                    placeholder={"$10,000"}
                    value={value !== "" ? currentcyFormat.format(value) : ""}
                    onChange={(e) => {setVarTen(value.toLocaleString())}}
                  /></td></tr><tr><td className="variab"><input
                  className="variab"
                  id='myInputO'
                          name="currency-input"
                          onKeyDown={keyPressHanlder}
                          placeholder={"$3,000"}
                          value={value !== "" ? currentcyFormat.format(value) : ""}
                          onChange={(e) => {setVarTen(value.toLocaleString())}}
                        /></td></tr><tr><td className="whi">Demand / Directional Demand</td></tr><tr><td>Decline</td><td></td></tr><tr><td>-5000</td><td></td></tr><tr><td><input
                  className="variab"
                  id='myInputO'
                          name="currency-input"
                          onKeyDown={keyPressHanlder}
                          placeholder={"$10,000"}
                          value={value !== "" ? currentcyFormat.format(value) : ""}
                          onChange={(e) => {setVarTen(value.toLocaleString())}}
                        /></td><td className="whi">2</td></tr><tr><td><input
                        className="variab"
                        id='myInputO'
                                name="currency-input"
                                onKeyDown={keyPressHanlder}
                                placeholder={"$10,000"}
                                value={value !== "" ? currentcyFormat.format(value) : ""}
                                onChange={(e) => {setVarTen(value.toLocaleString())}}
                              /></td><td className="whi">D3</td></tr><tr><td><input
                              className="variab"
                              id='myInputO'
                                      name="currency-input"
                                      onKeyDown={keyPressHanlder}
                                      placeholder={"$3,000"}
                                      value={value !== "" ? currentcyFormat.format(value) : ""}
                                      onChange={(e) => {setVarTen(value.toLocaleString())}}
                                    /></td><td className="whi">D4</td></tr></td>
              <td className="tdata"><tr><td>Decline</td> </tr><tr><td className="variab"><input
className="variab"
id='myInputO'
        name="currency-input"
        onKeyDown={keyPressHanlder}
        placeholder={"$12,590"}
        value={value !== "" ? currentcyFormat.format(value) : ""}
        onChange={(e) => {setVarTen(value.toLocaleString())}}
      /></td></tr><tr><td className="variab"><input
      className="variab"
      id='myInputO'
              name="currency-input"
              onKeyDown={keyPressHanlder}
              placeholder={"$10,555"}
              value={value !== "" ? currentcyFormat.format(value) : ""}
              onChange={(e) => {setVarTen(value.toLocaleString())}}
            /></td></tr><tr><td className="variab"><input
            className="variab"
            id='myInputO'
                    name="currency-input"
                    onKeyDown={keyPressHanlder}
                    placeholder={"$10,000"}
                    value={value !== "" ? currentcyFormat.format(value) : ""}
                    onChange={(e) => {setVarTen(value.toLocaleString())}}
                  /></td></tr><tr><td className="variab"><input
                  className="variab"
                  id='myInputO'
                          name="currency-input"
                          onKeyDown={keyPressHanlder}
                          placeholder={"$3,000"}
                          value={value !== "" ? currentcyFormat.format(value) : ""}
                          onChange={(e) => {setVarTen(value.toLocaleString())}}
                        /></td></tr><tr><td className="whi">Demand / Directional Demand</td></tr><tr><td>Decline</td><td></td></tr><tr><td>-5000</td><td></td></tr><tr><td><input
                  className="variab"
                  id='myInputO'
                          name="currency-input"
                          onKeyDown={keyPressHanlder}
                          placeholder={"$10,000"}
                          value={value !== "" ? currentcyFormat.format(value) : ""}
                          onChange={(e) => {setVarTen(value.toLocaleString())}}
                        /></td><td className="whi">2</td></tr><tr><td><input
                        className="variab"
                        id='myInputO'
                                name="currency-input"
                                onKeyDown={keyPressHanlder}
                                placeholder={"$10,000"}
                                value={value !== "" ? currentcyFormat.format(value) : ""}
                                onChange={(e) => {setVarTen(value.toLocaleString())}}
                              /></td><td className="whi">D3</td></tr><tr><td><input
                              className="variab"
                              id='myInputO'
                                      name="currency-input"
                                      onKeyDown={keyPressHanlder}
                                      placeholder={"$3,000"}
                                      value={value !== "" ? currentcyFormat.format(value) : ""}
                                      onChange={(e) => {setVarTen(value.toLocaleString())}}
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
                          value={value !== "" ? currentcyFormat.format(value) : ""}
                          onChange={(e) => {setVarTen(value.toLocaleString())}}
                        /></td></tr><tr><td className="variab"><input
                        className="variab"
                        id='myInputO'
                                name="currency-input"
                                onKeyDown={keyPressHanlder}
                                placeholder={"$2,000"}
                                value={value !== "" ? currentcyFormat.format(value) : ""}
                                onChange={(e) => {setVarTen(value.toLocaleString())}}
                              /></td></tr><tr><td className="variab"><input
                        className="variab"
                        id='myInputO'
                                name="currency-input"
                                onKeyDown={keyPressHanlder}
                                placeholder={"$2,000"}
                                value={value !== "" ? currentcyFormat.format(value) : ""}
                                onChange={(e) => {setVarTen(value.toLocaleString())}}
                              /></td><td></td></tr><tr><td></td><td className="whi">2</td></tr><tr><td></td><td className="whi">D4</td></tr></td>
              <td className="tdata"><tr><td className="whi">$12,590</td></tr><tr><td className="whi">10,555</td></tr><tr><td className="variab"><input
                  className="variab"
                  id='myInputO'
                          name="currency-input"
                          onKeyDown={keyPressHanlder}
                          placeholder={"$2,500"}
                          value={value !== "" ? currentcyFormat.format(value) : ""}
                          onChange={(e) => {setVarTen(value.toLocaleString())}}
                        /></td></tr><tr><td className="variab"><input
                        className="variab"
                        id='myInputO'
                                name="currency-input"
                                onKeyDown={keyPressHanlder}
                                placeholder={"$2,000"}
                                value={value !== "" ? currentcyFormat.format(value) : ""}
                                onChange={(e) => {setVarTen(value.toLocaleString())}}
                              /></td></tr><tr><td className="variab"><input
                        className="variab"
                        id='myInputO'
                                name="currency-input"
                                onKeyDown={keyPressHanlder}
                                placeholder={"$2,000"}
                                value={value !== "" ? currentcyFormat.format(value) : ""}
                                onChange={(e) => {setVarTen(value.toLocaleString())}}
                              /></td><td></td></tr><tr><td></td><td className="whi">2</td></tr><tr><td></td><td className="whi">D4</td></tr></td>
              <td className="tdata"><tr><td className="whi">$12,590</td></tr><tr><td className="whi">10,555</td></tr><tr><td className="variab"><input
                  className="variab"
                  id='myInputO'
                          name="currency-input"
                          onKeyDown={keyPressHanlder}
                          placeholder={"$2,500"}
                          value={value !== "" ? currentcyFormat.format(value) : ""}
                          onChange={(e) => {setVarTen(value.toLocaleString())}}
                        /></td></tr><tr><td className="variab"><input
                        className="variab"
                        id='myInputO'
                                name="currency-input"
                                onKeyDown={keyPressHanlder}
                                placeholder={"$2,000"}
                                value={value !== "" ? currentcyFormat.format(value) : ""}
                                onChange={(e) => {setVarTen(value.toLocaleString())}}
                              /></td></tr><tr><td className="variab"><input
                              className="variab"
                              id='myInputO'
                                      name="currency-input"
                                      onKeyDown={keyPressHanlder}
                                      placeholder={"$2,000"}
                                      value={value !== "" ? currentcyFormat.format(value) : ""}
                                      onChange={(e) => {setVarTen(value.toLocaleString())}}
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
                                onChange={(e) => {setVarTen(value.toLocaleString())}}
                              /></td></tr></td></tr><tr><td className="whi">LAX, BUR</td><td></td></tr><tr><td></td><td className="whi">2</td></tr><tr><td></td><td className="whi">D4</td></tr></td>


            </tr>
      </table>

      </div>

    </>
  );
}

export default EditPricing;
