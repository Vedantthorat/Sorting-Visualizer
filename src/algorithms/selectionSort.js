import { delay } from "../utils/delay";

export const selectionSort = async (
  array,
  setArray,
  speed,
  setActiveIndices,
  setComparisons,
  setSwaps
) => {
  const arr = [...array];
  let comparisons = 0;
  let swaps = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      comparisons++;
      setComparisons(comparisons);

      setActiveIndices([minIndex, j]);
      await delay(speed + 150);

      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      swaps++;
      setSwaps(swaps);

      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      setArray([...arr]);
      await delay(speed + 200);
    }
  }

  setActiveIndices([]);
};
