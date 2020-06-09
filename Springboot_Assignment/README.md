# Spring Boot CRUD API

	Uses MySQL database as the datasource
	Runs on port 8081
	
## Once application has started successfully then we can test it by using POSTMAN or any other API testing tool:

Example JSON object:
```json
{
	"name": "John",
	"email": "John@mail.com",
	"mobile": "1234567890",
	"company": "ABC"
}
```


### 1. POST
	To Create New Employee use following url with POST Request and pass the JSON object with data

```url
localhost:8081/api/employee
```

### 2. GET
	To Retrieve the list of all employees use the following url with GET Request

```url
localhost:8081/api/employee
```

	To Retrieve a particular employee with respect to their Id use the following url with GET Request

```url
localhost:8081/api/employee/id
```

### 3. PUT
	To Update a particular employee with respect to their Id use the following url with PUT Request and pass the JSON object with updated data

```url
localhost:8081/api/employee/id
```


### 4. DELETE
	To Delete a particular employee with respect to their Id use the following url with DELETE Request

```url
localhost:8081/api/employee/id
```


# Note - Replace with actual id