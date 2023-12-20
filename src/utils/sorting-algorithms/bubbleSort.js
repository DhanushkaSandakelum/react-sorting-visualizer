import { addAnimItem, playAnimation } from "../sortingAnimations";
import { swap } from ".";

// For Animations
let animList = [];
let enableVisualization = true;

const performBubbleSort = (inputArray = []) => {
  let arr = inputArray;
  const n = inputArray.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // For Animations
      addAnimItem(animList, j, arr[j], j + 1, arr[j + 1], "compare", enableVisualization);

      if (arr[j] > arr[j + 1]) {
        // For Animations
        addAnimItem(animList, j, arr[j], j + 1, arr[j + 1], "found", enableVisualization);

        swap(arr, j, j + 1);
        // For Animations
        addAnimItem(animList, j, arr[j], j + 1, arr[j + 1], "swap", enableVisualization);
      }
    }
  }

  return arr;
};

const bubbleSort = (inputArray = [], enableVisualization = true) => {
  let arr = inputArray;

  animList = [];
  enableVisualization = enableVisualization;

  arr = performBubbleSort(arr);

  playAnimation(animList, enableVisualization);

  return arr;
};

export { bubbleSort };
