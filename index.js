const _ = require("lodash");
const simpleArray = require("./data/simple-array.json");
const yogaClasses = require("./data/yoga.json");
const members = require("./data/members.json");
const newMember = require("./data/new-member");

/**
 * Return the number of keys in an object
 * @param {Object} obj -
 * @return {number} The number of keys in the object
 */
function numberOfKeys(obj) {
  // use the _.keys() method to create an array of all keys and then used the .length() method to return the number of elements in the array and then we're returning this value 
  return _.keys(obj).length
}

/**
 * Remove the falsy values in a numbers array and return the sum
 * @param {numbers[]} array - An array of numbers that can also contain some falsy values
 * @return {number} The sum of the numbers in an array
 */
function sumNumbers(array) {
  // Use the _.compact method which creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
  // use the _sum() method which adds sum of array 
  return _.sum(_.compact(array))
}

/**
 * Convert a two-dimensional array of new member data (each inner array having two values: the first being the key, the second being the value) into an object
 * @param {Array[]} member -
 * @return {number} The sum of the numbers in an array
 */
function newMemberArrayToObject(member) {
  // used the _.fromPairs() method in order to return an object composed from key-value pairs.
  return _.fromPairs(member)
}

/**
 * Return an array of objects that grouped by instructors from the classes array of objects
 * @param {Object[]} collection - an array of yoga class objects
 * @return {Object[]} - the reshaped collection where the classes are grouped by instructor name
 */
function groupClassByInstructor(collection) {
  // used the _.groupBy() Creates an object composed of keys generated from the results of running each element of collection thru iteratee. The order of grouped values is determined by the order they occur in collection. The corresponding value of each key is an array of elements responsible for generating the key. The iteratee is invoked with one argument: (value).
  return _.groupBy(collection, "instructor"); 
}

/**
 * Remove the age key from the members array of object
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects, each one without the age field
 */
function omitAgeFromMembers(collection) {}

/**
 * Return the count of the number of classes a particular instructor teaches
 * @param {Object[]} collection - An array of yoga class objects
 * @param {String} instructorName - The name of the instructor
 * @return {number} The sum of the numbers in an array
 */
function countClassesByInstructor(collection, instructor) {
  // used the _.filter() which iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).
  //intialized a variable which will house the an array of elements that filtered the instructors keys in the character objects 
  const instructorClassesArray = _.filter(collection, { instructor }); 
  // initialized a variable using _.size() method which finds length of an array 
  const countOfClasses = _.size(instructorClassesArray); 
    if (countOfClasses > 0) {
      return countOfClasses;
    } else {
      return "There is no instructor by that name.";
    }
}

/**
 * Remove inactive members from the members array
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects with only active members
 */
function removeInactiveMembers(collection) {
  //use _.filter() method to filter through the array and only return an array that meets are condition of active members 
  return _.filter(collection, { currentMember: true })
}

/**
 * Get a list of unique class titles and their price
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that have a unique title and a price
 */
function getUniqueClasses(collection) { 
 // initialized a variable and set it equal to an array of objects grouped by the "title" property
 const groupedClasses = _.groupBy(collection, 'title');

 //initialized a variable that uses _.map() method Map over the grouped classes and it selects the first item of each group 
 const result = _.map(groupedClasses, (classes) => {
   const { title, priceInCents } = classes[0];
   //will return the unique class titles and prices
   return { title, priceInCents };
 });

  return result;
}

/**
 * Get a list of classes organized by title, then by level.
 * The titles should be in ascending order, the levels should be in descending order
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that are organized by title then by level. The array should only have the title, instructor, and level fields
 */
function orderClassesByTitleAndLevel(collection) {
  //initialize a variable that will store the sorted data of the collection array using the _.orderBy() method, mthe 2nd argument wills specify sorting priority, 3rd argument is for ascending to descending orders
  const orderedClasses = _.orderBy(collection, ['title', 'level'], ['asc', 'desc']);
  // this stores our result using the _.map() method to extract the properties we want and create a special array 
  const result = _.map(orderedClasses, ({ title, instructor, level }) => ({ title, instructor, level }));
 
  //returns the new array
  return result; 
}

module.exports = {
  numberOfKeys,
  sumNumbers,
  newMemberArrayToObject,
  groupClassByInstructor,
  omitAgeFromMembers,
  countClassesByInstructor,
  removeInactiveMembers,
  getUniqueClasses,
  orderClassesByTitleAndLevel,
};
