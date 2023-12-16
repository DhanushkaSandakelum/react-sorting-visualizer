import { addAnimItem, playAnimation } from "../sortingAnimations";
import { swap } from ".";

const bubbleSort = (inputArray = [], enableVisualization = true) => {
    let arr = inputArray;
    const n = inputArray.length;

    // For Animating bar visualizations
    let animList = [];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // For Animating bar visualizations
            addAnimItem(animList, j, arr[j], j + 1, arr[j + 1], "compare", enableVisualization)

            if (arr[j] > arr[j + 1]) {
                // For Animating bar visualizations
                addAnimItem(animList, j, arr[j], j + 1, arr[j + 1], "found", enableVisualization)

                swap(arr, j, j + 1)
                // For Animating bar visualizations
                addAnimItem(animList, j, arr[j], j + 1, arr[j + 1], "swap", enableVisualization)
            }
        }
    }

    // For Animating bar visualizations
    playAnimation(animList, enableVisualization)

    return arr;
};

export { bubbleSort }