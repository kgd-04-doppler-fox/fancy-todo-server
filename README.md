fancy-todo-server
baseurl : `http://localhost/3000

** Show Todo**
----
  Returns json data about all todo data

* **URL**

  /todos

* **Method:**

  `GET`
  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{ 
            "id" : 1, 
            "title" : "Learn REST API" , 
            "description" : "Learn how to create RESTful API with Express and Sequelize" ,
            "due_date" : "2020-01-29" ,
            "status" : "incomplete"
        }, { 
            "id" : 2, 
            "title" : "Learn Sequelize" , 
            "description" : "Learn definition of Sequelize" ,
            "due_date" : "2020-01-30" ,
            "status" : "incomplete"
        }]`
 
* **Error Response:**

  * **Code:** 500  <br />
    **Content:** `{ error : "Todo data doesn't exist" }`

==================================================================================

** Create Todo **
----
  Insert new Todo to DB and return json data about new todo.

* **URL**

  /todos

* **Method:**

  `POST`

* **Data Params**

  `title = [string]`
  `description = [string]`
  `due_date = [string]`
  `status = [incomplete / complete]

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ "todo" : { 
            "id" : 3, 
            "title" : "Learn Basic Phyton" , 
            "description" : "Learn basic Programming Language : Phyton" ,
            "due_date" : "2020-01-25" 
        }}`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ msg : "Validation Error!" }`

  * **Code:** 500 <br />
    **Content:** `{ "msg : Internal Server Error!" }`


==================================================================================

** Show Todo by ID**
----
  Show todo data from DB in json data.

* **URL**

  /todos/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Success Response:**

  * **Code:** 200 <br />
  **Content:** `{ "todo" : { 
            "id" : 3, 
            "title" : "Learn Basic Phyton" , 
            "description" : "Learn Basic Programming Language : Phyton" ,
            "due_date" : "2020-01-25" 
        }}`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ msg : "Validation Error!" }`

    OR

  * **Code:** 404 <br />
    **Content:** `{ error : "Data is not found." }`

    OR

  * **Code:** 500 <br />
    **Content:** `{ "msg : Internal Server Error!" }`


===============================================================

**Update Todo Data Status**
----
  Update data status from DB into complete/incomplete.

* **URL**

  /todos/:id

* **Method:**

  `PATCH`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  `status = [complete/incomplete]`

* **Success Response:**

  * **Code:** 200 <br />
  **Content:** `{ "todo" : { 
            "id" : 3, 
            "title" : "Learn Advanced Phyton" , 
            "description" : "Learn Advanced Programming Language : Phyton" ,
            "due_date" : "2020-01-19"
            'status" : "complete" 
        }}`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ msg : "Validation Error!" }`

    OR

  * **Code:** 404 <br />
    **Content:** `{ error : "Data is not found." }`

    OR

  * **Code:** 500 <br />
    **Content:** `{ "msg : Internal Server Error!" }`


===============================================================

**Update More Than 1 Attributes Todo Data**
----
  Update todo attributes from DB in json data.

* **URL**

  /todos/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  `title = [string]`
  `description = [string]`
  `due_date = [string]`
  `status = [incomplete / complete]

* **Success Response:**

  * **Code:** 200 <br />
  **Content:** `{ "todo" : { 
            "id" : 3, 
            "title" : "Learn Advanced Phyton" , 
            "description" : "Learn Advanced Programming Language : Phyton" ,
            "due_date" : "2020-01-19"
            'status" : "incomplete" 
        }}`
 
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ msg : "Validation Error!" }`

    OR

  * **Code:** 404 <br />
    **Content:** `{ error : "Data is not found." }`

    OR

  * **Code:** 500 <br />
    **Content:** `{ "msg : Internal Server Error!" }`

===============================================================

**Delete Todos Data**
----
    Delete todos data from DB.

* **URL**

  /todos/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ msg : todo success to delete }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Todo data is not found!" }`

OR

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error!" }`
