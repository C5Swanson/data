import { reduxHelpers } from "../Utilities";
import * as reduxHandlers from "./ApplicationHandlers";

const namespace = "GLOBAL";

export const actionTypes = {
    GET_USERS: `${namespace}/GET_USERS`,
    GET_USERS_SUCCESS: `${namespace}/GET_USERS_SUCCESS`,

    /*
    STEP 3

    TODO: Add action types to get tags

    Requirements:
    - Should have a type for getting all
    - should have a type for successfully getting all

    */
};

const handlers = {};

handlers[actionTypes.GET_USERS] = reduxHandlers.handleGetUsers;
handlers[actionTypes.GET_USERS_SUCCESS] = reduxHandlers.handleGetUsersSuccess;

    /*
    STEP 3

    TODO: Add handlers for tags

    */

export const applicationReducer = reduxHelpers.createReducer(reduxHandlers.initialState, handlers);