import React from "react";

function ResultsTable({ data, input, formatter }) {
  function calculateTotalInterest(year) {
    let totalInterest = 0;
    for (let i = 0; i < year; i++) {
      totalInterest += data[i].interest;
    }
    return totalInterest;
  }

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
          {data.map((d) => (
            <tr key={d.year}>
              <td>{d.year}</td>
              <td>{formatter.format(d.valueEndOfYear)}</td>
              <td>{formatter.format(d.interest)}</td>
              <td>{formatter.format(calculateTotalInterest(d.year))}</td>
              <td>
                {formatter.format(
                  input.initialInvestment + d.annualInvestment * d.year
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default ResultsTable;
