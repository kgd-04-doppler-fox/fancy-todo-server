# fancy-todo-server

**Show Todo by Id**
----
  Returns json data about a single todo.

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
    **Content:** `{ error : "User doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`