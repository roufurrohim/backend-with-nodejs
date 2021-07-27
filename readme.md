# BACKEND APP WITH NODEJS

Cara instalasi sebagai berikut:

- Clone repository ini

```
https://github.com/roufurrohim/backend-with-nodejs.git
```

- Instalasi depedensi :

```
npm init
npm install express body-parser dot-env mysql2 nodemon
```

## API DOCUMENTATION

**Standard API**

```
    - using: http://localhost:5000/{endpoint}?{query}
    - endpoint: "/users" | "/products" | "/category"
```

1. Read all data

```
    path: method(GET) http://localhost:5000/{endpoint}
```

2. Search data

```
    path: method(GET) http://localhost:5000/{endpoint}?search={name-products}
```

3. Create data

```
    path: method(POST) http://localhost:5000/{endpoint}
```

4. Update data

```
    path: method(PATCH) http://localhost:5000/{endpoint}/{id}
```

5. Delete data

```
    path: method(DELETE) http://localhost:5000/{endpoint}/{id}
```

**Standard Status Response**

| Status Code | Description                             |
| :---------- | :-------------------------------------- |
| 200         | `Get all success`                       |
| 201         | `Created data success`                  |
| 400         | `Error on client side (input false)`    |
| 404         | `Data not found`                        |
| 502         | `Invalid response from another request` |
