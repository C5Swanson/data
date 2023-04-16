## Run the app

### Install Dependencies
```
npm install
```

### Boot in http://localhost:3000
```
npm start
```


## Tutorial Instructions

This app is designed as an interactive tutorial to learn React with Redux. The development of this sample app is broken down into several steps.

### Step 1: Prop Configuration and Component Usage

* `src/Modules/Home/Post/Post.jsx`
  - Configure props to component
  - Display post element

* `src/Modules/Home/.jsx`
  - Create list of Post components
  - Render components in home container

### STEP 3: Component Creation / Routing

-- ADD Step Instructions

### Step 3: Redux Configuration

-- ADD Step Instructions



## Simple JSON Test Server

* Set up with https://jsonplaceholder.typicode.com/

### Posts
https://my-json-server.typicode.com/C5Swanson/socialize/posts

* GET       /posts 
* GET       /posts/{id}
* GET       /posts?{QUERY}
* POST      /posts
* PUT       /posts/{id}
* PATCH	    /posts/{id}
* DELETE    /posts/{id}

#### Usage - Get All

```
fetch('https://my-json-server.typicode.com/C5Swanson/socialize/posts')
  .then((response) => response.json())
  .then((json) => console.log(json));
```

##### Sample Response

```
[
  {
    "userId": 2,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    "timestamp": "2023-04-15T6:30:02.675Z",
    "tagIds": [ 1, 3 ]
  },
  ...
]
```

#### Usage - Create Post

```
fetch('https://my-json-server.typicode.com/C5Swanson/socialize/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
    timestamp: '2023-04-15T6:30:02.675Z'
    tagIds: [1, 2, 3]
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```

##### Sample Response

```
[
  {
    "userId": 1,
    "id": 10,
    "title": 'foo',
    "body": 'bar',
    "timestamp": '2023-04-15T6:30:02.675Z'
    "tagIds": [1, 2, 3]
  },
  ...
]
```


### Users
https://my-json-server.typicode.com/C5Swanson/socialize/users

* GET       .../users 
* GET       .../users/{id}
* GET       .../users?{QUERY}
* POST      .../users
* PUT       .../users/{id}
* PATCH	    .../users/{id}
* DELETE    .../users/{id}

#### Usage

```
fetch('https://my-json-server.typicode.com/C5Swanson/socialize/users')
  .then((response) => response.json())
  .then((json) => console.log(json));
```

#### Sample Data

```
[
  {
    "id": 1,
    "firstName": "Test",
    "lastName": "User",
    "username": "Self",
    "email": "test.user@example.com",
    "phone": "1-555-555-5555",
    "organization": "Cadre5"
  },
  ...
]
```

#### Create

```
fetch('https://my-json-server.typicode.com/C5Swanson/socialize/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
    timestamp: '023-04-15T6:30:02.675Z'
    tagIds: [1, 2, 3]
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```

#### Usage - Create User

```
fetch('https://my-json-server.typicode.com/C5Swanson/socialize/users', {
  method: 'POST',
  body: JSON.stringify({
    firstName: "David",
    lastName: "Swanson",
    username: "Geodavid",
    email: "david.swanson@example.com",
    phone: "1-333-333-3333",
    organization: "Cadre5"
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```

##### Sample Response

```
[
  {
    "firstName": "David",
    "lastName": "Swanson",
    "username": "Geodavid",
    "email": "david.swanson@example.com",
    "phone": "1-333-333-3333",
    "organization": "Cadre5"
  },
  ...
]
```