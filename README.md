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
