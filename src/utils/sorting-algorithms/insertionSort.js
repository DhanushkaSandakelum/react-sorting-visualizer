import { addAnimItem, playAnimation } from "../sortingAnimations";
import { swap } from ".";

const insertionSort = (inputArray = [], enableVisualization = true) => {
    let arr = inputArray;
    const n = inputArray.length;
    var i, j, key

    // For Animating bar visualizations
    let animList = [];

    for (let i = 1; i < n; i++) {
        key = arr[i]
        j = i - 1

        // For Animating bar visualizations
        addAnimItem(animList, j, arr[j], i, arr[i], "compare", enableVisualization)

        while (j >= 0 && arr[j] > key) {
            // For Animating bar visualizations
            addAnimItem(animList, j, arr[j], i, arr[i], "found", enableVisualization)

            // For Animating bar visualizations
        addAnimItem(animList, j+1, arr[j+1], j, arr[j], "swap", enableVisualization)
    
            arr[j + 1] = arr[j]
            j = j - 1
                       
        }

        arr[j + 1] = key

        // For Animating bar visualizations
        addAnimItem(animList, j+1, arr[j+1], i, arr[i], "swap", enableVisualization)
    }

    // For Animating bar visualizations
    playAnimation(animList, enableVisualization)

    return arr;
};

export { insertionSort }