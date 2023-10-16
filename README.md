# JavaScript Object Functions Project

This project focuses on implementing JavaScript functions to manipulate objects, such as retrieving keys and values, mapping object values, converting objects to key-value pairs, and more. The project aims to replicate the behavior of well-known libraries like Underscore.js while adhering to some of the principles in functional programming.

## Project Structure

The project is organized into several JavaScript files, with corresponding test files located in the `test` directory.

- **keys.js**: Contains a function to retrieve all property names (keys) from an object.
- **values.js**: Contains a function to retrieve all values from an object's own properties, excluding functions.
- **mapObject.js**: Contains a function to map object values using a provided callback function.
- **pairs.js**: Contains a function to convert an object into a list of [key, value] pairs.
- **invert.js** (Stretch): Contains a function to invert object properties into values and vice versa.
- **defaults.js** (Stretch): Contains a function to fill undefined properties in an object with default properties.

Test files are named accordingly, such as `testKeys.js`, `testValues.js`, `testMapObject.js`, etc.

## Running the Tests

You can run the tests to ensure that the functions are working correctly. Use the following commands to execute the tests:

```bash
node testKeys.js
node testValues.js
node testMapObject.js
# Run additional tests as needed for the other functions
