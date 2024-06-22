import { useState } from "react";
import Header from "./components/Header";
import ResultsTable from "./components/ResultsTable";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  function handleOnChange(e) {
    const { id, value } = e.target;
    setUserInput((prevInput) => {
      return { ...prevInput, [id]: parseFloat(value) };
    });
  }

  return (
    <>
      <Header />
      <UserInput input={userInput} onChange={handleOnChange} />
      {userInput.duration > 0 ? (
        <ResultsTable input={userInput} />
      ) : (
        <p className="center">Please enter a valid duration</p>
      )}
    </>
  );
}

export default App;
