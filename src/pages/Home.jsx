import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* ABOUT SECTION */}
      <div className="section">
        <div className="card">
          <h1>Sorting Algorithm Visualizer</h1>
          <p>
            This platform helps students and developers understand sorting
            algorithms through clear explanations, comparisons, and interactive
            visualizations.
          </p>
          <p>
            Instead of memorizing algorithms, you can visually explore how they
            work step by step.
          </p>
        </div>
      </div>

      {/* WHAT IS SORTING */}
      <div className="section">
        <div className="card">
          <h2>What is Sorting?</h2>
          <p>
            Sorting is the process of arranging data in a specific order
            (ascending or descending). Efficient sorting improves searching,
            performance, and data organization.
          </p>
        </div>
      </div>

      {/* ALGORITHMS */}
      <div className="section">
        <h2>Sorting Algorithms</h2>

        <div className="card-grid">
          <Link to="/algorithm/bubble">
            <div className="card">
              <h3>Bubble Sort</h3>
              <p>Simple comparison-based algorithm.</p>
            </div>
          </Link>

          <Link to="/algorithm/selection">
            <div className="card">
              <h3>Selection Sort</h3>
              <p>Selects the minimum element repeatedly.</p>
            </div>
          </Link>

          <Link to="/algorithm/insertion">
            <div className="card">
              <h3>Insertion Sort</h3>
              <p>Efficient for nearly sorted data.</p>
            </div>
          </Link>

          <Link to="/algorithm/merge">
            <div className="card">
              <h3>Merge Sort</h3>
              <p>Divide and conquer approach.</p>
            </div>
          </Link>

          <Link to="/algorithm/quick">
            <div className="card">
              <h3>Quick Sort</h3>
              <p>Fast pivot-based sorting.</p>
            </div>
          </Link>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="section" style={{ textAlign: "center" }}>
        <Link to="/visualizer">
          <button className="btn" style={{ marginRight: "15px" }}>
            View Visualization
          </button>
        </Link>

        <Link to="/compare">
          <button className="btn">
            Compare Algorithms
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
