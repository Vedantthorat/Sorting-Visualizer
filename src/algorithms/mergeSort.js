import { delay } from "../utils/delay";

export const mergeSort = async (
  array,
  setArray,
  speed,
  setActiveIndices,
  setComparisons
) => {
  const arr = [...array];
  let comparisons = 0;

  const merge = async (left, mid, right) => {
    const leftArr = arr.slice(left, mid + 1);
    const rightArr = arr.slice(mid + 1, right + 1);

    let i = 0,
      j = 0,
      k = left;

    while (i < leftArr.length && j < rightArr.length) {
      comparisons++;
      setComparisons(comparisons);

      setActiveIndices([k]);
      await delay(speed + 150);

      if (leftArr[i] <= rightArr[j]) {
        arr[k++] = leftArr[i++];
      } else {
        arr[k++] = rightArr[j++];
      }

      setArray([...arr]);
    }

    while (i < leftArr.length) {
      arr[k++] = leftArr[i++];
      setArray([...arr]);
      await delay(speed + 100);
    }

    while (j < rightArr.length) {
      arr[k++] = rightArr[j++];
      setArray([...arr]);
      await delay(speed + 100);
    }
  };

  const sort = async (left, right) => {
    if (left >= right) return;

    const mid = Math.floor((left + right) / 2);
    await sort(left, mid);
    await sort(mid + 1, right);
    await merge(left, mid, right);
  };

  await sort(0, arr.length - 1);
  setActiveIndices([]);
};
