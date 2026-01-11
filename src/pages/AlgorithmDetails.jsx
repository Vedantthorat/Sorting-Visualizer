import { useParams } from "react-router-dom";

const DATA = {
  bubble: {
    name: "Bubble Sort",
    description:
      "Bubble Sort repeatedly compares adjacent elements and swaps them if they are in the wrong order.",
    steps: [
      "Compare adjacent elements",
      "Swap if they are in wrong order",
      "Repeat for all passes",
    ],
    best: "O(n)",
    avg: "O(n²)",
    worst: "O(n²)",
    space: "O(1)",
    stable: "Yes",
    inplace: "Yes",
  },
  selection: {
    name: "Selection Sort",
    description:
      "Selection Sort selects the minimum element from the unsorted part and places it at the beginning.",
    steps: [
      "Find minimum element",
      "Swap with first unsorted position",
      "Move boundary forward",
    ],
    best: "O(n²)",
    avg: "O(n²)",
    worst: "O(n²)",
    space: "O(1)",
    stable: "No",
    inplace: "Yes",
  },
  insertion: {
    name: "Insertion Sort",
    description:
      "Insertion Sort builds the sorted array one element at a time by inserting items in correct position.",
    steps: [
      "Pick next element",
      "Shift larger elements right",
      "Insert at correct position",
    ],
    best: "O(n)",
    avg: "O(n²)",
    worst: "O(n²)",
    space: "O(1)",
    stable: "Yes",
    inplace: "Yes",
  },
};

const AlgorithmDetails = () => {
  const { algo } = useParams();
  const info = DATA[algo];

  if (!info) return <div className="section">Algorithm not found</div>;

  return (
    <div className="section">
      <div className="card">
        <h1>{info.name}</h1>
        <p>{info.description}</p>

        <h3>Algorithm Steps</h3>
        <ul>
          {info.steps.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>

        <h3>Complexity</h3>
        <p>Best: {info.best}</p>
        <p>Average: {info.avg}</p>
        <p>Worst: {info.worst}</p>
        <p>Space: {info.space}</p>

        <p>Stable: {info.stable}</p>
        <p>In-Place: {info.inplace}</p>
      </div>
    </div>
  );
};

export default AlgorithmDetails;
