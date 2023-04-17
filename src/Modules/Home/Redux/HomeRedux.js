import { reduxHelpers } from "../../../Utilities";
import * as reduxHandlers from "./HomeHandlers";

const namespace = "HOME";

/*
STEP 3

TODO: Add action types for getting tags and add them to the handlers
*/

export const actionTypes = {
    GET_ALL: `${namespace}/GET_ALL`,
    GET_ALL_SUCCESS: `${namespace}/GET_ALL_SUCCESS`,
}

const handlers = {};

handlers[actionTypes.GET_ALL] = reduxHandlers.handleGetPosts;
handlers[actionTypes.GET_ALL_SUCCESS] = reduxHandlers.handleGetPostsSuccess;

export const homeReducer = reduxHelpers.createReducer(reduxHandlers.initialState, handlers);