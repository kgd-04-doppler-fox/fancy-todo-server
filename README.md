# fancy-todo-server

baseurl : http://localhost:3000/

**Home**
----
  Returns json data about a home page.

* **URL**

  /

* **Method:**

  `GET`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ "Home": "This is homepage" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

**Login User**
----
  Login User page.

* **URL**

  /user

* **Method:**

  `GET`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ "Login": "Login Sucessful!" }`
 
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
    **Content:** `{ id : 12, name : "Michael Bloom" }`
 
* **Error Response:**

  * **Code:** 400 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`



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

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

