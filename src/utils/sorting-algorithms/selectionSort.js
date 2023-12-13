import { addAnimItem, playAnimation } from "../sortingAnimations";
import { swap } from ".";

// [10, 5, 3, 4, 2]
const selectionSort = (inputArray = [], enableVisualization = true) => {
    let arr = inputArray;
    const n = inputArray.length;
    var i, j, minIdx

    // For Animating bar visualizations
    let animList = [];

    for (i = 0; i < n - 1; i++) {
        minIdx = i

        for (j = i + 1; j < n; j++) {
            // For Animating bar visualizations
            addAnimItem(animList, j, arr[j], minIdx, arr[minIdx], "compare", enableVisualization)

            if (arr[j] < arr[minIdx]) {
                minIdx = j
                // For Animating bar visualizations
                addAnimItem(animList, j, arr[j], minIdx, arr[minIdx], "found", enableVisualization)
            }
        }

        // swap(arr, minIdx, i)
        const temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;
        // For Animating bar visualizations
        addAnimItem(animList, i, arr[i], minIdx, arr[minIdx], "swap", enableVisualization)
    }

    // For Animating bar visualizations
    playAnimation(animList, enableVisualization)

    return arr;
};

export { selectionSort }