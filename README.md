# fancy-todo-server

**Show Todo List**
----
  Returns json data about Todo list.

* **URL**

  /todos

* **Method:**

  `GET`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `
[
    {
        "id": 1,
        "title": "test put",
        "description": "test put",
        "status": "not done",
        "due_date": "2020-09-30T00:00:00.000Z",
        "createdAt": "2020-09-28T09:39:19.527Z",
        "updatedAt": "2020-09-28T17:48:03.554Z"
    }
]`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ message : "data not found" }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "message": "Validation isAfter on due_date failed"}`

**Create Todo**
----
  Insert new Todo to DB and return Todo json data

* **URL**

  /todos

* **Method:**

  `POST`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `
{
    "id": 4,
    "title": "test1",
    "description": "test2",
    "status": "not done",
    "due_date": "2020-09-30T00:00:00.000Z",
    "updatedAt": "2020-09-28T19:05:17.945Z",
    "createdAt": "2020-09-28T19:05:17.945Z"
}
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ message : "data not found" }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "message": "Validation isAfter on due_date failed"}`

**Show Todo**
----
  Returns json data about Todo list.

* **URL**

  /todos/:id

* **Method:**

  `GET`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `
[
    {
        "id": 1,
        "title": "test put",
        "description": "test put",
        "status": "not done",
        "due_date": "2020-09-30T00:00:00.000Z",
        "createdAt": "2020-09-28T09:39:19.527Z",
        "updatedAt": "2020-09-28T17:48:03.554Z"
    }
]`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ message : "data not found" }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "message": "Validation isAfter on due_date failed"}`

**Update Todo Data By Id**
----
  Update data and return new Todo json data

* **URL**

  /todos/:id

* **Method:**

  `PUT`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `
{
    "id": 3,
    "title": "test put",
    "description": "test put",
    "status": "not done",
    "due_date": "2020-09-30T00:00:00.000Z",
    "createdAt": "2020-09-28T13:11:16.006Z",
    "updatedAt": "2020-09-28T19:09:29.567Z"
}
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ message : "data not found" }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "message": "Validation isAfter on due_date failed"}`

**Update Todo value**
----
  Update data and return new Todo json data

* **URL**

  /todos/:id

* **Method:**

  `PATCH`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `
{
    "id": 3,
    "title": "test put",
    "description": "test put",
    "status": "done",
    "due_date": "2020-09-30T00:00:00.000Z",
    "createdAt": "2020-09-28T13:11:16.006Z",
    "updatedAt": "2020-09-28T19:09:29.567Z"
}
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ message : "data not found" }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ "message": "Validation isAfter on due_date failed"}`

**Delete**
----
  delete data 

* **URL**

  /todos/:id

* **Method:**

  `DELETE`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"msg": "todo success to delete"}
    
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ message : "data not found" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ "message": "Validation isAfter on due_date failed"}`
