# fancy-todo-server

**Add Todo**
----
  Returns json data about a single todo.

* **URL**

  /todos

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  `{
    "title": "Belajar RESTfull API",
    "description": "di hacktiv8",
    "status": false,
    "due_date": "2020-10-01"
  }`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{
                    "todos": {
                                "id": 6,
                                "title": "Belajar RESTfull API",
                                "description": "di hacktiv8",
                                "status": false,
                                "due_date": "2020-10-01T00:00:00.000Z",
                                "updatedAt": "2020-09-28T15:11:12.496Z",
                                "createdAt": "2020-09-28T15:11:12.496Z"
                            }   
                }`
 
* **Error Response:**

  * **Code:** 400 INVALID DATE <br />
    **Content:** `{ msg : "invalid date" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "internal server error" }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/todos",
      dataType: "json",
      type : "POST",
      success : function(response) {
        console.log(response);
      }
    });
  ```




  **Show All Todo**
----
  Returns all user data todo.

* **URL**

  /todos/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`
   `access_token=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
    "todos": [
        {
            "id": 1,
            "title": "Belajar restfull api",
            "description": "learn",
            "status": false,
            "due_date": "2020-12-01T00:00:00.000Z",
            "createdAt": "2020-09-28T12:50:46.574Z",
            "updatedAt": "2020-09-28T12:50:46.574Z"
        },
        {
            "id": 3,
            "title": "Belajar restfull api",
            "description": "learn",
            "status": false,
            "due_date": "2020-10-01T00:00:00.000Z",
            "createdAt": "2020-09-28T13:30:48.996Z",
            "updatedAt": "2020-09-28T13:30:48.996Z"
        },
        {........}
    ]
}`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ msg : "not found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ msg : "invalid access." }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "internal server error" }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/todos/:id",
      dataType: "json",
      type : "GET",
      success : function(response) {
        console.log(response);
      }
    });
  ```


    **Show Todo**
----
  Returns single user data todo.

* **URL**

  /todos/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`
   `access_token=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
                    "id": 1,
                    "title": "Belajar restfull api",
                    "description": "learn",
                    "status": false,
                    "due_date": "2020-12-01T00:00:00.000Z",
                    "createdAt": "2020-09-28T12:50:46.574Z",
                    "updatedAt": "2020-09-28T12:50:46.574Z" 
                  }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ msg : "not found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ msg : "invalid access." }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "internal server error" }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/todos/:id",
      dataType: "json",
      type : "GET",
      success : function(response) {
        console.log(response);
      }
    });
  ```



    **Update Todo (PUT)**
----
  Returns single user data todo.

* **URL**

  /todos/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`
   `access_token=[string]`

* **Data Params**

    `{
      "id": 1,
      "title": "Belajar restfull api",
      "description": "learn",
      "status": false,
      "due_date": "2020-12-01T00:00:00.000Z",
    }`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
                    "id": 1,
                    "title": "Belajar restfull api",
                    "description": "learn",
                    "status": true,
                    "due_date": "2020-12-01T00:00:00.000Z",
                    "createdAt": "2020-09-28T12:50:46.574Z",
                    "updatedAt": "2020-09-29T12:50:46.574Z" 
                  }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ msg : "not found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ msg : "invalid access." }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "internal server error" }`

  OR

  * **Code:** 400 INVALID DATE <br />
    **Content:** `{ msg : "invalid date" }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/todos/:id",
      dataType: "json",
      type : "PUT",
      success : function(response) {
        console.log(response);
      }
    });
  ```


    **Update Todo (PATCH)**
----
  Returns single user data todo.

* **URL**

  /todos/:id

* **Method:**

  `PATCH`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`
   `access_token=[string]`

* **Data Params**

    `{
      "status": false
    }`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
                    "id": 1,
                    "title": "Belajar restfull api",
                    "description": "learn",
                    "status": true,
                    "due_date": "2020-12-01T00:00:00.000Z",
                    "createdAt": "2020-09-28T12:50:46.574Z",
                    "updatedAt": "2020-09-29T12:50:46.574Z" 
                  }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ msg : "not found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ msg : "invalid access." }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "internal server error" }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/todos/:id",
      dataType: "json",
      type : "PATCH",
      success : function(response) {
        console.log(response);
      }
    });
  ```


  **DELETE Todo**
----
  Returns json message  .

* **URL**

  /todos/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`
   `access_token=[string]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"message": "todo success to delete"}`
 
* **Error Response:**

   * **Code:** 404 NOT FOUND <br />
    **Content:** `{ msg : "not found" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ msg : "invalid access." }`
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "internal server error" }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/todos/:id",
      dataType: "json",
      type : "DELETE",
      success : function(response) {
        console.log(response);
      }
    });
  ```


  **Register User**
----
  Returns json data about a single user.

* **URL**

  /register

* **Method:**

  `POST`
  
*  **URL Params**

    None

* **Data Params**

    `{
        "email": "ayurahma@mail.com",
        "password": "12345"
    }`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{
                    "todos": {
                                "id": 6,
                                "email": "ayurahma@mail.com",
                                "password": "12345"
                                "updatedAt": "2020-09-28T15:11:12.496Z",
                                "createdAt": "2020-09-28T15:11:12.496Z"
                            }   
                }`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "internal server error" }`

OR

  * **Code:** 400 INVALID DATE <br />
    **Content:** `{ msg : "invalid date" }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/register",
      dataType: "json",
      type : "POST",
      success : function(response) {
        console.log(response);
      }
    });
  ```



  **Login User**
----
  Returns json access_token .

* **URL**

  /login

* **Method:**

  `POST`
  
*  **URL Params**
    
    None

* **Data Params**
    `{
        "email": "ayurahma@mail.com",
        "password": "12345"
    }`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhaG1hQG1haWwuY29tIiiOjEsImlhdCI6MTYwMTY1NTU5MX0.gfJ9Iey2JmLDtoz2i7sEHueW5sywRZ7AX9DDiCz-dg`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "internal server error" }`

OR

  * **Code:** 400  INVALID PASSWORD / EMAIL <br />
    **Content:** `{ msg : "Wrong email / password" }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/login",
      dataType: "json",
      type : "POST",
      success : function(response) {
        console.log(response);
      }
    });
  ```

    **Trending Movie (third party API)**
----
  Returns json data from third party.

* **URL**

  /trending

* **Method:**

  `GET`
  
*  **URL Params**
    
    None

* **Data Params**
    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[
    {
        "id": 597156,
        "video": false,
        "vote_count": 18,
        "vote_average": 7.3,
        "title": "The Boys in the Band",
        "release_date": "2020-09-30",
        "original_language": "en",
        "original_title": "The Boys in the Band",
        "genre_ids": [
            18
        ],
        "backdrop_path": "/wX1n8ndD7l6PsHSUmo66GRJHcwG.jpg",
        "adult": false,
        "overview": "New York, 1968. At a birthday party, a surprise guest and a drunken game leave seven gay friends reckoning with unspoken feelings and buried truths.",
        "poster_path": "/2D2gi13hnrXWaspWuWmdbEZ8bef.jpg",
        "popularity": 102.215,
        "media_type": "movie"
    },
    {..................}

    ]
    `
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg : "internal server error" }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/trending",
      dataType: "json",
      type : "GET",
      success : function(response) {
        console.log(response);
      }
    });
  ```

  