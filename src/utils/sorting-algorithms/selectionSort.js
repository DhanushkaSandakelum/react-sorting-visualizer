import { addAnimItem, playAnimation } from "../sortingAnimations";
import { swap } from ".";

// For Animations
let animList = [];
let enableVisualization = true;

const performSelectionSort = (inputArray = []) => {
  let arr = inputArray;
  const n = inputArray.length;
  var i, j, minIdx;

  for (i = 0; i < n - 1; i++) {
    minIdx = i;

    for (j = i + 1; j < n; j++) {
      // For Animations
      addAnimItem(animList, j, arr[j], minIdx, arr[minIdx], "compare", enableVisualization);

      if (arr[j] < arr[minIdx]) {
        minIdx = j;
        // For Animations
        addAnimItem(animList, j, arr[j], minIdx, arr[minIdx], "found", enableVisualization);
      }
    }

    swap(arr, minIdx, i);
    // For Animations
    addAnimItem(animList, i, arr[i], minIdx, arr[minIdx], "swap", enableVisualization);
  }

  return arr;
};

const selectionSort = (inputArray = [], enableVisualization = true) => {
  let arr = inputArray;

  animList = [];
  enableVisualization = enableVisualization;

  arr = performSelectionSort(arr);

  playAnimation(animList, enableVisualization);

  return arr;
};

export { selectionSort };
