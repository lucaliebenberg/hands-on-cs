/*

  Quick Sort!
  
  Name your function quickSort.
  
  Quick sort should grab a pivot from the end and then separate the list (not including the pivot)
  into two lists, smaller than the pivot and larger than the pivot. Call quickSort on both of those
  lists independently. Once those two lists come back sorted, concatenate the "left" (or smaller numbers)
  list, the pivot, and the "right" (or larger numbers) list and return that. The base case is when quickSort
  is called on a list with length less-than-or-equal-to 1. In the base case, just return the array given.

*/

// function quickSort(nums) {
//   // base case, array of length 1 or 0
//   if (nums.length < 2) {
//     return nums;
//   }

//   // choose pivot
//   const pivot = nums[nums.length - 1];

//   // separate into left and right arrays
//   const left = [];
//   const right = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < pivot){
//       left.push(nums[i]);
//     } else {
//       right.push(nums[i]);
//     }
//     return left, right
//   }

//   // call quickSort on left and right
//   const sortedLeft = quickSort(left);
//   const sortedRight = quickSort(right);

//   // return left.concat(pivot, right)
//   return sortedLeft.concat(pivot, sortedRight);
// }

function quickSort(nums) {
  if (nums.length <= 1){ // (length 0 | length 1)
    return nums;
  }

  const pivot = nums[nums.length - 1];
  // or
  // const pivot = nums.pop();
  // then can use ' for x in nums ' ( as pivot will not be included in nums )

  const left = [];
  const right = [];

  for (let i = 0; i < nums.length - 1; i++){ // NOTE: need to -1 from length, so 'pivot' is not included
    if (nums[i] < pivot){
      left.push(nums[i]);
    } else {
      right.push(nums[i])
    }
  }

  const sortedLeft = quickSort(left); // these are pointers
  const sortedRight = quickSort(right); // these are pointers

  return sortedLeft.concat(pivot, sortedRight);
  // return [...quickSort(left), pivot, ...quickSort(right)] // could do this for a 1 liner
}

// unit tests
// do not modify the below code
test("quickSort", function () {
  const input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
  const answer = quickSort(input);

  expect(answer).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
