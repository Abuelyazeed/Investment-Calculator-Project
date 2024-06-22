import React from "react";

function ResultsTable() {
  return (
    <section className="center">
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>$17,100</td>
            <td>$900</td>
            <td>$900</td>
            <td>$16,200</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default ResultsTable;
