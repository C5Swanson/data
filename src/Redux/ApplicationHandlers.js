export const initialState = {
    users: []
    /*
    STEP 3
    
    TODO: Add default state for tags

    */
};

export function handleGetUsers() {
    return {
        ...initialState
    };
}

export function handleGetUsersSuccess(state, action) {
    const { data } = action.payload;

    return {
        ...state,
        users: data
    };
}

/*
STEP 3
    
TODO: Add handlers for tags

Requirements:
- Should have a handler for initial request and a successful action
- Should update the state with the tags

*/