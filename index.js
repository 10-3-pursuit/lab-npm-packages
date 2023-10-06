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
const numberOfKeys = obj => _.keys(obj).length

/**
 * Remove the falsy values in a numbers array and return the sum
 * @param {numbers[]} array - An array of numbers that can also contain some falsy values
 * @return {number} The sum of the numbers in an array
 */
const sumNumbers = array => _.chain(array).compact().reduce((acc, cur) => acc + cur, 0).value()

/**
 * Convert a two-dimensional array of new member data (each inner array having two values: the first being the key, the second being the value) into an object
 * @param {Array[]} member -
 * @return {number} The sum of the numbers in an array
 */
const newMemberArrayToObject = member => _.fromPairs(member)

/**
 * Return an array of objects that grouped by instructors from the classes array of objects
 * @param {Object[]} collection - an array of yoga class objects
 * @return {Object[]} - the reshaped collection where the classes are grouped by instructor name
 */
const groupClassByInstructor = collection => _.groupBy(collection, 'instructor')

/**
 * Remove the age key from the members array of object
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects, each one without the age field
 */
const omitAgeFromMembers = collection => _.chain(collection).map(member => _.omit(member, "age")).value()
// console.log(omitAgeFromMembers(members))

/**
 * Return the count of the number of classes a particular instructor teaches
 * @param {Object[]} collection - An array of yoga class objects
 * @param {String} instructorName - The name of the instructor
 * @return {number} The sum of the numbers in an array
 */
const countClassesByInstructor = (collection, instructor) => {
   const classesCount = _.reduce(collection, (acc, cur) => acc += cur.instructor === instructor ? 1 : 0, 0)
   return classesCount === 0 ? 'There is no instructor by that name.' : classesCount
}


/**
 * Remove inactive members from the members array
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects with only active members
 */
const removeInactiveMembers = collection => _.filter(collection, member => member.currentMember === true)

/**
 * Get a list of unique class titles and their price
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that have a unique title and a price
 */
const getUniqueClasses = collection => _.chain(collection).uniqBy(yogaClass => yogaClass.title).map(yogaClass => {
  return {'priceInCents': yogaClass.priceInCents,'title': yogaClass.title}
}).value()

/**
 * Get a list of classes organized by title, then by level.
 * The titles should be in ascending order, the levels should be in descending order
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that are organized by title then by level. The array should only have the title, instructor, and level fields
 */
const orderClassesByTitleAndLevel = collection => {}//_.chain(collection).sortBy(yogaClass => yogaClass.title)
// _.chain(collection).orderBy(['title', 'level'], ['asc', ('Beginner' < )])

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
