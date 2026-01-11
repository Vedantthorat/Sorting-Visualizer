import { delay } from "../utils/delay";

export const quickSort = async (
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

  const partition = async (low, high) => {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      comparisons++;
      setComparisons(comparisons);
      setActiveIndices([j, high]);
      await delay(speed + 150);

      if (arr[j] < pivot) {
        i++;
        swaps++;
        setSwaps(swaps);

        [arr[i], arr[j]] = [arr[j], arr[i]];
        setArray([...arr]);
        await delay(speed + 150);
      }
    }

    swaps++;
    setSwaps(swaps);
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    setArray([...arr]);
    await delay(speed + 200);

    return i + 1;
  };

  const sort = async (low, high) => {
    if (low < high) {
      const pi = await partition(low, high);
      await sort(low, pi - 1);
      await sort(pi + 1, high);
    }
  };

  await sort(0, arr.length - 1);
  setActiveIndices([]);
};
