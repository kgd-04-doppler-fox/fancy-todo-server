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
