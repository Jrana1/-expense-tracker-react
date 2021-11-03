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
  const [allInfo, setAllInfo] = useState([]);
  const handleAmount = (amount, text) => {
    //console.log(amount, text);
    // let sign = amount.slice(1);
    let newAmount = [...amount];
    newAmount.shift();
    let onlyNum = newAmount.join('');
    setAllInfo([
      ...allInfo, { text: text, sign: amount[0], num: onlyNum, id: Math.random() * 1000 }
    ]);
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
        <History history={allInfo} setAllInfo={setAllInfo}></History>
        <Amount func={handleAmount}></Amount>
      </div>
    </div>
  );
}

export default App;
