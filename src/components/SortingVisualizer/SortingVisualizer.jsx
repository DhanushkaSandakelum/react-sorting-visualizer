// Hooks / Node modules / Styles
import React from "react";
import { useEffect, useState } from "react";
import classNames from "classnames";

// Reducers / Actions

// Utils
import { getArrayWithRandomNumbers } from "../../utils/arrays";
import {
  bubbleSort,
  selectionSort,
  insertionSort,
  quickSort,
  testSortingAlgorithm,
} from "../../utils/sorting-algorithms";

// Components
import Button from "../base/button/Button";
import Select from "../base/select/Select";
import SelectOption from "../base/select/SelectOption";

// Sub-Components

// Data / Images / Icons
import { CONFIG } from "../../data/config";

function SortingVisualizer({
  visualizerWidth = CONFIG.VISUALIZER_WIDTH,
  visualizerHeight = CONFIG.VISUALIZER_HEIGHT,
}) {
  const { REQUIRED_ARRAY_ITEM_AMOUNT } = CONFIG;

  const [array, setArray] = useState([]);

  const resetArray = () => {
    // Reset Values
    const array = getArrayWithRandomNumbers(
      REQUIRED_ARRAY_ITEM_AMOUNT,
      5,
      visualizerHeight
    );

    setArray(array);
  };

  useEffect(() => {
    // Reset Colors
    var arrayBars = document.getElementsByClassName("array-bar");

    for (const bar of arrayBars) {
      bar.style.backgroundColor = "#b0bec5";
    }
  }, [array]);

  useEffect(() => {
    resetArray();
  }, []);

  // Sorting algorithm selection
  const [selectedSortingAlgorithm, setSelectedSortingAlgorithm] =
    useState("bubble-sort");

  const handleSelectSortingAlgorithm = (e) => {
    setSelectedSortingAlgorithm(e.target.value);
  };

  // Run Sorting
  const handleRun = () => {
    switch (selectedSortingAlgorithm) {
      case "bubble-sort":
        bubbleSort(array);
        break;

      case "selection-sort":
        selectionSort(array);
        break;

      case "insertion-sort":
        insertionSort(array);
        break;

      case "quick-sort":
        quickSort(array);
        break;

      default:
        break;
    }
  };

  return (
    <div className="w-fit">
      <div
        className={classNames({
          "flex items-end bg-gray-100 p-4 max-h-screen": true,
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
      <div className="flex flex-row gap-2 p-2 border border-gray-300 bg-gray-200/50 rounded-md w-full">
        <Button text="Generate Random Array" onClick={resetArray} />

        <Select
          id="sortingAlgorithms"
          name="sortingAlgorithms"
          onChange={handleSelectSortingAlgorithm}
        >
          <SelectOption
            value="bubble-sort"
            text="Bubble Sort"
            defaultChecked={true}
          />
          <SelectOption value="selection-sort" text="Selection Sort" />
          <SelectOption value="insertion-sort" text="Insertion Sort" />
          <SelectOption value="quick-sort" text="Quick Sort" />
        </Select>

        <Button text="Run" onClick={handleRun} />

        <Button
          text="Test Sorting Alogirithms"
          onClick={() => testSortingAlgorithm(selectedSortingAlgorithm)}
        />
      </div>
    </div>
  );
}

export default SortingVisualizer;
