# Fetch API 
```plaintext
Fetch is the modern way to make HTTP requests ( Talk to Servers). It replaced the old XMLHttpRequest

--# Think of it like: Making a phone call to a resturant to ask about their menu

```
```
The Fetch API is a modern interface in JavaScript that allows you to make HTTP requests. It replaces the older XMLHttpRequest method and provides a cleaner and more flexible way to fetch resources asynchronously. The Fetch API uses Promises, making it easier to work with asynchronous data.

# Syntax

fetch(url, options)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
url: The API endpoint from which data is fetched.
options (optional): Specifies method, headers, body, etc.
response.json(): Parses the response as JSON.
.catch(error): Handles any errors that occur during the request.
```

```
How Fetch API Works?
A request is sent to the specified URL.
The server processes the request and sends a response.
The response is converted to JSON (or another format) using .json().
Errors are handled using .catch() or try-catch blocks.
Common HTTP Request Methods in Fetch API
GET: This request helps to retrieve some data from another server.
POST: This request is used to add some data onto the server.
PUT: This request is used to update some data on the server.
DELETE: This request is used to delete some data on the server.
```


```Javascript
fetch('https://fakestoreapi.com/products/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
```
```
fetch() sends an HTTP request to the specified URL.
.json() parses the response body as JSON.
.then() handles the resolved promise with the fetched data, and .catch() catches any errors (e.g., network issues).
```