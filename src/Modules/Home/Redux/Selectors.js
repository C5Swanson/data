import { useSelector } from "react-redux";

export function usePosts() {
    return useSelector(({ home }) => home.posts);
}
