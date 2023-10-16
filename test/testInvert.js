const invert = require('../invert');

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const result = invert(testObject);
console.log(result); // Should log { 'Bruce Wayne': 'name', '36': 'age', 'Gotham': 'location' }
