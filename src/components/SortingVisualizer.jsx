import { useState, useRef } from "react";
import { bubbleSort } from "../algorithms/bubbleSort";
import "./SortingVisualizer.css";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(400);
  const [activeIndices, setActiveIndices] = useState([]);
  const [comparisons, setComparisons] = useState(0);
  const [swaps, setSwaps] = useState(0);

  // 🔥 STOP CONTROL
  const isSortingRef = useRef(false);

  const generateArray = () => {
    isSortingRef.current = false;

    const arr = [];
    for (let i = 0; i < 14; i++) {
      arr.push(Math.floor(Math.random() * 90) + 10);
    }

    setArray(arr);
    setComparisons(0);
    setSwaps(0);
    setActiveIndices([]);
  };

  const startSort = async () => {
    if (array.length === 0 || isSortingRef.current) return;

    setComparisons(0);
    setSwaps(0);
    isSortingRef.current = true;

    await bubbleSort(
      array,
      setArray,
      speed,
      setActiveIndices,
      setComparisons,
      setSwaps,
      isSortingRef
    );
  };

  const stopSort = () => {
    isSortingRef.current = false;
    setActiveIndices([]);
  };

  return (
    <>
      {/* HEADER */}
      <div className="header">Sorting Algorithm Visualizer</div>

      <div className="main">
        {/* SIDEBAR */}
        <div className="sidebar">
          <h3>Algorithms</h3>
          <div className="algorithm-card active">Bubble Sort</div>
        </div>

        {/* CONTENT */}
        <div className="content">
          {/* CONTROLS */}
          <div className="controls">
            <button onClick={generateArray}>Generate</button>
            <button onClick={startSort}>Start</button>
            <button
              onClick={stopSort}
              style={{ backgroundColor: "#c62828" }}
            >
              Stop
            </button>

            <div className="speed-box">
              <button onClick={() => setSpeed((s) => Math.min(s + 100, 1200))}>
                +
              </button>
              <span>Speed</span>
              <button onClick={() => setSpeed((s) => Math.max(s - 100, 100))}>
                −
              </button>
            </div>
          </div>

          {/* VISUALIZATION */}
          <div className="bars-container">
            {array.map((value, index) => (
              <div
                key={index}
                className="array-bar"
                style={{
                  height: `${value * 3}px`,
                  backgroundColor: activeIndices.includes(index)
                    ? "red"
                    : "steelblue",
                }}
              >
                <span>{value}</span>
              </div>
            ))}
          </div>

          {/* INFO */}
          <div className="info-grid">
            <div className="info-card">
              <b>Comparisons</b>
              <br />
              {comparisons}
            </div>
            <div className="info-card">
              <b>Swaps</b>
              <br />
              {swaps}
            </div>
            <div className="info-card">
              <b>Time Complexity</b>
              <br />
              O(n²)
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="footer">
        © 2026 Sorting Algorithm Visualizer
      </div>
    </>
  );
};

export default SortingVisualizer;
