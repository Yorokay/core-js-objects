// const entries = Object.entries([
//   { a: 1, b: 2 },
//   { b: 3, c: 5 },
// ]);

// const [key, value] = entries[0];

// console.log(key, value);

// function mergeObjects(objects) {
//   if (objects.length === 0) return {};
//   if (objects.length === 1) return objects;

//   return objects.reduce((acc, cur) => {
//     const objectEntries = Object.entries(cur);

//     for (let i = 0; i < objectEntries.length; i += 1) {
//       const [key, value] = objectEntries[i];

//       if (acc[key] === undefined) {
//         acc[key] = value;
//       } else {
//         acc[key] += value;
//       }
//     }
//     return acc;
//   }, {});
// }

// console.log(
//   mergeObjects([
//     { a: 1, b: 2 },
//     { b: 3, c: 5 },
//   ])
// );

// const arr = [25, 100];

// function isNice(tickets) {
//   let result = true;
//   tickets.reduce((acc, cur) => {
//     console.log(acc, cur);
//     if (cur - 25 > acc) {
//       result = false;
//     }
//     return acc + 25;
//   }, 0);

//   return result;
// }

// console.log(isNice(arr));

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.getArea = function () {
//     return width * height;
//   };
// }

// function Rectangle(width, height) {
//   return {
//     width,
//     height,
//     getArea() {
//       return this.width * this.height;
//     },
//   };
// }

// const r = new Rectangle(10, 20);

// console.log(r.getArea());
// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//     this.isCircle = true;
//   }
// }

// function fromJSON(proto, json) {
//   const jsonObject = JSON.parse(json);
//   Object.setPrototypeOf(jsonObject, proto);
//   console.log(Object.getPrototypeOf(new Circle()));
//   return jsonObject;
// }

// const obj = fromJSON(Circle.prototype, '{"radius":10}');

// console.log(obj);

// function sortCitiesArray(arr) {
// const sortedArr = arr.sort((a, b) => (a.country > b.country ? 1 : -1));
//   return arr
//     .sort((a, b) => (a.country > b.country ? 1 : -1))
//     .sort((a, b) => {
//       if (a.country === b.country) {
//         return b.city > a.city ? -1 : 1;
//       }
//       return 1;
//     });
// }

// console.log(
//   sortCitiesArray([
//     { country: 'Russia', city: 'Moscow' },
//     { country: 'Belarus', city: 'Minsk' },
//     { country: 'Poland', city: 'Warsaw' },
//     { country: 'Russia', city: 'Saint Petersburg' },
//     { country: 'Poland', city: 'Krakow' },
//     { country: 'Belarus', city: 'Brest' },
//   ])
// );

// const arrayOfObjects = [
//   { country: 'Russia', city: 'Moscow' },
//   { country: 'Belarus', city: 'Minsk' },
//   { country: 'Poland', city: 'Warsaw' },
//   { country: 'Russia', city: 'Saint Petersburg' },
//   { country: 'Poland', city: 'Krakow' },
//   { country: 'Belarus', city: 'Brest' },
// ];

// const sortedArr = sortCitiesArray(arrayOfObjects);
// console.log(sortedArr);

// console.log(sortedArr[2].city < sortedArr[3].city);

// console.log(
//   sortCitiesArray(arrayOfObjects)[5].city >
//     sortCitiesArray(arrayOfObjects)[4].city
// );

// console.log(
//   arrayOfObjects.sort((a, b) => {
//     // console.log(a.country, b.country);
//     return a.country > b.country ? 1 : -1;
//   })

//   arrayOfObjects
// );

// console.log(arrayOfObjects[1].country > arrayOfObjects[2].country);

// const matrix = [
//   ['k', 5],
//   [true, 'lol'],
// ];

// console.log(new Map(matrix));

function group(array, keySelector, valueSelector) {
  const countriesMap = new Map();
  const countriesArr = array.map(keySelector);
  const citiesArr = array.map(valueSelector);

  countriesArr.forEach((country, index) => {
    if (countriesMap.get(country) === undefined) {
      countriesMap.set(country, [citiesArr[index]]);
    } else {
      countriesMap.get(country).push(citiesArr[index]);
    }
  });
  return countriesMap;
}

console.log(
  group(
    [
      { country: 'Belarus', city: 'Brest' },
      { country: 'Russia', city: 'Omsk' },
      { country: 'Russia', city: 'Samara' },
      { country: 'Belarus', city: 'Grodno' },
      { country: 'Belarus', city: 'Minsk' },
      { country: 'Poland', city: 'Lodz' },
    ],
    (item) => item.country,
    (item) => item.city
  )
);
