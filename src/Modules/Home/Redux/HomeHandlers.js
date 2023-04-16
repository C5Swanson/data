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