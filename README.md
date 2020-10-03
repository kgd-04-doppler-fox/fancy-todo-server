# fancy-todo-server
baseurl : http://localhost:3000/

**Create Todo**
----
    Create Todo

* **URL**

    /todos

* **Method:**

    `POST`

* **Success Response:**
    {
        "todo": {
            "id": 4,
            "title": "Test 4",
            "description": "Nyoba Dulu",
            "status": "On Going",
            "due_date": "2020-10-31T00:00:00.000Z",
            "updatedAt": "2020-09-28T16:00:33.047Z",
            "createdAt": "2020-09-28T16:00:33.047Z"
        }
    }

* **Error Response:**
     **Code:** 400 BAD REQUEST <br />
    **Content:** `{"msg": "Date is invalid"}`

    OR

    **Code:** 500 INTERNAL SERVER ERROR <br />



**Show All Todo**
----
    Show Todo

* **URL**

    /todos

* **Method:**

    `GET`

* **Success Response:**
    [
        {
            "id": 1,
            "title": "Menjadi Developer Handal",
            "description": "Lulus dari Hacktiv8",
            "status": "On Going",
            "due_date": "2020-12-31T00:00:00.000Z",
            "createdAt": "2020-09-28T15:42:20.968Z",
            "updatedAt": "2020-09-28T15:42:20.968Z"
        },
        {
            "id": 2,
            "title": "Maju ke Phase 3",
            "description": "Lulus dari Phase 2 dan Nilai Bagus",
            "status": "On Going",
            "due_date": "2020-10-31T00:00:00.000Z",
            "createdAt": "2020-09-28T15:45:33.601Z",
            "updatedAt": "2020-09-28T15:45:33.601Z"
        },
        {
            "id": 3,
            "title": "Test",
            "description": "Test Todo",
            "status": "Done",
            "due_date": "2020-10-31T00:00:00.000Z",
            "createdAt": "2020-09-28T15:47:20.112Z",
            "updatedAt": "2020-09-28T15:58:27.413Z"
        }
    ]

* **Error Response:**
    **Code:** 500 INTERNAL SERVER ERROR <br />



**Find Todo**
----
    Find By Id

* **URL**

    /todos/:id

* **Method:**

    `GET`

* **Success Response:**
    {
        "todo": {
            "id": 1,
            "title": "Menjadi Developer Handal",
            "description": "Lulus dari Hacktiv8",
            "status": "On Going",
            "due_date": "2020-12-31T00:00:00.000Z",
            "createdAt": "2020-09-28T15:42:20.968Z",
            "updatedAt": "2020-09-28T15:42:20.968Z"
        }
    }
* **Error Response:**
     **Code:** 404 NOT FOUND <br />
    **Content:** `{"error": "ERROR 404 Not Found"}`

    OR

    **Code:** 500 INTERNAL SERVER ERROR <br />


**Edit Todo**
----
    Edit By Id

* **URL**

    /todos/:id

* **Method:**

    `PUT`

* **Success Response:**
    {
        "id": 3,
        "title": "Masak Air",
        "description": "Belajar Masak Air",
        "status": "On Going",
        "due_date": "2020-10-31T00:00:00.000Z",
        "createdAt": "2020-09-28T15:47:20.112Z",
        "updatedAt": "2020-09-28T16:32:58.639Z"
    }
    
* **Error Response:**
     **Code:** 404 NOT FOUND <br />
    **Content:** `{"error": "ERROR 404 Not Found"}`

    OR

     **Code:** 400 BAD REQUEST <br />
    **Content:** `{"msg": "Date is Invalid"}`

    OR

    **Code:** 500 INTERNAL SERVER ERROR <br />





**Edit Status**
----
    Edit Status By Id

* **URL**

    /todos/:id

* **Method:**

    `PATCH`

* **Success Response:**
     {
        "id": 3,
        "title": "Masak Air",
        "description": "Belajar Masak Air",
        "status": "Done",
        "due_date": "2020-10-31T00:00:00.000Z",
        "createdAt": "2020-09-28T15:47:20.112Z",
        "updatedAt": "2020-09-28T16:37:30.893Z"
    }

* **Error Response:**
     **Code:** 404 NOT FOUND <br />
    **Content:** `{"error": "ERROR 404 Not Found"}`

    OR

    **Code:** 500 INTERNAL SERVER ERROR <br />



**Delete Todo**
----
    Delete Todo By Id

* **URL**

    /todos/:id

* **Method:**

    `DELETE`

* **Success Response:**
     { "message" : `Todo Successfully Deleted` }

* **Error Response:**
     **Code:** 404 NOT FOUND <br />
    **Content:** `{"error": "ERROR 404 Not Found"}`

    OR

    **Code:** 500 INTERNAL SERVER ERROR <br />