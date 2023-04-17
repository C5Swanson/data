const baseURL = "https://my-json-server.typicode.com/C5Swanson/socialize";

const homeURL= `${baseURL}/posts`;

/*
STEP 3

TODO: Add api for getting tags from /tags
*/

const api = {
    home: {
        GET_ALL: homeURL,
    }
};

export default api;