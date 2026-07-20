import React, { createContext, useEffect, useReducer } from 'react'


export const UserContext = createContext()
const initialState = JSON.parse(localStorage.getItem("user"))||{  name:"", email:""};

function reducer(state, action) {

    switch (action.type) {

        case "CHANGE_NAME":

            return {

                ...state,

                name: action.payload

            };

        case "CHANGE_EMAIL":

            return {

                ...state,

                email: action.payload

            };

        case "SET_USER":

            return action.payload;

        default:

            return state;
    }
    
}

export function UserProvider({ children }) {

    const [state, dispatch] = useReducer(
        reducer,
        initialState
    );
    
    useEffect(() => {

    localStorage.setItem(

        "user",

        JSON.stringify(state)

    );

}, [state]);
    return (

        <UserContext.Provider value={{ state, dispatch }}>
             {children}

        </UserContext.Provider>

    );

}

export default UserProvider