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
  const keys = _.keys(obj);
  return keys.length;
}

/**
 * Remove the falsy values in a numbers array and return the sum
 * @param {numbers[]} array - An array of numbers that can also contain some falsy values
 * @return {number} The sum of the numbers in an array
 */
function sumNumbers(array) {
  let sum = 0;
  _.remove(array, (elt) => !elt);
  _.forIn(array, (elt) => sum += elt);

  return sum;
}

/**
 * Convert a two-dimensional array of new member data 
 * (each inner array having two values: the first being the key, the
 *  second being the value) into an object
 * @param {Array[]} member -
 * @return {number} The sum of the numbers in an array
 */
function newMemberArrayToObject(member) {
  return _.fromPairs(member);
}

/**
 * Return an array of objects that grouped by instructors from the classes array of objects
 * @param {Object[]} collection - an array of yoga class objects
 * @return {Object[]} - the reshaped collection where the classes are grouped by instructor name
 */
function groupClassByInstructor(collection) {
  // const sortedArr = 
  return _.groupBy(collection, (elt) => elt.instructor);
}

/**
 * Remove the age key from the members array of object
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects, each one without the age field
 */
function omitAgeFromMembers(collection) {
  return _.map(collection, (elt) => _.omit(elt, 'age'));
}

// console.log(omitAgeFromMembers(members));

/**
 * Return the count of the number of classes a particular instructor teaches
 * @param {Object[]} collection - An array of yoga class objects
 * @param {String} instructorName - The name of the instructor
 * @return {number} The sum of the numbers in an array
 */
function countClassesByInstructor(collection, instructor) {
  const countByInst = _.countBy(collection, (elt) => elt.instructor);
  const outCount = countByInst[instructor];
  
  if (!outCount) {
    return 'There is no instructor by that name.';
  } else {
    return outCount;
  }
}

// countClassesByInstructor(yogaClasses, 'Yin Yoga')
// console.log(countClassesByInstructor(yogaClasses, 'Yin Yoga'));

/**
 * Remove inactive members from the members array
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects with only active members
 */
function removeInactiveMembers(collection) {
  _.remove(collection, (elt) => elt.currentMember === false);
  return collection;
}

/**
 * Get a list of unique class titles and their price
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that have a unique title and a price
 */
function getUniqueClasses(collection) {
  const groupByTitle = _.groupBy(collection, (elt) => elt.title);
  const reducedMappedObject = _.forIn(groupByTitle, (value, key, object) => {
    object[key] = value[0].priceInCents}
    );

  const outArr = [];
  for (let k in reducedMappedObject) {
    const newObj = {
      'title': k,
      'priceInCents': reducedMappedObject[k]
    }
    outArr.push(newObj);
  }
  return outArr;
}

// getUniqueClasses(yogaClasses);

/**
 * Get a list of classes organized by title, then by level.
 * The titles should be in ascending order, the levels should be in descending order
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that are organized by title then by level. The array should only have the title, instructor, and level fields
 */
function orderClassesByTitleAndLevel(collection) {}

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
