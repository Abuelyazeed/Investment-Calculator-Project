import { calculateInvestmentResults, formatter } from "../util/investment";

function ResultsTable({ input }) {
  const resultData = calculateInvestmentResults(input);

  function calculateTotalInterest(year) {
    let totalInterest = 0;
    for (let i = 0; i < year; i++) {
      totalInterest += resultData[i].interest;
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
          {resultData.map((data) => (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(calculateTotalInterest(data.year))}</td>
              <td>
                {formatter.format(
                  input.initialInvestment + data.annualInvestment * data.year
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
