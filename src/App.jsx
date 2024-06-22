import { useState } from "react";
import Header from "./components/Header";
import ResultsTable from "./components/ResultsTable";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 900,
    expectedReturn: 6,
    duration: 10,
  });
  function handleOnChange(e) {
    const { id, value } = e.target;
    setUserInput({ ...userInput, [id]: value });
  }
  return (
    <>
      <Header />
      <UserInput input={userInput} onChange={handleOnChange} />
      <ResultsTable />
    </>
  );
}

export default App;
