import { delay } from "../utils/delay";

export const bubbleSort = async (
  array,
  setArray,
  speed,
  setActiveIndices,
  setComparisons,
  setSwaps,
  isSortingRef
) => {
  const arr = [...array];
  let comparisons = 0;
  let swaps = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (!isSortingRef.current) break;

    for (let j = 0; j < arr.length - i - 1; j++) {
      if (!isSortingRef.current) break;

      comparisons++;
      setComparisons(comparisons);

      setActiveIndices([j, j + 1]);
      await delay(speed + 150);

      if (arr[j] > arr[j + 1]) {
        swaps++;
        setSwaps(swaps);

        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        setArray([...arr]);
        await delay(speed + 200);
      }
    }
  }

  setActiveIndices([]);
  isSortingRef.current = false;
};
