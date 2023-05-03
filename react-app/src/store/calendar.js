const ALL_CALENDARS = "calendars/ALL_CALENDARS"
const ADD_CALENDAR = "calendars/ADD_CALENDAR"
const ONE_CALENDAR= "spot/ONE_SPOT"
const DELETE_CALENDAR= "post/DELETE_SPOT";

const allCalendars = (payload) => ({
    type: ALL_CALENDARS,
    payload,
})

const addCalendar= (payload) => ({
    type: ADD_CALENDAR,
    payload
})

const singleCalendar= (payload) => ({
  type: ONE_CALENDAR,
  payload,
});

const deleteCalendar= (payload) => ({
  type: DELETE_CALENDAR,
  payload,
});



//GET ALL Calendars
export const thunk_getAllCalendars = () => async (dispatch) => {
  const res = await fetch(`/api/calendars/`);

  if (res.ok) {
    const calendars = await res.json();
    dispatch(allCalendars(calendars));
    return calendars;
  }
};

//GET ALL Calendars
export const thunk_getAPI = () => async (dispatch) => {
  const res = await fetch(`/api/api/`);

  if (res.ok) {
    const calendars = await res.json();
    // dispatch(allCalendars(Calendars));
    return calendars;
  }
};


//GET ONE SPOT
export const thunk_getOneCalendar= (id) => async (dispatch) => {
  const res = await fetch(`/api/calendars/${id}`);

  if (res.ok) {
    const calendar= await res.json();
    dispatch(singleCalendar(calendar));
    return calendar;
  }
};

//ADD A SPOT
export const thunk_addCalendar =
  ({ userId, calOne,
    calTwo,
    calThree,
    calFour,
    calFive,
    calSix,
    calSeven,
    calEight,
    calNine,
    calTen,
    calEleven,
    calTwelve,
    calThirteen,
    calFourteen,
    calFifteen,
    calSixteen,
    calSeventeen,
    calEighteen,
    calNineteen,
    calTwenty,
    calTwentyOne,
    calTwentyTwo,
    calTwentyThree,
    calTwentyFour,
    calTwentyFive,
    calTwentySix,
    calTwentySeven,
    calTwentyEight,
    calTwentyNine,
    calThirty,
    calThirtyOne,
    calThirtyTwo,
    calThirtyThree,
    calThirtyFour,
    calThirtyFive,
    calThirtySix,
    calThirtySeven,
    calThirtyEight,
    calThirtyNine,
    calFourty,
    calFourtyOne,
    calFourtyTwo,
    calFourtyThree,
    calFourtyFour,
    calFourtyFive,
    calFourtySix,
    calFourtySeven,
    calFourtyEight,
    calFourtyNine,
    calFifty,
    calFiftyOne,
    calFiftyTwo,
    calFiftyThree,
    calFiftyFour,
    calFiftyFive,
    calFiftySix,
    calFiftySeven,
    calFiftyEight,
    calFiftyNine,
    calSixty,
    calSixtyOne,
    calSixtyTwo,
    calSixtyThree,
    calSixtyFour,
    calSixtyFive,
    calSixtySix,
    calSixtySeven,
    calSixtyEight,
    calSixtyNine,
    calSeventy,
    calSeventyOne,
    calSeventyTwo,
    calSeventyThree,
    calSeventyFour,
    calSeventyFive,
    calSeventySix,
    calSeventySeven,
    calSeventyEight,
    calSeventyNine,
    calEighty,
    calEightyOne,
    calEightyTwo,
    calEightyThree,
    calEightyFour,
    calEightyFive,
    calEightySix,
    calEightySeven,
    calEightyEight,
    calEightyNine,
    calNinety,
    calNinetyOne,
    calNinetyTwo,
    calNinetyThree,
    calNinetyFour,
    calNinetyFive,
    calNinetySix,
    calNinetySeven,
    calNinetyEight,
    calNinetyNine,
    calOneHundred,
    calOneHundredOne,
    calOneHundredTwo,
    calOneHundredThree,
    calOneHundredFour,
    calOneHundredFive,
    calOneHundredSix,
    calOneHundredSeven,
    calOneHundredEight,
    calOneHundredNine,
    calOneHundredTen,
    calOneHundredEleven,
    calOneHundredTwelve,
    calOneHundredThirteen,
    calOneHundredFourteen,
    calOneHundredFifteen,
    calOneHundredSixteen,
    calOneHundredSeventeen,
    calOneHundredEighteen,
    calOneHundredNineteen,
    calOneHundredTwenty,
    calOneHundredTwentyOne,
    calOneHundredTwentyTwo,
    calOneHundredTwentyThree,
    calOneHundredTwentyFour,
    calOneHundredTwentyFive,
    calOneHundredTwentySix,
    calOneHundredTwentySeven,
    calOneHundredTwentyEight,
    calOneHundredTwentyNine,
    calOneHundredThirty,
    calOneHundredThirtyOne,
    calOneHundredThirtyTwo,
    calOneHundredThirtyThree,
    calOneHundredThirtyFour,
    calOneHundredThirtyFive,
    calOneHundredThirtySix,
    calOneHundredThirtySeven,
    calOneHundredThirtyEight,
    calOneHundredThirtyNine,
    calOneHundredFourty,
    calOneHundredFourtyOne,
    calOneHundredFourtyTwo,
    calOneHundredFourtyThree,
    calOneHundredFourtyFour,
    calOneHundredFourtyFive,
    calOneHundredFourtySix ,
    calOneHundredFourtySeven,
    calOneHundredFourtyEight,
    calOneHundredFourtyNine,
    calOneHundredFifty,
    calOneHundredFiftyOne}) =>
  async (dispatch) => {
    const res = await fetch("/api/calendars/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        calOne,
        calTwo,
        calThree,
        calFour,
        calFive,
        calSix,
        calSeven,
        calEight,
        calNine,
        calTen,
        calEleven,
        calTwelve,
        calThirteen,
        calFourteen,
        calFifteen,
        calSixteen,
        calSeventeen,
        calEighteen,
        calNineteen,
        calTwenty,
        calTwentyOne,
        calTwentyTwo,
        calTwentyThree,
        calTwentyFour,
        calTwentyFive,
        calTwentySix,
        calTwentySeven,
        calTwentyEight,
        calTwentyNine,
        calThirty,
        calThirtyOne,
        calThirtyTwo,
        calThirtyThree,
        calThirtyFour,
        calThirtyFive,
        calThirtySix,
        calThirtySeven,
        calThirtyEight,
        calThirtyNine,
        calFourty,
        calFourtyOne,
        calFourtyTwo,
        calFourtyThree,
        calFourtyFour,
        calFourtyFive,
        calFourtySix,
        calFourtySeven,
        calFourtyEight,
        calFourtyNine,
        calFifty,
        calFiftyOne,
        calFiftyTwo,
        calFiftyThree,
        calFiftyFour,
        calFiftyFive,
        calFiftySix,
        calFiftySeven,
        calFiftyEight,
        calFiftyNine,
        calSixty,
        calSixtyOne,
        calSixtyTwo,
        calSixtyThree,
        calSixtyFour,
        calSixtyFive,
        calSixtySix,
        calSixtySeven,
        calSixtyEight,
        calSixtyNine,
        calSeventy,
        calSeventyOne,
        calSeventyTwo,
        calSeventyThree,
        calSeventyFour,
        calSeventyFive,
        calSeventySix,
        calSeventySeven,
        calSeventyEight,
        calSeventyNine,
        calEighty,
        calEightyOne,
        calEightyTwo,
        calEightyThree,
        calEightyFour,
        calEightyFive,
        calEightySix,
        calEightySeven,
        calEightyEight,
        calEightyNine,
        calNinety,
        calNinetyOne,
        calNinetyTwo,
        calNinetyThree,
        calNinetyFour,
        calNinetyFive,
        calNinetySix,
        calNinetySeven,
        calNinetyEight,
        calNinetyNine,
        calOneHundred,
        calOneHundredOne,
        calOneHundredTwo,
        calOneHundredThree,
        calOneHundredFour,
        calOneHundredFive,
        calOneHundredSix,
        calOneHundredSeven,
        calOneHundredEight,
        calOneHundredNine,
        calOneHundredTen,
        calOneHundredEleven,
        calOneHundredTwelve,
        calOneHundredThirteen,
        calOneHundredFourteen,
        calOneHundredFifteen,
        calOneHundredSixteen,
        calOneHundredSeventeen,
        calOneHundredEighteen,
        calOneHundredNineteen,
        calOneHundredTwenty,
        calOneHundredTwentyOne,
        calOneHundredTwentyTwo,
        calOneHundredTwentyThree,
        calOneHundredTwentyFour,
        calOneHundredTwentyFive,
        calOneHundredTwentySix,
        calOneHundredTwentySeven,
        calOneHundredTwentyEight,
        calOneHundredTwentyNine,
        calOneHundredThirty,
        calOneHundredThirtyOne,
        calOneHundredThirtyTwo,
        calOneHundredThirtyThree,
        calOneHundredThirtyFour,
        calOneHundredThirtyFive,
        calOneHundredThirtySix,
        calOneHundredThirtySeven,
        calOneHundredThirtyEight,
        calOneHundredThirtyNine,
        calOneHundredFourty,
        calOneHundredFourtyOne,
        calOneHundredFourtyTwo,
        calOneHundredFourtyThree,
        calOneHundredFourtyFour,
        calOneHundredFourtyFive,
        calOneHundredFourtySix ,
        calOneHundredFourtySeven,
        calOneHundredFourtyEight,
        calOneHundredFourtyNine,
        calOneHundredFifty,
        calOneHundredFiftyOne
      }),
    });

    if (res.ok) {
      const calendar = await res.json();
      dispatch(addCalendar(calendar));
      return calendar;
    }
  };

  //UPDATE Calendar
  export const thunk_updateCalendar =
    ({ id, userId,
      calOne,
      calTwo,
      calThree,
      calFour,
      calFive,
      calSix, }) =>
    async (dispatch) => {

      const res = await fetch(`/api/calendars/${id}/edit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          calOne,
        calTwo,
        calThree,
        calFour,
        calFive,
        calSix,

        }),
      });

      if (res.ok) {
        const spot = await res.json();
        dispatch(addCalendar(spot));
        return spot;
      }
    };

  // DELETE SPOT
  export const thunk_deleteCalendar = ({ id }) => async (dispatch) => {
    const res = await fetch(`/api/calendars/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id
      })
    });

    if (res.ok) {
      const deletedCalendar = await res.json();
      dispatch(deleteCalendar(deletedCalendar));
      return "Deletion successful";
    }
  };



//SPOT REDUCER
const calendarReducer = (state = {}, action) => {
  switch (action.type) {
    case ALL_CALENDARS: {
      const newState = { ...state };
      newState["allCalendars"] = action.payload;
      return newState;
    }
    case ONE_CALENDAR: {
      const newState = { ...state };
      newState["oneCalendar"] = action.payload;
      return newState;
    }
    case DELETE_CALENDAR: {
      const newState = { ...state };
      delete newState[action.payload];
      return newState;
    }
    default:
      return state;
  }
};

export default calendarReducer;
