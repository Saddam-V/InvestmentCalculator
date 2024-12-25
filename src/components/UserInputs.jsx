export default function UserInputs({ value, handleValue }) {
  return (
    <section className="" id="user-input">
      <div id="" className="input-group">
        <div>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            type="number"
            value={value.initialInvestment}
            onChange={(event) => handleValue(parseFloat(event.target.value), "initialInvestment")}
          />
        </div>
        <div>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            type="number"
            value={value.annualInvestment}
            onChange={(event) => handleValue(parseFloat(event.target.value), "annualInvestment")}
          />
        </div>
      </div>

      <div id="" className="input-group">
        <div>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            type="number"
            value={value.expectedReturn}
            onChange={(event) => handleValue(parseFloat(event.target.value), "expectedReturn")}
          />
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input type="number" value={value.duration} onChange={(event) => handleValue(parseFloat(event.target.value), "duration")} />
        </div>
      </div>
    </section>
  );
}
