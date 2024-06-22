import { useState } from "react";
import Header from "./components/Header";
import ResultsTable from "./components/ResultsTable";
import UserInput from "./components/UserInput";
import { calculateInvestmentResults, formatter } from "./util/investment";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  function handleOnChange(e) {
    const { id, value } = e.target;
    setUserInput({ ...userInput, [id]: value });
  }
  const annualData = calculateInvestmentResults(userInput);
  console.log(annualData);
  return (
    <>
      <Header />
      <UserInput input={userInput} onChange={handleOnChange} />
      <ResultsTable data={annualData} input={userInput} formatter={formatter} />
    </>
  );
}

export default App;
