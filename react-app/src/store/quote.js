const ALL_QUOTES = "quote/ALL_QUOTES"
const ADD_QUOTE= "quote/ADD_QUOTE"
const ONE_QUOTE = "quote/ONE_QUOTE"
const DELETE_QUOTE = "quote/DELETE_QUOTE";

const allQuotes = (payload) => ({
    type: ALL_QUOTES,
    payload,
})

const addQuote = (payload) => ({
    type: ADD_QUOTE,
    payload,
})

const singleQuote = (payload) => ({
    type: ONE_QUOTE,
    payload,
})

const deleteQuote = (payload) =>({
    type: DELETE_QUOTE,
    payload,
})


//This is the fetch to get all of the quotes
export const thunk_getAllQuotes = () => async (dispatch) => {
const res = await fetch('/api/quotes/');

    if(res.ok) {
        const quotes = await res.json();
        dispatch(allQuotes(quotes))
        return quotes
    }
};

//Fetch to get a single quote and the information on it
export const thunk_getOneQuote = (id) => async (dispatch) => {
    const res = await fetch(`/api/quotes/${id}`);

    if(res.ok){
        const quote = await res.json();
        dispatch(singleQuote(quote));
        return quote;
    }
};

//Thunk to create a new quote
export const thunk_addQuote = (form) =>
    async (dispatch) => {
        const res = await fetch('/api/quotes/new', {
            method: "POST",
            headers: {
                "Content-Type": "applicaton/json",
                "Access-Control-Request-Headers": "Authorization",
                "Access-Control-Allow-Headers": "Authorization",
            },
            body: JSON.stringify(form),
        });
        if(res.ok){
            const quote = await res.json();
            dispatch(addQuote(quote.quote));
            return quote;
        }
    };

//Thunk to edit a quote
export const thunk_updateHome =
    ({id, userId, firstName, lastName, phone, passengers, date, orgin, destination}) =>
        async (dispatch) => {

            const res = await fetch(`/api/quotes/${id}/edit`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId,
                    firstName,
                    lastName,
                    phone,
                    passengers,
                    date,
                    orgin,
                    destination,
                }),
            });

            if (res.ok) {
                const quote = await res.json();
                dispatch(addQuote(quote));
                return quote;
            }
        };

//Thunk to delete a quote if needed
export const thunk_deleteQuote = ({ id }) => async (dispatch) => {
    const res = await fetch(`/api/quotes/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id
        })
    });
    if (res.ok) {
        const deletedQuote = await res.json();
        dispatch(deleteQuote(deletedQuote));
        return "Successfully Deleted Quote"
    }
}

//Created a reducer for quotes to effectively manage state and avoid site slow down
const quoteReducer = (state = {}, action) => {
    switch (action.type) {
        case ALL_QUOTES: {
            const newState = { ...state };
            newState["allQuotes"] = action.payload;
            return newState;
        }
        case ONE_QUOTE: {
            const newState = { ...state };
            newState["oneQuote"] = action.payload;
            return newState;
        }
        case DELETE_QUOTE: {
            const newState = { ...state };
            delete newState[action.payload];
            return newState;
        }
        default:
            return state;
    }
};

export default quoteReducer;
