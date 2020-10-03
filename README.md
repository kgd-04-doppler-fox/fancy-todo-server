# fancy-todo-server
http://localhost:3000/

**Title**
----
    Create Todo

* **URL**

    /todos

* **Method:**
  
    `POST`

* **Success Response:**
    {
        "todo": {
            "id": 6,
            "title": "Cooking Class",
            "description": "Cooking school",
            "status": "uncompleted",
            "due_date": "28-09-2020",
            "updatedAt": "2020-09-28T09:56:35.001Z",
            "createdAt": "2020-09-28T09:56:35.001Z"
        }
    }
 
* **Error Response:**
     **Code:** 400 BAD REQUEST <br />
    **Content:** `{"msg": "tanggal tidak valid"}`

    OR

    **Code:** 500 INTERNAL SERVER ERROR <br />



**Title**
----
    Show Todo

* **URL**

    /todos

* **Method:**
  
    `GET`

* **Success Response:**
    [
        {
            "id": 3,
            "title": "buy groceries",
            "description": "buy groceries for september",
            "status": "pending",
            "due_date": "28-09-2020",
            "createdAt": "2020-09-28T09:23:46.895Z",
            "updatedAt": "2020-09-28T09:23:46.895Z"
        },
        {
            "id": 4,
            "title": "buy groceries",
            "description": "buy groceries for september",
            "status": "pending",
            "due_date": "28-09-2020",
            "createdAt": "2020-09-28T09:24:32.962Z",
            "updatedAt": "2020-09-28T09:24:32.962Z"
        }
    ]
 
* **Error Response:**
    **Code:** 500 INTERNAL SERVER ERROR <br />



**Title**
----
    Show By Id

* **URL**

    /todos/:id

* **Method:**
  
    `GET`

* **Success Response:**
    {
        "todo": {
            "id": 3,
            "title": "buy groceries",
            "description": "buy groceries for september",
            "status": "pending",
            "due_date": "28-09-2020",
            "createdAt": "2020-09-28T09:23:46.895Z",
            "updatedAt": "2020-09-28T09:23:46.895Z"
        }
    }
* **Error Response:**
     **Code:** 404 NOT FOUND <br />
    **Content:** `{"error": "not found"}`

    OR

    **Code:** 500 INTERNAL SERVER ERROR <br />


**Title**
----
    Edit All by Id

* **URL**

    /todos/:id

* **Method:**
  
    `PUT`

* **Success Response:**
    {
        "id": 3,
        "title": "Cooking Class",
        "description": "French Cooking school",
        "status": "uncompleted",
        "due_date": "28-09-2020",
        "createdAt": "2020-09-28T09:23:46.895Z",
        "updatedAt": "2020-09-28T10:02:21.627Z"
    }
* **Error Response:**
     **Code:** 404 NOT FOUND <br />
    **Content:** `{"error": "not found"}`

    OR

     **Code:** 400 BAD REQUEST <br />
    **Content:** `{"msg": "tanggal tidak valid"}`

    OR

    **Code:** 500 INTERNAL SERVER ERROR <br />





**Title**
----
    Edit Status by Id

* **URL**

    /todos/:id

* **Method:**
  
    `PATCH`

* **Success Response:**
     {
        "id": 3,
        "title": "Cooking Class",
        "description": "French Cooking school",
        "status": "completed",
        "due_date": "28-09-2020",
        "createdAt": "2020-09-28T09:23:46.895Z",
        "updatedAt": "2020-09-28T10:02:21.627Z"
    }
* **Error Response:**
     **Code:** 404 NOT FOUND <br />
    **Content:** `{"error": "not found"}`

    OR
    
    **Code:** 500 INTERNAL SERVER ERROR <br />



**Title**
----
    Delete Todo By Id

* **URL**

    /todos/:id

* **Method:**
  
    `DELETE`

* **Success Response:**
     { "message" : `todo success to delete` }

* **Error Response:**
     **Code:** 404 NOT FOUND <br />
    **Content:** `{"error": "not found"}`

    OR
    
    **Code:** 500 INTERNAL SERVER ERROR <br />



**Title**
----
    Login

* **URL**

    /login

* **Method:**
  
    `POST`

* **Success Response:**
     { "id" : `user id`,
       "fullName" : `user name`,
       "email" : `user email`,
     }

* **Error Response:**
     **Code:** 400 NOT FOUND <br />
    **Content:** `{"error": "wrong email/password"}`

    OR
    
    **Code:** 500 INTERNAL SERVER ERROR <br />



**Title**
----
    Registration User

* **URL**

    /register

* **Method:**
  
    `POST`

* **Success Response:**
     { "id" : `user id`,
       "fullName" : `user name`,
       "email" : `user email`
     }

* **Error Response:**
     **Code:** 400 BAD REQUEST <br />
    **Content:** `{"error": "email must be uniq"}`

    OR
    
    **Code:** 500 INTERNAL SERVER ERROR <br />