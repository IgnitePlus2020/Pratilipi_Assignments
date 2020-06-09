# Spring Boot CRUD API Using Cassandra

	Uses Cassandra container from Docker as the datasource
	Runs on server Tomcat on port 8080
	
## Once application has started successfully, we can test it by using POSTMAN or any other API testing tool:

Example JSON object:
```json
{
    "id": 4,
    "firstName": "Rose",
    "lastName": "Waters",
    "email": "rose@waters.com",
    "address": "#22, West California",
    "zipcode": "223344"
}
```


### 1. POST
	To Create a New User use following url with POST Request and pass the JSON object with data

```url
localhost:8081/api/user
```

### 2. GET
	To Retrieve the list of all users use the following url with GET Request

```url
localhost:8081/api/user
```

	To Retrieve a particular user with respect to their Id use the following url with GET Request

```url
localhost:8081/api/user/<id>
```

### 3. PUT
	To Update a particular user with respect to their Id use the following url with PUT Request and pass the JSON object with updated data along with Id

```url
localhost:8081/api/user/<id>
```


### 4. DELETE
	To Delete a particular user with respect to their Id use the following url with DELETE Request

```url
localhost:8081/api/user/<id>
```


# Note - Replace <id> with actual id