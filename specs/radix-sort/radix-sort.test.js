/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

// number: 1331, place: 0, longestNumber: 3
function getDigit(number, place, longestNumber) {
  const string = number.toString();
  const size = string.length;

  const mod = longestNumber - size;
  return string[place - mod] || 0;
}

function getLongestNumber(array) {
  let longest = 0;

  for (let i = 0; i < array.length; i++) {
    const currentLength = array[i].toString().length;
    longest = currentLength > longest ? currentLength : longest;
  }

  return longest;
}

// function radixSort(array) {
//   // find longest number
//   const longsetNum = getLongestNumber(array);

//   // create how many buckets you need
// for (let i = 0; i < longsetNum.length; i++) {
//   const buckets = longsetNum[i];
//   return buckets
// }
//   // an array of 10 arrays
//   for (bucket in buckets) {
//     new Array(bucket);
//   }

//   // for loop for how many interations you need
//   // while loop  
//   // enqueue the numbers into their buckets
//   while (buckets.length) {
//     buckets[i] = buckets[i].push(array[i]);
//   }

//   // for loop for each bucket
//   // dequeue all of the results
//   for (bucket in buckets) {
//     buckets[i].unshift(array[i])
//   }
// }

function radixSort(array) {
  // find the longest number
  const longestNumber = getLongestNumber(array);

  // create needed buckets  
  // an array of 10 arrays
  const buckets = new Array(10).fill().map(() => []);

  for (let i = longestNumber - 1; i >= 0; i--) {
    while (array.length) {
      const current = array.shift()
      buckets[getDigit(current, i, longestNumber)].push(current);
    }

    for (let j = 0; j < 10; j++) {
      while (buckets[j].length) {
        array.push(buckets[j].shift());
      }
    }
  }

  return array;
}

// unit tests
// do not modify the below code
describe("radix sort", function () {
  it("should sort correctly", () => {
    const nums = [
      20,
      51,
      3,
      801,
      415,
      62,
      4,
      17,
      19,
      11,
      1,
      100,
      1244,
      104,
      944,
      854,
      34,
      3000,
      3001,
      1200,
      633
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1,
      3,
      4,
      11,
      17,
      19,
      20,
      34,
      51,
      62,
      100,
      104,
      415,
      633,
      801,
      854,
      944,
      1200,
      1244,
      3000,
      3001
    ]);
  });
  it("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort());
  });
});
