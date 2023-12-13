import { useEffect, useState } from "react";
import classNames from "classnames";

import Button from "../base/button/Button";

import {
  getRandomInt,
  getArrayWithRandomNumbers,
  areArrayEqual,
} from "../../utils/arrays";
import { getMergeSortAnimations } from "../../utils/sorting-algorithms/mergeSort";

const REQUIRED_ARRAY_ITEM_AMOUNT = 10;

function SortingVisualizer({
  visualizerWidth = "1000",
  visualizerHeight = "600",
}) {
  const [array, setArray] = useState([]);

  const resetArray = () => {
    const array = getArrayWithRandomNumbers(
      REQUIRED_ARRAY_ITEM_AMOUNT,
      5,
      1000
    );

    setArray(array);
  };

  const mergeSort = () => {
    const animations = getMergeSortAnimations(array);

    // for (let i = 0; i < animations.length; i++) {
    //   const element = array[i];

    // }

    console.log(animations);
  };

  const bubbleSort = (inputArray = []) => {
    let arr = inputArray;
    const n = inputArray.length;

    let animList = [{bar1: {idx: 0, val: 0}, bar2: {idx: 1, val: 1}, effect: ""}]

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i + 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    return arr;
  };

  const testSortingAlgorithm = () => {
    let res = { success: true, testArray: [], sortedArray: [] };

    for (let i = 0; i < 10; i++) {
      const length = getRandomInt(2, 100);

      const arr = getArrayWithRandomNumbers(length, 1, 100);

      const jsSortedArray = arr.slice().sort((a, b) => a - b);
      const sortedArray = bubbleSort(arr.slice());

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

  useEffect(() => {
    resetArray();
  }, []);

  return (
    <div>
      <div
        className={classNames({
          "flex items-end bg-gray-100 p-4 max-h-screen w-[1000px] h-[600px]": true,
          [`w-[${visualizerWidth}px] h-[${visualizerHeight}px]`]: true,
        })}
      >
        {array.map((val, index) => (
          <div
            key={index}
            className={classNames("bg-gray-400", {
              "ml-1": index !== 0,
            })}
            style={{
              height: `${val}px`,
              width: visualizerWidth / REQUIRED_ARRAY_ITEM_AMOUNT,
            }}
          >
            {/* {val} */}
          </div>
        ))}
      </div>

      {/* Options */}
      <div className="flex flex-row gap-2">
        <Button text="Generate Random Array" onClick={resetArray} />
        <Button text="Merge Sort" onClick={mergeSort} />
        <Button
          text="Test Sorting Alogirithms"
          onClick={testSortingAlgorithm}
        />
      </div>
    </div>
  );
}

export default SortingVisualizer;
