# fancy-todo-server

baseurl : http://localhost:3000/

**Home**
----
  Returns json data about a home page.

* **URL**

  /

* **Method:**

  `GET`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ "Home": "This is homepage" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`


**Todos**
----
  List json todos data.

* **URL**

  /todos

* **Method:**

  `GET`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ "Home": "This is homepage" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

