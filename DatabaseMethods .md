Firebase Realtime Database provides several methods and functions to interact with your database. Here is a list of some commonly used methods:

**1. Reference Methods:**

- `database.ref(path)`: Returns a reference to the location specified by the path.

**2. Reading Data:**

- `ref.on(eventType, callback)`: Listens for changes at the specified location. The callback function is called whenever data changes.
- `ref.once(eventType, callback)`: Reads data once from the specified location without listening for further changes.
- `snapshot.val()`: Returns the data from the snapshot.

**3. Writing Data:**

- `ref.set(data)`: Writes data to the location, overwriting any existing data.
- `ref.update(data)`: Updates the existing data with new data.
- `ref.push(data)`: Generates a new child location with a unique key and writes data to that location.

**4. Deleting Data:**

- `ref.remove()`: Removes the data at the location.

**5. Querying Data:**

- `ref.orderByChild(child)`: Orders data by a specified child key.
- `ref.orderByKey()`: Orders data by key.
- `ref.orderByValue()`: Orders data by value.
- `ref.limitToFirst(limit)`: Limits the number of results to the first `n` items.
- `ref.limitToLast(limit)`: Limits the number of results to the last `n` items.
- `ref.equalTo(value)`: Limits results to those with a specific value.

**6. Authentication and Security Rules:**

- `firebase.auth()`: Provides methods for managing user authentication.
- Security Rules: Define rules to secure your database and control access.

**7. Managing Connections:**

- `firebase.database().goOffline()`: Disconnect from the database.
- `firebase.database().goOnline()`: Reconnect to the database.

**8. Handling Errors:**

- Firebase provides error handling mechanisms for most database operations.

These are some of the core methods and functions used with Firebase Realtime Database. The Firebase documentation (https://firebase.google.com/docs/database) offers more details, examples, and additional methods for working with the database. The specific methods you'll use will depend on the requirements of your application and how you want to structure your data.