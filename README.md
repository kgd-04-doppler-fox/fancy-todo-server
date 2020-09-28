# fancy-todo-server

**Show All Todo**
----
  Returns a json data of all Todo.

* **URL**

  /todos

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
    "todo": [
        {
            "id": 1,
            "title": "learn react",
            "description": "react.js is a javascript library to create reusable and extensible UI.",
            "status": false,
            "due_date": "2020-10-13T04:13:00.000Z",
            "createdAt": "2020-09-28T09:22:05.824Z",
            "updatedAt": "2020-09-28T09:22:05.824Z"
        },
        {
            "id": 4,
            "title": "learn firebase",
            "description": "Firebase database",
            "status": false,
            "due_date": "2020-10-27T04:13:00.000Z",
            "createdAt": "2020-09-28T09:46:45.140Z",
            "updatedAt": "2020-09-28T09:46:45.140Z"
        }
    ]
}`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />


**Show Todo by Id**
----
  Returns a single json data about a todo selected by `req.params.id`.

* **URL**

  /users/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
    "todo": {
        "id": 1,
        "title": "learn react",
        "description": "react.js is a javascript library to create reusable and extensible UI.",
        "status": false,
        "due_date": "2020-10-13T04:13:00.000Z",
        "createdAt": "2020-09-28T09:22:05.824Z",
        "updatedAt": "2020-09-28T09:22:05.824Z"
    }
}`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{
    "todo": "Todo with such id is not found."}`



**Add a new Todo**
----
  Create a new Todo.

* **URL**

  /todos

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
    "todo": {
        "id": 5,
        "title": "learn socket.io",
        "description": "framework for real-time apps.",
        "status": false,
        "due_date": "2020-10-27T04:13:00.000Z",
        "updatedAt": "2020-09-28T11:25:55.707Z",
        "createdAt": "2020-09-28T11:25:55.707Z"
    }
}`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{"msg": "Date must be after today"}`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />


**Edit a Todo**
----
  Edit each data of a Todo selected by `req.params.id`.

* **URL**

  /todos/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
    `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
    "title": "learn heroku",
    "description": "heroku",
    "status": false,
    "due_date": "2020-10-13T04:13:00.000Z"
}`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{"msg": "Date must be after today"}`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />


**Delete a Todo by Id**
----
  Delete a Todo selected by `req.params.id`.

* **URL**

  /todos/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
    `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"message": "Data has been deleted."}`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />