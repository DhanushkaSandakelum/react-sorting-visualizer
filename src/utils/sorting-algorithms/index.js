import { getRandomInt, getArrayWithRandomNumbers, areArrayEqual } from "../arrays";

// Sorting Algorithms
import { bubbleSort } from "./bubbleSort";
import { selectionSort } from "./selectionSort";
import { insertionSort } from "./insertionSort";

const swap = (arr, xIdx, yIdx) => {
  const temp = arr[yIdx];
  arr[yIdx] = arr[xIdx];
  arr[xIdx] = temp;
}

const testSortingAlgorithm = (sortingAlgorithm = "bubble-sort", testAmount = 10) => {
  console.log(`sorting algorithm: ${sortingAlgorithm}`);

  let testResults = []

  for (let i = 0; i < testAmount; i++) {
    const length = getRandomInt(5, 100);

    const arr = getArrayWithRandomNumbers(length, 5, 1000);
    // const arr = [10, 5, 3, 4, 2]

    const jsSortedArray = arr.slice().sort((a, b) => a - b);

    let sortedArray = null

    switch (sortingAlgorithm) {
      case "bubble-sort":
        sortedArray = bubbleSort(arr.slice(), false);
        break;

      case "selection-sort":
        sortedArray = selectionSort(arr.slice(), false);
        break;

      case "insertion-sort":
        sortedArray = insertionSort(arr.slice(), false);
        break;

      default:
        sortedArray = bubbleSort(arr.slice(), false);
        break;
    }


    if (areArrayEqual(jsSortedArray, sortedArray)) {
      testResults.push({ arrayLength: length, testArray: arr, sortedArray: sortedArray, status: "passed" })
    }
    else {
      testResults.push({ arrayLength: length, testArray: arr, sortedArray: sortedArray, status: "failed" })
    }
  }

  // Evaluate test results
  let passList = [];
  let failList = [];

  for (let i = 0; i < testResults.length; i++) {
    if (testResults[i].status === "passed")
      passList.push(i)

    if (testResults[i].status === "failed")
      failList.push(i)
  }

  if (failList.length === 0) {
    console.log("sorting algorithm works!");
    console.log(`${passList.length} tests passed`);
  } else {
    console.log("sorting algorithm fails!");
    console.log(`${passList.length} tests passed | ${failList.length} tests failed`);

    for (let i = 0; i < failList.length; i++) {
      const testRes = testResults[i];
      
      console.log(testRes);
    }
  }
};

export {
  // Utility Functions
  swap,
  testSortingAlgorithm,

  // Sorting Algorithms
  bubbleSort,
  selectionSort,
  insertionSort,
}