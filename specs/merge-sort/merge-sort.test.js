/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

// const mergeSort = (nums) => {
//   // base case, return if length 1 or 0
//   if (nums.length === 1 || nums.length === 0) return;

//   // break into 2 smaller arrays
//   const indexToSplit = nums.length / 2;
//   const left = nums.slice(indexToSplit);
//   const right = nums.slice(indexToSplit);

//   // call mergeSort() on left and right
//   const mergeSortResult = mergeSort(left, right);

//   // return the merge of left and right
//   return merge(mergeSortResult);
// };

// const merge = (sortedArr1, sortedArr2) => {

//   // return one sorted array
//   const combinedArr = [sortedArr1, sortedArr2];
  
//   return combinedArr.sort();
// }

const mergeSort = (nums) => {
  // base case, return if length 1 or 0
  if (nums.length < 2) {
    return nums;
  }

  // break into 2 smaller arrays
  const length = nums.length;
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  // call mergeSort() on left and right
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  
  // return the merge of left and right
  return merge(sortedLeft, sortedRight);
};

const merge = (sortedLeft, sortedRight) => {
  const results = [];

  while(sortedLeft.length && sortedRight.length) {
    if (sortedLeft[0] <= sortedRight[0]) {
      results.push(sortedLeft.shift());
    } else {
      results.push(sortedRight.shift());
    }
  }

  // return one sorted array
  return results.concat(sortedLeft, sortedRight)
}

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
