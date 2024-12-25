import Header from "./components/Header";
import UserInputs from "./components/UserInputs";
import Results from "./components/Results";

import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [value, setValue] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const isDurationNull = value.duration == "";

  function handleValue(value, type) {
    setValue((lastValue) => {
      return { ...lastValue, [type]: value };
    });
  }

  const results = calculateInvestmentResults(value);

  return (
    <>
      <Header />;
      <UserInputs value={value} handleValue={handleValue} />;
      {isDurationNull ? <p className="center">Please Enter a Duration</p> : <Results results={results} />}
    </>
  );
}

export default App;
