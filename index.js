const _ = require("lodash");
const simpleArray = require("./data/simple-array.json");
const yogaClasses = require("./data/yoga.json");
const members = require("./data/members.json");
const newMember = require("./data/new-member");
const yogaByInstructor = require("./data/classes-by-instructor.json")

/**
 * Return the number of keys in an object
 * @param {Object} obj -
 * @return {number} The number of keys in the object
 */
function numberOfKeys(obj) {
  let keys = _.keys(obj);
  return keys.length;
};

/**
 * Remove the falsy values in a numbers array and return the sum
 * @param {numbers[]} array - An array of numbers that can also contain some falsy values
 * @return {number} The sum of the numbers in an array
 */
function sumNumbers(array) {
  let newNums = _.compact(array);
  let sumNums = _.sum(newNums);
  return sumNums;

};

/**
 * Convert a two-dimensional array of new member data (each inner array having two values: the first being the key, the second being the value) into an object
 * @param {Array[]} member -
 * @return {number} The sum of the numbers in an array
 */

//passed test, but I am not sure this is correct**
function newMemberArrayToObject(member) {
  return _.fromPairs(member);
};
console.log(newMemberArrayToObject())
/**
 * Return an array of objects that grouped by instructors from the classes array of objects
 * @param {Object[]} collection - an array of yoga class objects
 * @return {Object[]} - the reshaped collection where the classes are grouped by instructor name
 */
function groupClassByInstructor(collection) {
  let instructorGroup = _.groupBy(collection, "instructor");
  // console.log(instructorGroup)
  return instructorGroup;
};


/**
 * Remove the age key from the members array of object
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects, each one without the age field
 */
function omitAgeFromMembers(collection) {
  const newArr = [];
 // Iterate over each member and remove the "age" key
  _.forEach(collection, (member) => {
    let memberWithoutAge = _.omit(member, 'age');
    newArr.push(memberWithoutAge);
  });

  return newArr;
};

/**
 * Return the count of the number of classes a particular instructor teaches
 * @param {Object[]} collection - An array of yoga class objects
 * @param {String} instructorName - The name of the instructor
 * @return {number} The sum of the numbers in an array
 */
function countClassesByInstructor(collection, instructor) {
  let instructorClasses = _.filter(collection, { instructor });

  if (instructorClasses.length === 0) {
    return 'There is no instructor by that name.';
  }
    return instructorClasses.length;
};


/**
 * Remove inactive members from the members array
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects with only active members
 */
function removeInactiveMembers(collection) {
  //still can't figure this one out. 
};

/**
 * Get a list of unique class titles and their price
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that have a unique title and a price
 */
function getUniqueClasses(collection) {
  // Using _.uniqBy 
  let uniqueClasses = _.uniqBy(collection, 'title').map(classItem => {
    return {
      title: classItem.title,
      priceInCents: classItem.priceInCents
    };
  });

  return uniqueClasses;
}

/**
 * Get a list of classes organized by title, then by level.
 * The titles should be in ascending order, the levels should be in descending order
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that are organized by title then by level. The array should only have the title, instructor, and level fields
 */
function orderClassesByTitleAndLevel(collection) {
  let sortedClasses = _.orderBy(collection, ['title', 'level'], ['asc', 'desc']);
  let organizedClasses = _.map(sortedClasses, classItem => _.pick(classItem, ['title', 'instructor', 'level']));
  return organizedClasses;
}

module.exports = orderClassesByTitleAndLevel;



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
