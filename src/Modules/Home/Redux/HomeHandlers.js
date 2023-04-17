export const initialState = {
    posts: [],
};

export function handleGetPosts() {
    return {
        ...initialState
    };
}

export function handleGetPostsSuccess(state, action) {
    const { data } = action.payload;

    return {
        ...state,
        posts: data
    };
}

/*
STEP 3

TODO: Add handlers for getting tags. Expand the initiate state to include tags
*/