// Hooks / Node modules / Styles
import React from "react";
import { useEffect, useState } from "react";
import classNames from "classnames";

// Reducers / Actions

// Utils
import { getArrayWithRandomNumbers } from "../../utils/arrays";
import { bubbleSort, selectionSort, insertionSort, testSortingAlgorithm } from "../../utils/sorting-algorithms";

// Components
import Button from "../base/button/Button";

// Sub-Components

// Data / Images / Icons
import { CONFIG } from "../../data/config";

function SortingVisualizer({ visualizerWidth = "1000", visualizerHeight = "600" }) {
  const { REQUIRED_ARRAY_ITEM_AMOUNT } = CONFIG;

  const [array, setArray] = useState([]);

  const resetArray = () => {
    const array = getArrayWithRandomNumbers(REQUIRED_ARRAY_ITEM_AMOUNT, 5, visualizerHeight);

    setArray(array);
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
            className={classNames({
              [`array-bar bg-[#b0bec5]`]: true,
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
        <Button text="Bubble Sort" onClick={() => bubbleSort(array)} />
        <Button text="Selection Sort" onClick={() => selectionSort(array)} />
        <Button text="Insertion Sort" onClick={() => insertionSort(array)} />
        <Button text="Test Sorting Alogirithms" onClick={() => testSortingAlgorithm("insertion-sort")} />
      </div>
    </div>
  );
}

export default SortingVisualizer;
