import "../components.css";
import '../css/faq-cal.css'

function Calculator() {
  return (
    <section className="container">
      <h2>Some of the things you may want to know</h2>
      <p className="text">Use our Credit Repayment calculator below 👇🏾</p>
      <div className="cal-sec">
        <div>
          <label>School Fees Amount</label>
          <input type="number" Placeholder="e.g 120,000" />
        </div>
        <div>
          <label>With 12% interest</label>
          <input type="number" readOnly="true" Placeholder="e.g 132,000" />
        </div>
        <div>
          <label>You Repay (For 3 month) </label>
          <input
            type="number"
            readOnly="true"
            Placeholder="e.g 44,000 Per Month"
          />
        </div>
        <div>
          <button>Calculate</button>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
