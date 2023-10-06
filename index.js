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
  //_.KEYS IS PART OF LODASH METHOD WHICH RETURNS ALL THE KEYS INSIDE THE OBJECT AND .LENGTH TO RETURN THE NUMBER OF ITEMS.
  return _.keys(obj).length;
}
   

/**
 * Remove the falsy values in a numbers array and return the sum
 * @param {numbers[]} array - An array of numbers that can also contain some falsy values
 * @return {number} The sum of the numbers in an array
 */
function sumNumbers(array) {
  //_.SUM RETURNS THE SUM OF THE NUMBERS, COMBINE WITH _.COMPACT TO SUM UP THE NUMBERS IN THE ARRAY AFTER REMOVING THE FALSY VALUES.
  return _.sum(_.compact(array));
}

/**
 * Convert a two-dimensional array of new member data (each inner array having two values: the first being the key, the second being the value) into an object
 * @param {Array[]} member -
 * @return {number} The sum of the numbers in an array
 */
function newMemberArrayToObject(member) {
  // _.FROMPAIRS TAKES AN ARRAY OF PAIRS AND OBJECT FIRST VAULE TO A KEY AND SECOND TO VALUE
  return _.fromPairs(member)
}
 
/**
 * Return an array of objects that grouped by instructors from the classes array of objects
 * @param {Object[]} collection - an array of yoga class objects
 * @return {Object[]} - the reshaped collection where the classes are grouped by instructor name
 */
function groupClassByInstructor(collection) {
  // _.GROUPBY IT GROUPS THE COLLECTION WITH THE INSTRUCTOR
  return _.groupBy(collection, 'instructor')
}

/**
 * Remove the age key from the members array of object
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects, each one without the age field
 */
function omitAgeFromMembers(collection) {}
// return collection.map(member => _.omit(member, 'age'));
//}

/**
 * Return the count of the number of classes a particular instructor teaches
 * @param {Object[]} collection - An array of yoga class objects
 * @param {String} instructorName - The name of the instructor
 * @return {number} The sum of the numbers in an array
 */

//.FILTER FUNCTION FILTER THE COLLECTION.
//.SIZE TO GET THE NUMBER OF ELEMENTS IN THE ARRAY
function countClassesByInstructor(collection, instructor) {
  const instructorClasses = _.filter(collection, { instructor });
  const count = _.size(instructorClasses);
  // THIS LINE CHECKS IF THERE ARE CLASSES FOUND FOR THE GIVEN INSTRUCTOR
  if (count > 0) {
  // IF THERE ARE CLASSES FOUND RETURN
    return count;
  } else {
  // IF THE COUNT ISN'T GREATER THAN ZERO RETURN THIS
    return "There is no instructor by that name.";
  }
}


/**
 * Remove inactive members from the members array
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects with only active members
 */
function removeInactiveMembers(collection) {
  // .FILTER  TO FILTER THE COLLECTION ARRAY WITH CONDITION TRUE.
  return _.filter(collection, { currentMember: true });
}

/**
 * Get a list of unique class titles and their price
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that have a unique title and a price
 */
function getUniqueClasses(collection) {
  // MAKE A EMPTY OBJECT
  const uniqueClasses = {};
  // ITERATE THROUGH THE COLLECTION
  collection.forEach((yogaClass) => {
    // EXTRACT TITLE AND PRICE FROM THE CLASS 
    const { title, priceInCents } = yogaClass;
    // CHECK IF TITLE IS NOT ALREADY IN THE UNIQUECLASSES OBJECT
    if (!uniqueClasses[title]) {
      // IF NOT, ADD THE CLASS TO THE UNIQUECLASSES OBJECT 
      uniqueClasses[title] = { title, priceInCents };
    }
    // IF THE TITLE ALREADY EXISTS, YOU CAN CHOOSE TO HANDLE IT DIFFERENTLY 
  });
// CONVERT THE VALUES OF UNIQUECLASSES OBJECT TO AN ARRAY
  const result = Object.values(uniqueClasses);
  return result;
}


/**
 * Get a list of classes organized by title, then by level.
 * The titles should be in ascending order, the levels should be in descending order
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that are organized by title then by level. The array should only have the title, instructor, and level fields
 */
function orderClassesByTitleAndLevel(collection) {
  // .ORDERBY FUNCTION TO SORT COLLECTION ARRAY. ITS SORTS BY TWO CRITERIA FIRST BY TITLE IN ASCENDING ORDER AND THEN BY LEVEL IN DESCENDING
  const orderedClasses = _.orderBy(collection, ['title', 'level'], ['asc', 'desc']);

  // .MAP ITERATE OVER EACH CLASS IN THE ORDEREDCLASS ARRAY. IT EXTRACTS THE TITLE, INSTRUCTOR AND LEVEL  CREATES A NEW ARRAY.
  const result = orderedClasses.map(({ title, instructor, level }) => ({ title, instructor, level }));

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
