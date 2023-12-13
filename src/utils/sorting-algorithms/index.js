import { getRandomInt, getArrayWithRandomNumbers, areArrayEqual } from "../arrays";

// Sorting Algorithms
import { bubbleSort } from "./bubbleSort";
import { selectionSort } from "./selectionSort";

const swap = (arr, xIdx, yIdx) => {
  const temp = arr[yIdx];
  arr[yIdx] = arr[xIdx];
  arr[xIdx] = temp;
}

const testSortingAlgorithm = (sortingAlgorithm = "bubble-sort") => {
  let res = { success: true, testArray: [], sortedArray: [] };

  for (let i = 0; i < 1; i++) {
    const length = getRandomInt(5, 10);

    // const arr = getArrayWithRandomNumbers(length, 5, 1000);
    const arr = [10, 5, 3, 4, 2]

    const jsSortedArray = arr.slice().sort((a, b) => a - b);

    let sortedArray = null

    switch (sortingAlgorithm) {
      case "bubble-sort":
        sortedArray = bubbleSort(arr.slice(), false);
        break;

      case "selection-sort":
        sortedArray = selectionSort(arr.slice(), false);
        break;

      default:
        sortedArray = bubbleSort(arr.slice(), false);
        break;
    }


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

export {
  // Utility Functions
  swap,
  testSortingAlgorithm,

  // Sorting Algorithms
  bubbleSort,
  selectionSort
}