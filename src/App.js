import "./App.css";
import logo from "./images/logo.svg";
import iconDollar from "./images/icon-dollar.svg";
import iconPerson from "./images/icon-person.svg";
import React, { useState, useRef } from "react";
import Button from "./Button";

function App() {
  const [billDollar, setBillDollar] = useState();
  const [tipPercentage, setTipPercentage] = useState();
  const [people, setPeople] = useState();
  const [isActive5, setActive5] = useState(false);
  const [isActive10, setActive10] = useState(false);
  const [isActive15, setActive15] = useState(false);
  const [isActive25, setActive25] = useState(false);
  const [isActive50, setActive50] = useState(false);
  const tipAmountPeople = useRef();
  const totalAmountPeople = useRef();
  const firstinput = useRef();
  const secondinput = useRef();
  const fiveBtn = useRef();
  const tenBtn = useRef();
  const fifteenBtn = useRef();
  const twentyfiveBtn = useRef();
  const fiftyBtn = useRef();
  const custom = useRef();

  const fivepercent = () => {
    setTipPercentage(5);
    setActive5(!isActive5);
    setActive10(false);
    setActive15(false);
    setActive25(false);
    setActive50(false);
    custom.current.value = "";
  };
  const tenpercent = () => {
    setTipPercentage(10);
    setActive10(!isActive10);
    setActive5(false);
    setActive15(false);
    setActive25(false);
    setActive50(false);
    custom.current.value = "";
  };
  const fifteenpercent = () => {
    setTipPercentage(15);
    setActive15(!isActive15);
    setActive10(false);
    setActive5(false);
    setActive25(false);
    setActive50(false);
    custom.current.value = "";
  };
  const twentyfivepercent = () => {
    setTipPercentage(25);
    setActive25(!isActive25);
    setActive10(false);
    setActive15(false);
    setActive5(false);
    setActive50(false);
    custom.current.value = "";
  };
  const fiftypercent = () => {
    setTipPercentage(50);
    setActive50(!isActive50);
    setActive10(false);
    setActive15(false);
    setActive25(false);
    setActive5(false);
    custom.current.value = "";
  };
  const customPercent = (event) => {
    setTipPercentage(+event.target.value);
    setActive10(false);
    setActive15(false);
    setActive25(false);
    setActive5(false);
    setActive50(false);
  };
  const peopleHandler = (event) => {
    setPeople(+event.target.value);
  };

  const billHandler = (event) => {
    setBillDollar(+event.target.value);
  };

  const resetFunction = () => {
    setBillDollar(0);
    setPeople(0);
    firstinput.current.value = "";
    secondinput.current.value = "";
    fiveBtn.current.className = "option";
    tenBtn.current.className = "option";
    fifteenBtn.current.className = "option";
    twentyfiveBtn.current.className = "option";
    fiftyBtn.current.className = "option";
    custom.current.value = "";
    totalAmountPeople.current.innerText = "$0.00";
    tipAmountPeople.current.innerText = "$0.00";
  };

  {
    billDollar &&
      tipPercentage &&
      people &&
      (tipAmountPeople.current.innerText =
        "$" + ((billDollar * (tipPercentage / 100)) / people).toFixed(2));
  }
  {
    billDollar &&
      tipPercentage &&
      people &&
      (totalAmountPeople.current.innerText =
        "$" +
        (
          billDollar / people +
          (billDollar * (tipPercentage / 100)) / people
        ).toFixed(2));
  }
  return (
    <>
      <div className="container">
        <img className="logo" src={logo} alt="" />
        <div className="calculator">
          <div className="first">
            <p className="bill">Bill</p>
            <label htmlFor="" className="billInput">
              <span>
                <img src={iconDollar} alt="" />
              </span>
              <input
                dir="rtl"
                type="number"
                placeholder="0"
                onChange={billHandler}
                ref={firstinput}
              />
            </label>

            <p className="tip">Select Tip %</p>
            <div className="tipPercent">
              <button
                onClick={fivepercent}
                className={isActive5 ? "option-click   " : "option"}
                ref={fiveBtn}
              >
                5%
              </button>
              <button
                onClick={tenpercent}
                className={isActive10 ? "option-click   " : "option"}
                ref={tenBtn}
              >
                10%
              </button>
              <button
                onClick={fifteenpercent}
                className={isActive15 ? "option-click   " : "option"}
                ref={fifteenBtn}
              >
                15%
              </button>
              <button
                onClick={twentyfivepercent}
                className={isActive25 ? "option-click   " : "option"}
                ref={twentyfiveBtn}
              >
                25%
              </button>
              <button
                onClick={fiftypercent}
                className={isActive50 ? "option-click   " : "option"}
                ref={fiftyBtn}
              >
                50%
              </button>

              <input
                type="number"
                placeholder="Custom"
                className="percent"
                onChange={customPercent}
                ref={custom}
              />
            </div>
            <p className="people">Number of People</p>
            <label htmlFor="" className="peopleInput">
              <span>
                <img src={iconPerson} alt="" />
              </span>
              <input
                dir="rtl"
                type="number"
                placeholder="0"
                className="noOfppl"
                onChange={peopleHandler}
                ref={secondinput}
              />
            </label>
          </div>
          <div className="second">
            <div className="tip-amount tip-amount-1">
              <div>
                <h4>Tip Amount</h4>
                <p>/ person</p>
              </div>
              <div
                type="number"
                ref={tipAmountPeople}
                name=""
                id=""
                placeholder="$0.00"
                className="total"
              >
                $0.00
              </div>
            </div>

            <div className="tip-amount tip-amount-2">
              <div>
                <h4>Total</h4>
                <p>/ person</p>
              </div>
              <div
                className="total"
                type="number"
                name=""
                id=""
                placeholder="$0.00"
                ref={totalAmountPeople}
              >
                $0.00
              </div>
            </div>

            <button className="reset-btn " onClick={resetFunction}>
              RESET
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
