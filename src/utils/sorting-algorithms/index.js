import { getRandomInt, getArrayWithRandomNumbers, areArrayEqual } from "../arrays";

// Sorting Algorithms
import { bubbleSort } from "./bubbleSort";

const testSortingAlgorithm = () => {
  let res = { success: true, testArray: [], sortedArray: [] };

  for (let i = 0; i < 10; i++) {
    const length = getRandomInt(2, 100);

    const arr = getArrayWithRandomNumbers(length, 1, 100);

    const jsSortedArray = arr.slice().sort((a, b) => a - b);
    const sortedArray = bubbleSort(arr.slice(), false);

    if (!areArrayEqual(jsSortedArray, sortedArray)) {
      res = { success: false, testArray: arr, sortedArray: sortedArray };
      return false;
    }
  }

  if (res.success) {
    console.log("sorting algorithm works!");
  } else {
    console.log("issue found", res);
  }
};

export { testSortingAlgorithm, bubbleSort }