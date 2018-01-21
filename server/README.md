# Sample API


## Starting

Just run `npm install` and then start the server `npm start`

## Endpoints

### GET
GET `/addresses` Returns a list with the existing addresses

**Example response**:
```
[
    {
        "id": 1,
        "line2": "",
        "county": "",
        "title": "Miss",
        "name": "Full User Name",
        "line1": "Line 1 of the user's address",
        "town": "London",
        "postcode": "ABC123",
        "phone": "07999887777"
    },
    {
        "id": 2,
        "line2": "",
        "county": "",
        "title": "Mr",
        "name": "Another full user name",
        "line1": "Line 1 of the user's address",
        "town": "Leeds",
        "postcode": "ABC123",
        "phone": "07999887777"
    }
]
```

### POST
POST `/addresses` inserts a new Address in our "database"

**Responses:**

* Returns `200` on success, alongside with the inserted address
* Returns `422` when there's a  validation error

The request body should be something like this:
```
{
    "line2": optional
    "county": optional,
    "title": required,
    "name": required,
    "line1": required,
    "town": required,
    "postcode": required,
    "phone": required
}
```
### PUT
PUT `/addresses/:id` updates an address by it's id

**Responses**:

* Returns `200` on success, alongside with the edited address
* Returns `404` when the id Address doesn't exist
* Returns `422` when there's a  validation error

The request body is the same as the POST method.

### DELETE
DELETE `/addresses/:id` Deletes an address by it's id

**Responses**:

* Returns `204` on success
* Returns `404` when the id Address doesn't exist
