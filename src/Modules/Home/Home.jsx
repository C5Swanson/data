import { useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { getPosts } from "./Redux/HomeActionCreators"
import { usePosts } from "./Redux/Selectors";
import "./Home.scss"

const propTypes = {
    users: PropTypes.array,
}

const Home = function({ users }) {
    const dispatch = useDispatch();
    const posts = usePosts();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    /*
    STEP 1

    TODO: Create List of Post elements

    Requirements:
    - Use "users" prop and "posts" for data
    - Posts should be assigned to a memoized (uses useMemo) variable
    - Element should use the <Post /> component

    */

    return (
        <div className={"homeContainer"}>
            {
                /*
                STEP 1
                
                TODO: Add List of post components

                */
            }
        </div>
    )
}

Home.propTypes = propTypes;

export default Home;

/*
STEP 3

TODO: Get tags and pass to post element

Requirements:
- Use created selector and action creator to get tags
- Pass tags into post component
*/
