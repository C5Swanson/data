## Simple JSON Test Server

* Set up with https://jsonplaceholder.typicode.com/


### Post url
https://my-json-server.typicode.com/C5Swanson/data/posts

* GET       /posts 
* GET       /posts/{id}
* GET       /posts?{QUERY}
* POST      /posts
* PUT       /posts/{id}
* PATCH	    /posts/{id}
* DELETE    /posts/{id}


### User url
https://my-json-server.typicode.com/C5Swanson/data/users

* GET       .../users 
* GET       .../users/{id}
* GET       .../users?{QUERY}
* POST      .../users
* PUT       .../users/{id}
* PATCH	    .../users/{id}
* DELETE    .../users/{id}


### Examples

#### Get All

```
fetch('https://my-json-server.typicode.com/C5Swanson/data/posts')
  .then((response) => response.json())
  .then((json) => console.log(json));
```

#### Create

```
fetch('https://my-json-server.typicode.com/C5Swanson/data/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
    timestamp: '023-04-15T6:30:02.675Z'
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```