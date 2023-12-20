import { addAnimItem, playAnimation } from "../sortingAnimations";
import { swap } from ".";

// For Animations
let animList = [];
let enableVisualization = true;

const partition = (arr, low, high) => {
  let pivot = arr[high];

  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    // For Animations
    addAnimItem(animList, j, arr[j], high, arr[high], "compare", enableVisualization);

    if (arr[j] < pivot) {
      // For Animations
      addAnimItem(animList, j, arr[j], high, arr[high], "found", enableVisualization);

      i++;

      swap(arr, i, j);

      // For Animations
      addAnimItem(animList, i, arr[i], j, arr[j], "swap", enableVisualization);
    }
  }

  swap(arr, i + 1, high);

  // For Animations
  addAnimItem(animList, i + 1, arr[i + 1], high, arr[high], "swap", enableVisualization);

  return i + 1;
};

const performQuickSort = (arr, low, high) => {
  if (low < high) {
    let pi = partition(arr, low, high);

    performQuickSort(arr, low, pi - 1);
    performQuickSort(arr, pi + 1, high);
  }
};

const quickSort = (inputArray = [], enableVisualization = true) => {
  let arr = inputArray;

  animList = [];
  enableVisualization = enableVisualization;

  performQuickSort(arr, 0, arr.length - 1);

  playAnimation(animList, enableVisualization);

  return arr;
};

export { quickSort };
