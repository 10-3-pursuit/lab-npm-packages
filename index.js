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
  //_.keys(obj) returns an array of the own enumerable property names of the object obj
  return _.keys(obj).length;
};

/**
 * Remove the falsy values in a numbers array and return the sum
 * @param {numbers[]} array - An array of numbers that can also contain some falsy values
 * @return {number} The sum of the numbers in an array
 */
function sumNumbers(array) {
  // _.compact() removes all falsy values (like null, false, 0, "", undefined, and NaN) from the array
  // _.sum() sums all the numbers in the compacted array
  return _.sum(_.compact(array));
};

/**
 * Convert a two-dimensional array of new member data (each inner array having two values: the first being the key, the second being the value) into an object
 * @param {Array[]} member - two-dimensional array containing new members
 * @return {number} The sum of the numbers in an array
 */
function newMemberArrayToObject(member) {
  // _.fromPairs takes a two-dimensional array and converts it into an object, where each inner array's first element becomes the key and the second element becomes the value.
  return _.fromPairs(member);
};

/**
 * Return an array of objects that grouped by instructors from the classes array of objects
 * @param {Object[]} collection - an array of yoga class objects
 * @return {Object[]} - the reshaped collection where the classes are grouped by instructor name
 */
function groupClassByInstructor(collection) {
   // _.groupBy() groups the given collection by the 'instructor' property
   return _.groupBy (collection, "instructor");
};

/**
 * Remove the age key from the members array of object
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects, each one without the age field
 */
function omitAgeFromMembers(collection) {} // ignore for this particular assignment. Test not provided

/**
 * Return the count of the number of classes a particular instructor teaches
 * @param {Object[]} collection - An array of yoga class objects
 * @param {String} instructorName - The name of the instructor
 * @return {number} The sum of the numbers in an array
 */
function countClassesByInstructor(collection, instructor) {
  // use _.filter() to get only classes with given instructor
  // use _.size() to get the number of classes with the given instructor
  // _.filter(collection, {instructor}); is implicit way of writing _.filter(collection, function(item) {return item.instructor === instructor;});
  const instructorClasses = _.filter(collection, {instructor}); // {instructor} still gets interpreted as if it were to have both a key and value pair in ES6
  const count = _.size(instructorClasses);
  if (count > 0) {
    return count;
  } else return "There is no instructor by that name.";
};

/**
 * Remove inactive members from the members array
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects with only active members
 */
function removeInactiveMembers(collection) {
  // currentMember is a key in object located in members.json. Each member has this key aka property
  // if true, member has property currentMember which means member is active
  // _.filter() checks if each element in array meets criteria indicated in 2nd parameter, if it does it gets added to new array. Once _.filter() finishes iterating it'll return the new array with the elements that matched criteria
  return _.filter(collection, {currentMember: true});
};

/**
 * Get a list of unique class titles and their price
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that have a unique title and a price
 */
function getUniqueClasses(collection) {}

/**
 * Get a list of classes organized by title, then by level.
 * The titles should be in ascending order, the levels should be in descending order
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that are organized by title then by level. The array should only have the title, instructor, and level fields
 */
function orderClassesByTitleAndLevel(collection) {
  // Use _.orderBy function to sort the collection:
  // - First by 'title' in ascending order 'asc'
  // - Then by 'level' in descending order 'desc'
  // - Then use .map to get only "title", "instructor", "level"
  const orderedClasses = _.orderBy(collection, ['title','level'], ['asc', 'desc']); // 1st param is array, 2nd is where the keys from array of obj go, 3rd is the order directions
  return orderedClasses.map(({title, instructor, level}) => ({title, instructor, level})); // it doesn't return number of keys in an obj rather it returns array of obj organized by title and level including instructor field
};

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