# fancy-todo-server
baseurl : 'http://localhost:3000'

**Show ToDos**
----
  Returns json data for all ToDo list.

* **URL**

  /todos/

* **Method:**

  `GET`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{
        "id": 1,
        "title": "learn REST API",
        "description": "learn how to create RESTful API with express and sequelize",
        "status": false,
        "due_date": "2020-01-29T00:00:00.000Z",
        "createdAt": "2020-09-28T09:53:26.846Z",
        "updatedAt": "2020-09-28T09:53:26.846Z"
    }]`


**Create ToDo**
----
  insert new ToDo to DB and return new ToDo json data.

* **URL**

  /todos

* **Method:**

  `POST`
  
* **Data Params**

  `title=[string]`
  `description=[string]`
  `status=[boolean]`
  `due_date=[date]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{
    "id": 7,
    "title": "learn REST API",
    "description": "learn how to create RESTful API with express and sequelize",
    "status": false,
    "due_date": "2020-01-29T00:00:00.000Z",
    "updatedAt": "2020-09-28T10:48:32.003Z",
    "createdAt": "2020-09-28T10:48:32.003Z"
}`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ msg : "Tanggal tidak boleh lewat hari ini" }`


**Show ToDos By Id**
----
  Returns json data for all ToDo list  bby id.

* **URL**

  /todos/:id

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
    "id": 6,
    "title": "learn REST API",
    "description": "learn how to create RESTful API with express and sequelize",
    "status": false,
    "due_date": "2020-01-29T00:00:00.000Z",
    "createdAt": "2020-09-28T09:53:26.846Z",
    "updatedAt": "2020-09-28T09:53:26.846Z"
}`


  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`



**Update ToDos By Id Using PUT**
----
  update ToDo by id from DB and return updated ToDo json data.

* **URL**

  /users/:id

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
    "title": "handle PUT 2",
    "description": "handle PUT request on postman",
    "status": false,
    "due_date": "2020-08-27"
}`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ msg : "Tanggal tidak boleh lewat hari ini" }`
        
    OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`



**Update ToDos By Id Using PATCH**
----
  update ToDo by id from DB and return updated ToDo json data.

* **URL**

  /users/:id

* **Method:**

  `PATCH`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
    "status": true
}`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ msg : "Tanggal tidak boleh lewat hari ini" }`
    
    OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`


**Delete Todo**
----
  Delete ToDo from DB

* **URL**

  /users/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
    "message": "todo succes to delete"
}`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`
