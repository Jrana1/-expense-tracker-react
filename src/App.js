import Header from "./components/Header";
import './components/App.css';
import Balance from "./components/Balance";
import Income from "./components/Income";
import History from "./components/History";
//import Transaction from "./components/Transaction";
import Amount from "./components/Amount";
import { useState } from "react";
function App() {
  const [amounts, setAmount] = useState(0);
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [sign, setSign] = useState("");
  const [text, setText] = useState("");
  const [num, setNum] = useState("");
  const handleAmount = (amount, text) => {
    //console.log(amount, text);
    // let sign = amount.slice(1);
    let newAmount = [...amount];
    newAmount.shift();
    let onlyNum = newAmount.join('');
    setSign(amount[0]);
    setText(text);
    setNum(onlyNum);
    if (amount[0] === '+') {
      //console.log((onlyNum), amounts);
      setAmount(parseInt(onlyNum) + Math.abs(amounts));
      setIncome(parseInt(onlyNum) + income);
    }
    else {
      setAmount(parseInt(onlyNum) - Math.abs(amounts));
      setExpenses(parseInt(onlyNum) + expenses);
    }
    //setAmount(parseInt(amount) + amounts);
  };
  return (
    <div className="main">
      <div className="container">
        <Header></Header>
        <Balance amount={amounts}></Balance>
        <Income income={[income, expenses]}></Income>
        <History history={[sign, text, num]}></History>
        <Amount func={handleAmount}></Amount>
      </div>
    </div>
  );
}

export default App;
