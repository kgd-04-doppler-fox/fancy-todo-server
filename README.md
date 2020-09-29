# Fancy To-Do Server

## Table of Contents

* [About the Project](#about-the-project)
* [Todo](#todo)
  * Show All Todo
  * Show a Todo by Id
  * Add a new Todo
  * Edit a Todo by Id
  * Edit a Todo's status by Id
  * Delete a Todo by Id
* [User](#user)
  * Register
  * Login
  * Access Token
* [Weather Forecast](#weather-forecast)
  * Show Today's Weather by City
  * Digital clock
  

## About the Project

A todo app with fancy features:

* Registering an account for your personalised to-do
* Digital clock
* Daily weather forecast

---

## Todo

API documentation for the Todo

### Show All Todo

  Returns a json data of all Todo of an authenticated user.

* **URL**

  /todos

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   None

*  **Headers**

   **Required:**
 
    access_token


* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** <br />
    {
      "todo": [
          {
            "id": 11,
            "title": "learn heroku",
            "description": "heroku",
            "status": false,
            "due_date": "2020-10-13T04:13:00.000Z",
            "UserId": 9,
            "createdAt": "2020-09-29T14:36:54.921Z",
            "updatedAt": "2020-09-29T14:36:54.921Z"
          },
          {
            "id": 12,
            "title": "learn Jest",
            "description": "Jest",
            "status": false,
            "due_date": "2020-10-13T04:13:00.000Z",
            "UserId": 9,
            "createdAt": "2020-09-29T14:50:27.073Z",
            "updatedAt": "2020-09-29T14:50:27.073Z"
          }
        ]
    }
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />

---

### Show a Todo by Id

  Returns a single json data about a todo selected by `req.params.id`.

* **URL**

  /users/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

*  **Headers**

   **Required:**
 
    access_token


* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** <br />
    {
      "todo": {
        "id": 12,
        "title": "learn Jest",
        "description": "Jest",
        "status": false,
        "due_date": "2020-10-13T04:13:00.000Z",
        "UserId": 9,
        "createdAt": "2020-09-29T14:50:27.073Z",
        "updatedAt": "2020-09-29T14:50:27.073Z"
      }
    }
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ "todo": "Todo with such id is not found." }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />

---

### Add a new Todo

  Create a new Todo

* **URL**

  /todos

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

*  **Headers**

   **Required:**
 
    access_token


* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**  <br />
    `{
        "todo": {
        "id": 12,
        "title": "learn Jest",
        "description": "Jest",
        "status": false,
        "due_date": "2020-10-13T04:13:00.000Z",
        "UserId": 9,
        "updatedAt": "2020-09-29T14:50:27.073Z",
        "createdAt": "2020-09-29T14:50:27.073Z"
      }
    }`
    
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{"msg": "Date must be after today"}`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />

---

### Edit a Todo by Id

  Edit each data of a Todo selected by `req.params.id`.

* **URL**

  /todos/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
    `id=[integer]`

*  **Headers**

   **Required:**
 
    access_token


* **Data Params**

    `title=[string]`
    `description=[string]`
    `status=[boolean]`
    `due_date=[date]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** <br />
    `{
      "id": 12,
      "title": "learn heroku",
      "description": "heroku",
      "status": false,
      "due_date": "2020-10-13T04:13:00.000Z",
      "UserId": 9,
      "createdAt": "2020-09-29T14:50:27.073Z",
      "updatedAt": "2020-09-29T14:59:37.144Z"
    }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "msg": "Date must be after today" }`

  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ "msg": "Todo not found!" }`

  OR 

  * **Code:** 500 INTERNAL SERVER ERROR <br />

---

### Edit a Todo's status by Id

  Edit the status of a Todo selected by `req.params.id`.

* **URL**

  /todos/:id

* **Method:**

  `PATCH`
  
*  **URL Params**

   **Required:**
 
    `id=[integer]`

*  **Headers**

   **Required:**
 
    access_token


* **Data Params**

    `status=[boolean]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** <br />
    `{
        "id": 12,
        "title": "learn heroku",
        "description": "heroku",
        "status": true,
        "due_date": "2020-10-13T04:13:00.000Z",
        "UserId": 9,
        "createdAt": "2020-09-29T14:50:27.073Z",
        "updatedAt": "2020-09-29T15:07:20.298Z"
    }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ "msg": "Todo not found!" }`

  OR 

  * **Code:** 500 INTERNAL SERVER ERROR <br />

---

### Delete a Todo by Id

  Delete a Todo selected by `req.params.id`

* **URL**

  /todos/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
    `id=[integer]`

*  **Headers**

   **Required:**
 
    access_token

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ "msg": "Todo has been deleted." }`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />

---


## User

API documentation for the User.

### Register

  Register a new account for the application

* **URL**

  /register

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
    None

* **Data Params**

    `email=[string]`
    `password=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** <br />
    `{
      "id": 10,
      "email": "hello@gmail.com"
    }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "msg": "Email must be type of email." }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "msg": "Email cannot be empty" }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "msg": "Email has been taken." }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "msg": "Password cannot be empty" }`

  OR 

  * **Code:** 500 INTERNAL SERVER ERROR <br />

---

### Login

  Login to a registered user.

* **URL**

  /login

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
    None

*  **Headers**

   **Required:**
 
    access_token

* **Data Params**

    `email=[string]`
    `password=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** <br />
    `{
        "access_token": "dummyaccesstoken"
    }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "msg": "Wrong email or password." }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />


* **URL**

  /todos/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
    `id=[integer]`

* **Data Params**

    `title=[string]`
    `description=[string]`
    `status=[boolean]`
    `due_date=[date]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** <br />
    `{
      "id": 12,
      "title": "learn heroku",
      "description": "heroku",
      "status": false,
      "due_date": "2020-10-13T04:13:00.000Z",
      "UserId": 9,
      "createdAt": "2020-09-29T14:50:27.073Z",
      "updatedAt": "2020-09-29T14:59:37.144Z"
    }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "msg": "Date must be after today" }`

  OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ "msg": "Todo not found!" }`

  OR 

  * **Code:** 500 INTERNAL SERVER ERROR <br />

---

## Weather Forecast

### Show Today's Weather by City

* **URL**

  /weather

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
    None

*  **URL Query**

   **Required:**
 
    `[access_key]=string` <br/>
    `[query]=string`

*  **Headers**

   **Required:**
 
    access_token

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    `{ "weather": "Partly cloudy" }`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />

---

### Digital clock

* **URL**

  /weather

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
    None

*  **URL Query**

   **Required:**
 
    `[access_key]=string` <br/>
    `[query]=string`

*  **Headers**

   **Required:**
 
    access_token

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    `{ "time": "17:45" }`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />