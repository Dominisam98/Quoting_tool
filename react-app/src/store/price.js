const ALL_PRICES = "price/ALL_PRICES"
const ADD_PRICE = "price/ADD_PRICE"
const ONE_PRICE = "price/ONE_PRICE"
const DELETE_PRICE = "post/DELETE_PRICE";

const allPrices = (payload) => ({
    type: ALL_PRICES,
    payload,
})

const addPrice = (payload) => ({
    type: ADD_PRICE,
    payload
})

const singlePrice = (payload) => ({
  type: ONE_PRICE,
  payload,
});

const deletePrice = (payload) => ({
  type: DELETE_PRICE,
  payload,
});



//GET ALL PRICES
export const thunk_getAllPrices = () => async (dispatch) => {
  const res = await fetch(`/api/prices/`);

  if (res.ok) {
    const prices = await res.json();
    dispatch(allPrices(prices));
    return prices;
  }
};

//GET ALL PRICES
export const thunk_getAPI = () => async (dispatch) => {
  const res = await fetch(`/api/api/`);

  if (res.ok) {
    const prices = await res.json();
    // dispatch(allSpots(spots));
    return prices;
  }
};


//GET ONE PRICE
export const thunk_getOnePrice = (id) => async (dispatch) => {
  const res = await fetch(`/api/prices/${id}`);

  if (res.ok) {
    const price = await res.json();
    dispatch(singlePrice(price));
    return price;
  }
};

//ADD A SPOT
export const thunk_addPrice =
  ({ userId, varOne, varTwo, varThree, varFour, varFive, varSix, varSeven, varEight, varNine, varTen, varEleven, varTwelve, varThirteen, varFourteen, varFifteen, varSixteen, varSeventeen, varEighteen, varNinteen, varTwenty, varTwentyOne, varTwentyTwo, varTwentyThree, varTwentyFour, varTwentyFive, varTwentySix, varTwentySeven, varTwentyEight, varTwentyNine, varThirty, varThirtyOne, varThirtyTwo, varThirtyThree, varThirtyFour, varThirtyFive, varThirtySix, varThirtySeven, varThirtyEigh, varThirtyNine, varFourty, varFourtyOne, varFourtyTwo, varFourtyThree, varFourtyFour, varFourtyFive, varFourtySix, varFourtySeven, varFourtyEight, varFourtyNine, varFifty, varFiftyOne, varFiftyTwo, varFiftyThree, varFiftyFour, varFiftyFive, varFiftySix, varFiftySeven, varFiftyEight,}) =>
  async (dispatch) => {
    const res = await fetch("/api/prices/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        varOne,
        varTwo,

        varThree,
        varFour,

        varFive,
        varSix,
        varSeven, varEight, varNine, varTen, varEleven, varTwelve, varThirteen, varFourteen, varFifteen, varSixteen, varSeventeen, varEighteen, varNinteen, varTwenty, varTwentyOne, varTwentyTwo, varTwentyThree, varTwentyFour, varTwentyFive, varTwentySix, varTwentySeven, varTwentyEight, varTwentyNine, varThirty, varThirtyOne, varThirtyTwo, varThirtyThree, varThirtyFour, varThirtyFive, varThirtySix, varThirtySeven, varThirtyEigh, varThirtyNine, varFourty, varFourtyOne, varFourtyTwo, varFourtyThree, varFourtyFour, varFourtyFive, varFourtySix, varFourtySeven, varFourtyEight, varFourtyNine, varFifty, varFiftyOne, varFiftyTwo, varFiftyThree, varFiftyFour, varFiftyFive, varFiftySix, varFiftySeven, varFiftyEight,
      }),
    });

    if (res.ok) {
      const price = await res.json();
      dispatch(addPrice(price));
      return price;
    }
  };

  //UPDATE PRICE
  export const thunk_updatePrice =
    ({ id, userId,  varOne, varTwo, varThree, varFour, varFive, varSix, varSeven, varEight, varNine, varTen, varEleven, varTweleve,  varThirteen, varFourteen, varFifteen, varSixteen, varSeventeen, varEighteen, varNinteen, varTwenty, varTwentyOne, varTwentyTwo, varTwentyThree, varTwentyFour, varTwentyFive, varTwentySix, varTwentySeven, varTwentyEight, varTwentyNine, varThirty, varThirtyOne, varThirtyTwo, varThirtyThree, varThirtyFour, varThirtyFive, varThirtySix, varThirtySeven, varThirtyEigh, varThirtyNine, varFourty, varFourtyOne, varFourtyTwo, varFourtyThree, varFourtyFour, varFourtyFive, varFourtySix, varFourtySeven, varFourtyEight, varFourtyNine, varFifty, varFiftyOne, varFiftyTwo, varFiftyThree, varFiftyFour, }) =>
    async (dispatch) => {

      const res = await fetch(`/api/prices/${id}/edit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          varOne, varTwo, varThree, varFour, varFive, varSix, varSeven, varEight, varNine, varTen, varEleven, varTweleve,  varThirteen, varFourteen, varFifteen, varSixteen, varSeventeen, varEighteen, varNinteen, varTwenty, varTwentyOne, varTwentyTwo, varTwentyThree, varTwentyFour, varTwentyFive, varTwentySix, varTwentySeven, varTwentyEight, varTwentyNine, varThirty, varThirtyOne, varThirtyTwo, varThirtyThree, varThirtyFour, varThirtyFive, varThirtySix, varThirtySeven, varThirtyEigh, varThirtyNine, varFourty, varFourtyOne, varFourtyTwo, varFourtyThree, varFourtyFour, varFourtyFive, varFourtySix, varFourtySeven, varFourtyEight, varFourtyNine, varFifty, varFiftyOne, varFiftyTwo, varFiftyThree, varFiftyFour,

        }),
      });

      if (res.ok) {
        const price = await res.json();
        dispatch(addPrice(price));
        return price;
      }
    };

  // DELETE PRICE
  export const thunk_deletePrice = ({ id }) => async (dispatch) => {
    const res = await fetch(`/api/prices/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id
      })
    });

    if (res.ok) {
      const deletedPrice = await res.json();
      dispatch(deletePrice(deletedPrice));
      return "Deletion successful";
    }
  };



//SPOT REDUCER
const priceReducer = (state = {}, action) => {
  switch (action.type) {
    case ALL_PRICES: {
      const newState = { ...state };
      newState["allPrices"] = action.payload;
      return newState;
    }
    case ONE_PRICE: {
      const newState = { ...state };
      newState["onePrice"] = action.payload;
      return newState;
    }
    case DELETE_PRICE: {
      const newState = { ...state };
      delete newState[action.payload];
      return newState;
    }
    default:
      return state;
  }
};

export default priceReducer;
