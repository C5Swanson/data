import { actionTypes } from "./HomeRedux";
import api from "./API";

export function getPosts() {
    return (dispatch) => dispatch(
        (dispatch) => {
    
            dispatch({
                type: actionTypes.GET_ALL,
                payload: {
                    data: []
                }
            });
    
            return fetch(api.home.GET_ALL)
            .then((response) => response.json())
            .then((data) => {
                dispatch({
                    type: actionTypes.GET_ALL_SUCCESS,
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

TODO: Add an action creator to get tags and add them to state
*/