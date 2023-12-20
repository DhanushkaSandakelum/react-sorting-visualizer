import { addAnimItem, playAnimation } from "../sortingAnimations";

// For Animations
let animList = [];
let enableVisualization = true;

const performInsertionSort = (inputArray = []) => {
  let arr = inputArray;
  const n = inputArray.length;
  var i, j, key;

  for (let i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

    // For Animations
    addAnimItem(animList, j, arr[j], i, arr[i], "compare", enableVisualization);

    while (j >= 0 && arr[j] > key) {
      // For Animations
      addAnimItem(animList, j, arr[j], i, arr[i], "found", enableVisualization);

      // For Animations
      addAnimItem(animList, j + 1, arr[j + 1], j, arr[j], "insert", enableVisualization);

      arr[j + 1] = arr[j];
      j = j - 1;
    }

    // For Animations
    addAnimItem(animList, j + 1, arr[j + 1], i, arr[i], "insert", enableVisualization);

    arr[j + 1] = key;
  }

  return arr;
};

const insertionSort = (inputArray = [], enableVisualization = true) => {
  let arr = inputArray;

  animList = [];
  enableVisualization = enableVisualization;

  arr = performInsertionSort(arr);

  playAnimation(animList, enableVisualization);

  return arr;
};

export { insertionSort };
