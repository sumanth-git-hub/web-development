//different patterns of redux challenges for interview

// Sum Numbers using reduce

const numbersSum = [5, 15, 25, 35];

const findSum = numbersSum.reduce((acc, cur) => acc + cur);
console.log(findSum);

//Find Maximum Value using Reduce

const numbersMax = [12, 45, 7, 89, 23];

const findMax = numbersMax.reduce((acc, cur) => (acc > cur ? acc : cur));
console.log(findMax);

//Count Occurrences using Reduce

const fruitsOccurrence = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "apple",
];

const findOccurrence = fruitsOccurrence.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});
console.log(findOccurrence);

//Flatten Array using reduce

const arrNested = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];

const flatArray = arrNested.reduce((acc, cur) => {
  return acc.concat(cur);
}, []);

console.log(flatArray);

// Extract Values using reduce, Convert to an array of ages.

const usersSort = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Mike", age: 28 },
];

const sortByAge = usersSort.reduce((acc, cur) => {
  acc.push(cur.age);
  return acc;
}, []);
console.log(sortByAge);

//Convert this into an object using id as key using reduce

const usersArray = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Mike" },
];

const convertObject = usersArray.reduce((acc, cur) => {
  acc[cur.id] = cur;
  return acc;
}, {});
console.log(convertObject);

//Group by Property by using the reduce

const people = [
  { name: "Alice", city: "Bangalore" },
  { name: "Bob", city: "Hyderabad" },
  { name: "Charlie", city: "Bangalore" },
  { name: "David", city: "Hyderabad" },
];

const groupPeople = people.reduce((acc, cur) => {
      const { name, city } = cur;
  if (!acc[city]) {
    acc[city] = [];
  }
  acc[city].push(name);
  return acc;
}, {});
console.log(groupPeople);


// Conditional Counting using reduce

const numbersCondition = [2,5,8,11,14,17];

const conditionalCount = numbersCondition.reduce((acc, cur) => {
    if(cur > 10){
   acc++
    }
    return acc
}, 0)

console.log(conditionalCount)

// Aggregate Totals by Category by using reduce

const orders = [
 {product:"Book", price:500, category:"education"},
 {product:"Pen", price:50, category:"education"},
 {product:"Shirt", price:1500, category:"clothing"},
 {product:"Jeans", price:2000, category:"clothing"}
];

const aggregateByCategory = orders.reduce((acc, cur) => {
    const {price, category} = cur
    acc[category] = (acc[category] || 0) + price
    return acc

}, {})

console.log(aggregateByCategory)