# fancy-todo-server

Add Todo

Returns json data about a single todo.

    URL

    /todos

    Method:

    POST

    Data Body

    {
    "title": "Belajar RESTfull API",
    "description": "di hacktiv8",
    "status": false,
    "due_date": "2020-10-01"
    }


    Success Response:
        Code: 201
        Content: {
                    "todos": {
                                "id": 6,
                                "title": "Belajar RESTfull API",
                                "description": "di hacktiv8",
                                "status": false,
                                "due_date": "2020-10-01T00:00:00.000Z",
                                "updatedAt": "2020-09-28T15:11:12.496Z",
                                "createdAt": "2020-09-28T15:11:12.496Z"
                            }   
                }

    Error Response:
        Code: 400 INVALID DATE(due_date)
        Content: {"msg": "invalid date"}
    OR
        Code: 500 Internal Server Error
        Content: {"msg": "internal server error"}




Show All Todo

Returns json data about all todo.

    URL

    /todos

    Method:

    GET

    Success Response:
        Code: 200
        Content: {
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
}

    Error Response:
        Code: 500 Internal Server Error
        Content: {"msg": "internal server error"}


    Show Todo

Returns json data about a single user.

    URL

    /todos/:id

    Method:

    GET

    URL Params

    Required:

    id=[integer]

    Data Params

    None

    Success Response:
        Code: 200
        Content: {
                    "id": 1,
                    "title": "Belajar restfull api",
                    "description": "learn",
                    "status": false,
                    "due_date": "2020-12-01T00:00:00.000Z",
                    "createdAt": "2020-09-28T12:50:46.574Z",
                    "updatedAt": "2020-09-28T12:50:46.574Z"
                }

    Error Response:
        Code: 404 NOT FOUND
        Content: { "msg" : "not found" }

    
Update Todo(PUT)

Returns json data about a single user.

    URL

    /todos/:id

    Method:

    PUT

    URL Params

    Required:

    id=[integer]

    Data Body

    {
        "title": "Belajar RESTfull API",
        "description": "self study",
        "status": true,
        "due_date": "2020-09-29"
    }

    Success Response:
        Code: 200
        Content: {
                    "id": 3,
                    "title": "Belajar RESTfull API",
                    "description": "self study",
                    "status": true,
                    "due_date": "2020-09-29T00:00:00.000Z",
                    "createdAt": "2020-09-28T13:30:48.996Z",
                    "updatedAt": "2020-09-28T15:52:04.814Z"
                }

    Error Response:
        Code: 404 NOT FOUND
        Content: { "msg" : "not found" }

    OR
        Code: 400 INVALID DATE(due_date)
        Content: {"msg": "invalid date"}
    OR
        Code: 500 Internal Server Error
        Content: {"msg": "internal server error"}


Update Todo(PATCH) status

Returns json data about a single user.

    URL

    /todos/:id

    Method:

    PATCH

    URL Params

    Required:

    id=[integer]

    Data Body

    {"status": true}

    Success Response:
        Code: 200
        Content: {
                    "id": 1,
                    "title": "Belajar restfull api",
                    "description": "learn",
                    "status": true,
                    "due_date": "2020-12-01T00:00:00.000Z",
                    "createdAt": "2020-09-28T12:50:46.574Z",
                    "updatedAt": "2020-09-28T16:03:32.096Z"
                }

    Error Response:
        Code: 404 NOT FOUND
        Content: { "msg" : "not found" }

    OR
        Code: 500 Internal Server Error
        Content: {"msg": "internal server error"}

    
Delete Todo

Returns json data message

    URL

    /todos/:id

    Method:

    DELETE

    URL Params

    Required:

    id=[integer]

    Data Params

    None

    Success Response:
        Code: 200
        Content: {"message": "todo success to delete"}

    Error Response:
        Code: 404 NOT FOUND
        Content: { "msg" : "not found" }

    OR
        Code: 500 Internal Server Error
        Content: {"msg": "internal server error"}

