# Cars RESTful API

API built using MEN stack (MongoDB, Express, Nodejs) and server side templating handled through EJS to render frontend HTML.


## Running the demo

In terminal, start up MongoDB
```
mongod
```

In a separate terminal window start up the Nodejs
```
npm run start
```

A static HTML page containing a table of all cars is available at [localhost:3000/cars](http://localhost:3000/cars) and each row features a button that triggers an AJAX request to mark the car as sold.


## Future development?

React is certainly a possibility for frontend but could also be used server side instead of EJS (MERN stack).


## The Challenge

Build a RESTful API in Node.js using a web framework such as Express, Koa, or similar that performs CRUD operations against a document database (such as MongoDB).

Database will store Car documents with the following structure:

```
{
    _id: ObjectId,
    manufacturer: String,
    model: String,
    price: Double,
    acceleration: Double,
    topSpeed: Int,
    isSold: Boolean,
    createdAt: Date
}
```


### API Specifications

The API will only have just two routes:

```
/cars
/cars/:id
```

Each endpoint above should respond appropriately to the `GET`, `POST`, `PUT`, and `DELETE` HTTP methods (which mirror our CRUD operations against the database). For example:

`GET /cars` – returns a list of all Car objects stored in the collection

`DELETE /cards/507f191e810c19729de860ea` – deletes the specified Car object whose ID matches the `:id` parameter


### Nice things we would like to see
 - Correct use of HTTP methods for each API endpoint
 - Server-side validation prior to CRUD operation
 - Document validation of Car objects at DB-level (e.g. attaching MongoDB validators to a collection, or similar approach with whichever document store you choose)

### If you have the time...
 - A static page rendered server-side that returns an HTML table of all Cars
 - A button next to each car that triggers an AJAX request to mark the car as sold (`{ isSold: true }`)
 - React?!
 - Deploy!?
