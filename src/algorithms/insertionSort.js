import { delay } from "../utils/delay";

export const insertionSort = async (
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

  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    setActiveIndices([i]);

    while (j >= 0 && arr[j] > key) {
      comparisons++;
      swaps++;
      setComparisons(comparisons);
      setSwaps(swaps);

      arr[j + 1] = arr[j];
      j--;

      setArray([...arr]);
      setActiveIndices([j + 1, j + 2]);
      await delay(speed + 150);
    }

    arr[j + 1] = key;
    setArray([...arr]);
    await delay(speed + 150);
  }

  setActiveIndices([]);
};
