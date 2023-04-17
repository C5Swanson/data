import { useSelector } from "react-redux";

export function usePosts() {
    return useSelector(({ home }) => home.posts);
}

/*
STEP 3

TODO: Add selector to use tags from home state
*/
