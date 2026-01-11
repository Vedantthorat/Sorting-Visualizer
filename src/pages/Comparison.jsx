const Comparison = () => {
  return (
    <div className="section">
      <h1>Sorting Algorithm Comparison</h1>

      <table className="card" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Algorithm</th>
            <th>Best</th>
            <th>Average</th>
            <th>Worst</th>
            <th>Space</th>
            <th>Stable</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bubble</td>
            <td>O(n)</td>
            <td>O(n²)</td>
            <td>O(n²)</td>
            <td>O(1)</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Selection</td>
            <td>O(n²)</td>
            <td>O(n²)</td>
            <td>O(n²)</td>
            <td>O(1)</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Insertion</td>
            <td>O(n)</td>
            <td>O(n²)</td>
            <td>O(n²)</td>
            <td>O(1)</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Merge</td>
            <td>O(n log n)</td>
            <td>O(n log n)</td>
            <td>O(n log n)</td>
            <td>O(n)</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Quick</td>
            <td>O(n log n)</td>
            <td>O(n log n)</td>
            <td>O(n²)</td>
            <td>O(log n)</td>
            <td>No</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Comparison;
