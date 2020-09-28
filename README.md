# fancy-todo-server

baseurl : http://localhost:3000/

**Home**
----
  Returns on a home page.

* **URL**

  /

* **Method:**

  `GET`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ "Home": "This is homepage" }`
 
* **Error Response:**

* **Code:** 500 INTERNAL SERVER <br />
    **Content:** `{ error : "Internal Server Error }`



**Add New Todos**
----
  Add New Todos.

* **URL**

  /todos

* **Method:**

  `POST`

* **Data Params**

  `title=[string]`
  `description=[string]`
  `status = [boolean]`
  `due_date = [date]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{
    "todo": {
        "id": 2,
        "title": "Whut",
        "description": "Weed situations",
        "status": false,
        "due_date": "2020-09-29T00:00:00.000Z",
        "updatedAt": "2020-09-28T11:23:46.857Z",
        "createdAt": "2020-09-28T11:23:46.857Z"
    }
}`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ msg : Date can't today }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ msg : Invalid date }`

  OR
  
  * **Code:** 500 INTERNAL SERVER <br />
    **Content:** `{ error : "Internal Server Error }`



**List Todos**
----
  List json todos data.

* **URL**

  /todos

* **Method:**

  `GET`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
    "todo": [
        {
            "id": 1,
            "title": "Harry Potters Reading",
            "description": "Reading and binging",
            "status": true,
            "due_date": "2020-09-28T00:00:00.000Z",
            "createdAt": "2020-09-28T10:12:52.690Z",
            "updatedAt": "2020-09-28T10:12:52.690Z"
        },
        {
            "id": 2,
            "title": "Wizzz",
            "description": "Weed situations",
            "status": false,
            "due_date": "2020-10-11T00:00:00.000Z",
            "createdAt": "2020-09-28T10:14:50.207Z",
            "updatedAt": "2020-09-28T10:14:50.207Z"
        }
    ]
}`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER <br />
    **Content:** `{ error : "Internal Server Error }`



**Get Todos by ID**
----
  Get Todos data by Id.

* **URL**

  /todos/:id

* **Method:**

  `GET`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
    "todo": [
        {
            "id": 1,
            "title": "Harry Potters Reading",
            "description": "Reading and binging",
            "status": true,
            "due_date": "2020-09-28T00:00:00.000Z",
            "createdAt": "2020-09-28T10:12:52.690Z",
            "updatedAt": "2020-09-28T10:12:52.690Z"
        }
}`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ msg : "Error not Found" }`



**Edit Put Todos**
----
  Edit Todos by ID with all element updated.

* **URL**

  /todos/:id

* **Method:**

  `PUT`

* **Data Params**
  `id=[integer]`
  `title=[string]`
  `description=[string]`
  `status = [boolean]`
  `due_date = [date]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
    "id": "1",
    "title": "Pierrot",
    "description": "Fat Detective",
    "status": true,
    "due_date": "2020-09-30"
}`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ validation error }`

  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ validation error }`

  OR

  * **Code:** 500 INTERNAL SERVER <br />
    **Content:** `{ error : "Internal Server Error }`



**Edit Patch Todos**
----
  Edit Todos by ID with some element updated.

* **URL**

  /todos/:id

* **Method:**

  `PATCH`

* **Data Params**
  `id=[integer]`
  `status = [boolean]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
    "id": "1",
    "status": "true"
}`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ msg : `[Title/Description/Status/Due_date] cannot be [Empty/Null]` }`

  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ validation error }`

  OR

  * **Code:** 500 INTERNAL SERVER <br />
    **Content:** `{ error : "Internal Server Error }`



**Delete Put Todos**
----
  Delete Todos by ID.

* **URL**

  /todos/:id

* **Method:**

  `DELETE`

* **Data Params**
  
  `id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `msg : todo succes to delete`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error not found ! }`

  OR

  * **Code:** 500 INTERNAL SERVER <br />
    **Content:** `{ error : "Internal Server Error }`



**Login User**
----
  Login User page.

* **URL**

  /user

* **Method:**

  `GET`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV0ZXJuYWwucHV0cmFAZ21haWwuY29tIiwiaWQiOjEsImlhdCI6MTYwMTMwODEyM30.NkqvrEea2sqiQ07qFBShNvqSLo0qFx7hYiTYrSmd42k"
  }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ msg : "Email/password wrong" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`


**Register User**
----
  Register New User Page.

* **URL**

  /users

* **Method:**

  `POST`


* **Data Params**

  `email=[string]`
  `password=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{
    "id": 6,
    "email": "something.putra@gmail.com"
  }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{
    "msg": "Key (email)=([@email.com]) already exists."
  }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

