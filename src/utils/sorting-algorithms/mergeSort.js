import { addAnimItem, playAnimation } from "../sortingAnimations";

// For Animations
let animList = [];
let enableVisualization = true;

const merge = (left_arr, right_arr) => {
  let arr = [];

  while (left_arr.length && right_arr.length) {
    // For Animations
    addAnimItem(animList, 0, left_arr[0], 0, right_arr[0], "compare", enableVisualization);

    if (left_arr[0] < right_arr[0]) {
      for (let i = 0; i < left_arr.length; i++) {
        // For Animations
        addAnimItem(animList, i, left_arr[i], i, left_arr[i], "found", enableVisualization);
      }

      arr.push(left_arr.shift());
    } else {
      for (let i = 0; i < right_arr.length; i++) {
        // For Animations
        addAnimItem(animList, i, right_arr[i], i, right_arr[i], "found", enableVisualization);
      }

      arr.push(right_arr.shift());
    }
  }

  return [...arr, ...left_arr, ...right_arr];
};

const performMergeSort = (arr) => {
  const midx = arr.length / 2;

  if (arr.length < 2) return arr;

  const left_arr = arr.splice(0, midx);

  return merge(performMergeSort(left_arr), performMergeSort(arr));
};

const mergeSort = (inputArray = [], enableVisualization = true) => {
  let arr = inputArray;

  animList = [];
  enableVisualization = enableVisualization;

  arr = performMergeSort(arr);

  playAnimation(animList, enableVisualization);

  return arr;
};

export { mergeSort };
