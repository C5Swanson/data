import { actionTypes } from "./ApplicationRedux";
import api from "./API";

export function getUsers() {
    return (dispatch) => dispatch(
        (dispatch) => {
    
            dispatch({
                type: actionTypes.GET_USERS,
                payload: {
                    data: []
                }
            });
    
            return fetch(api.users.GET_ALL)
            .then((response) => response.json())
            .then((data) => {
                dispatch({
                    type: actionTypes.GET_USERS_SUCCESS,
                    payload: {
                        data: data
                    }
                });
            });
        }
    );
}


/*
STEP 3
    
TODO: Add action creator for getting tags

Requirements:
- Should use URL from API.js
- Should use action types defined in ApplicationRedux.js

*/