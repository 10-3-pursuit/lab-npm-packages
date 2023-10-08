const _ = require("lodash");
const simpleArray = require("./data/simple-array.json");
const yogaClasses = require("./data/yoga.json");
const members = require("./data/members.json");
const newMember = require("./data/new-member");

/**
 * Return the number of keys in an object
 * @param {Object} obj -
 * @return {number} The number of keys in the object
 *//**This code calculates the number of keys in a given object.
This declares a function named numberOfKeys that takes one parameter
(obj), which is expected to be an object.
Object.keys is a built-in JavaScript method that returns an array of a
given object's own enumerable property names (keys).
Object.keys(obj) returns an array, and .length is used to get the
number of elements in that array. This number represents the count of
keys in the object.
The function returns the count of keys in the object. */
function numberOfKeys(obj) {
  return Object.keys(obj).length;  //  .length represents array
}

/** filter out falsy values = 0,NaN, undefined, null, '',calculate the sum
 * 
 * Remove the falsy values in a numbers array and return the sum
 * @param {numbers[]} array - An array of numbers that can also contain some falsy values
 * @return {number} The sum of the numbers in an array
 */
//declared function sumNumbers takes in one parameter which is nan array
function sumNumbers(array) {
/**filter method is used on the array to create a new array(filteredNumbers) that contains only the trthy values
 * callback function (num) => !!num is used to convert each value to a boolean. double negation (!!) ensures that the value is coerced to its corresponding boolean representation. */
  const filteredNumbers = array.filter((num) => !!num);
  /**falsy values(0,NaN,undefined,null) are filtered out, and only truthy values are retained.*/
  const sum = filteredNumbers.reduce((acc, num) => acc + num, 0);
  /**The reduce method is employed to iterate over the filteredNumbers
array and accumulate the sum.
The callback function (acc, num) => acc + num is applied to each
element in the array. It takes two parameters: acc (the accumulator,
which holds the running sum) and num (the current number being
processed). It adds the current number to the accumulator.
The reduce method also takes an initial value for the accumulator,
specified as the second argument (0 in this case). */
  return sum;
}

  /**
   function sumNumbers(array) {
  return _.sum(_.compact(array))
}*//**This declares a function named sumNumbers that takes one parameter,
which is expected to be an array (array) containing numbers, including
potentially falsy values._.compact is a lodash function that creates a
new array with all falsy values removed. In this case, it filters out
elements in the array that are considered falsy.
_.sum is a lodash function that calculates the sum of an array of
numbers. It takes an array as an argument.Putting It Together:
The function returns the sum of the array after removing falsy values.
It does so by first using _.compact(array) to filter out falsy values
and then applying _.sum to calculate the sum of the remaining numbers. */

/**
 * Convert a two-dimensional array of new member data (each inner array having two values: the first being the key, the second being the value) into an object
 * @param {Array[]} member -
 * @return {number} The sum of the numbers in an array
 */
/**This declares a function named newMemberArrayToObject that takes one
parameter (member), which is expected to be an array of
two-dimensional arrays where each inner array contains two values: the
key and the value.
 */
function newMemberArrayToObject(member) {
  /**The reduce method is applied to the member array.
The callback function (obj, [key, value]) => {...} is called for each
element in the array. */
  const resultObject = member.reduce((obj, [key, value]) => {
    /**obj is the accumulator, which starts as an empty object {}.
[key, value] is the destructuring assignment of each inner array.
obj[key] = value; assigns the value to the key in the accumulator object.
The accumulator object is returned for the next iteration. */
    obj[key] = value;
    return obj;
  }, {});
  /**Finally, the function returns the resulting object. */
  return resultObject;
}




/**This declares a function named newMemberArrayToObject that takes one
parameter (member), which is expected to be an array of
two-dimensional arrays where each inner array contains two values: the
key and the value.
_.fromPairs is a lodash function that creates an object from an array
of key-value pairs.
member is the input array containing key-value pairs.
 */
/**
 function newMemberArrayToObject(member) {
  return _.fromPairs(member)
}
*/

/**
 * Return an array of objects that grouped by instructors from the classes array of objects
 * @param {Object[]} collection - an array of yoga class objects
 * @return {Object[]} - the reshaped collection where the classes are grouped by instructor name
 */

/**This declares a function named groupClassByInstructor that takes one
parameter (collection), which is expected to be an array of yoga class
objects.
*/
function groupClassByInstructor(collection) {
  /** The reduce method is applied to the collection array.
The callback function (result, yogaClass) => {...} is called for each
element in the array.*/
  return collection.reduce((result, yogaClass) => {
    /**result is the accumulator, which starts as an empty object {}.
yogaClass is the current class object being processed.
The instructor variable is assigned the value of the instructor
property from the current yogaClass object. */
    const instructor = yogaClass.instructor;
    /**This conditional statement checks if the instructor is not already a key in the result object.
 */
    if (!result[instructor]) {
      /**If not, it creates a new key in the result object with the
instructor's name and assigns an empty array as its value. This array
will be used to store the classes taught by that instructor.After
ensuring that the instructor is a key in the result object, the
current yogaClass is added to the corresponding instructor's */
      result[instructor] = [];
    }
    result[instructor].push(yogaClass);
    /**array.Finally, the function returns the resulting object, where
classes are grouped by instructor name.*/
    return result;
  }, {});
 }





 /**This declares a function named groupClassByInstructor that takes one
parameter (collection), which is expected to be an array of yoga class
objects.
_.groupBy is a lodash function that groups elements of a collection by
a specified key.
collection is the array of yoga class objects.
"instructor" is the key by which the classes will be grouped.
 */
/**
 function groupClassByInstructor(collection) { 
  return _.groupBy(collection, "instructor");
}*/

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
/**This declares a function named countClassesByInstructor that takes two
parameters: collection, an array of yoga class objects, and
instructorName, a string representing the name of the instructor. */
function countClassesByInstructor(collection, instructor) {
  /**The filter method is applied to the collection array. It creates a new array (classesByInstructor) containing only the classes taught by the specified instructor (instructorName). */
  const classesByInstructor = collection.filter(yogaClass => yogaClass.instructor === instructor);
  /**This if statement checks if the length of the classesByInstructor
array is 0. If it is, it means no classes were found for the specified
instructor.
In that case, the function returns the string 'There is no instructor
by that name.'
 */
  if (classesByInstructor.length === 0) {
    return "There is no instructor by that name.";
  }
  /**If the instructor is found, the function calculates the number of
classes by getting the length of the classesByInstructor array.
It then returns the count of classes */
  const numberOfClasses = classesByInstructor.length;
return numberOfClasses;
}


/**This declares a function named countClassesByInstructor that takes two
parameters: collection, an array of yoga class objects, and
instructor, a string representing the name of the instructor. */
/**function countClassesByInstructor(collection, instructor) {
 * /**_.filter is a lodash function used to filter elements in a collection
based on a condition.
Here, it filters the collection array to include only the classes
taught by the specified instructor (instructor).
 */
  /**const instructorClasses = _.filter(collection, { instructor });
   * /**_.size is a lodash function that returns the size (length) of a collection.
It is used here to get the count of classes in the instructorClasses array. */
 /** const count = _.size(instructorClasses);
  if (count > 0) {
    return count;
  } else {
    return "There is no instructor by that name.";
  }
}
*/
/**This if statement checks if the count of classes (count) is greater
than 0. If it is, it means classes were found for the specified
instructor.
If classes are found, the function returns the count of classes.
Otherwise, it returns the string 'There is no instructor by that
name.' */



/**
 * Remove inactive members from the members array
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects with only active members
 */
/**function removeInactiveMembers(collection) {
 * 
  return collection
  .filter(member => member.isActive)
  .map(activeMember => {
    const keysCount = Object.keys(activeMember).length;
    return { ...activeMember, keysCount };
  });
  }*/
  /**This function uses lodash's _.filter method to remove inactive members
from a collection of member objects. It assumes that the
"currentMember" property in each member object is used to indicate
whether a member is active or not.
This declares a function named removeInactiveMembers that takes one
parameter (collection), which is expected to be an array of member
objects.
 */
function removeInactiveMembers(collection) {
  /**_.filter is a lodash function used to filter elements in a collection
based on a condition.
collection is the array of member objects.
{ currentMember: true } is the condition. It filters the collection to
include only those members where the "currentMember" property is true.
 */
    return _.filter(collection, { currentMember: true });
  }

/**
 * Get a list of unique class titles and their price
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that have a unique title and a price
 */
function getUniqueClasses(collection) {
  const uniqueClasses = _.uniqWith(collection, (obj1, obj2) => {
    return obj1.title === obj2.title && obj1.priceIncents === obj2.priceInCents;
  }); 
  return uniqueClasses;
}
  //const uniqueClasses = {};
  //collection.forEach((yogaClass) => {
    //const title = yogaClass.title;
    //const price = yogaClass.price;
    //if (!(title in uniqueClasses)) {
      //uniqueClasses[title] = price;
    //}
  //});

  //const result = Object.keys(uniqueClasses).map((title) => ({
    //title: title,
    //price: uniqueClasses[title]
  //}));
  //return result;
//}

/**`
 * Get a list of classes organized by title, then by level.
 * The titles should be in ascending order, the levels should be in descending order
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that are organized by title then by level. The array should only have the title, instructor, and level fields
 */
/**This function uses lodash's _.orderBy method to sort a collection of
yoga class objects first by the "title" property in ascending order
('asc'), and then within each title, by the "level" property in
descending order ('desc'). After ordering, it maps the result to a new
array of objects containing only the "title," "instructor," and
"level" properties.

This declares a function named orderClassesByTitleAndLevel that takes
one parameter (collection), which is expected to be an array of yoga
class objects. */
function orderClassesByTitleAndLevel(collection) {
  /**_.orderBy is a lodash function used to order elements in a collection
based on specified properties and orders.
collection is the array of yoga class objects.
['title', 'level'] specifies the properties by which to order the
classes. First, by "title," and then within each "title," by "level."
['asc', 'desc'] specifies the order for each property. "asc" for
ascending and "desc" for descending.
 */
  const orderedClasses = _.orderBy(collection, ['title', 'level'], ['asc', 'desc']);
  /**The map method is used to create a new array (result) by iterating
over each object in the orderedClasses array.
The arrow function ({ title, instructor, level }) => ({ title,
instructor, level }) is used to extract and create a new object with
only the specified properties */
  const result = orderedClasses.map(({title, instructor, level}) => ({title, instructor, level}));
  /**The resulting orderedClasses array will be sorted first by "title" in
ascending order and then within each "title," by "level" in descending
order.
In summary, the function orderClassesByTitleAndLevel efficiently uses
lodash's _.orderBy method to sort a collection of yoga class objects
based on specified properties and orders. It then maps the result to a
new array of objects with a subset of properties. */
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
