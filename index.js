const _ = require("lodash");
const simpleArray = require("./data/simple-array.json");
const yogaClasses = require("./data/yoga.json");
const members = require("./data/members.json");
const newMember = require("./data/new-member");
const { inspect } = require("node:util");
/**
 * Return the number of keys in an object
 * @param {Object} obj -
 * @return {number} The number of keys in the object
 */
const numberOfKeys = (obj) => _.keys(obj).length


/**
 * Remove the falsy values in a numbers array and return the sum
 * @param {numbers[]} array - An array of numbers that can also contain some falsy values
 * @return {number} The sum of the numbers in an array
 */
const sumNumbers = (array) => _.compact(array).reduce((acc, curr) => acc += curr,0)

/**
 * Convert a two-dimensional array of new member data (each inner array having two values: the first being the key, the second being the value) into an object
 * @param {Array[]} member -
 * @return {number} The sum of the numbers in an array
 */
const newMemberArrayToObject = (member) => _.fromPairs(member)

/**
 * Return an array of objects that grouped by instructors from the classes array of objects
 * @param {Object[]} collection - an array of yoga class objects
 * @return {Object[]} - the reshaped collection where the classes are grouped by instructor name
 */
const groupClassByInstructor = (collection) => _.groupBy(collection, obj => obj.instructor)

/**
 * Remove the age key from the members array of object
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects, each one without the age field
 */
function omitAgeFromMembers(collection) {
}


/**
 * Return the count of the number of classes a particular instructor teaches
 * @param {Object[]} collection - An array of yoga class objects
 * @param {String} instructorName - The name of the instructor
 * @return {number} The sum of the numbers in an array
 */
function countClassesByInstructor(collection, instructor) {
  const classes = _.filter(collection, {'instructor': instructor});

  return classes.length > 0 ? classes.length : `There is no instructor by that name.`
}


/**
 * Remove inactive members from the members array
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects with only active members
 */
const removeInactiveMembers = (collection) => _.filter(collection, {currentMember: true})

/**
 * Get a list of unique class titles and their price
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that have a unique title and a price
 */
function getUniqueClasses(collection) {
    const uniqueClasses = _.uniqBy(collection, 'title');
  
    const TitleAndPrice = _.map(uniqueClasses, obj => _.pick(obj, ['title', 'priceInCents']));
    
    return TitleAndPrice;
}

/**
 * Get a list of classes organized by title, then by level.
 * The titles should be in ascending order, the levels should be in descending order
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that are organized by title then by level. The array should only have the title, instructor, and level fields
 */
function orderClassesByTitleAndLevel(collection) {
  const newObj = _.map(collection, obj => _.pick(obj, ['instructor', 'level', 'title',]))

  return _.orderBy(newObj, ['title', 'level'], ['asc', 'desc'])
}
console.log(orderClassesByTitleAndLevel(yogaClasses))
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
