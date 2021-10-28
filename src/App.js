import Header from "./components/Header";
import './components/App.css';
import Balance from "./components/Balance";
import Income from "./components/Income";
import History from "./components/History";
//import Transaction from "./components/Transaction";
import Amount from "./components/Amount";
import { useState } from "react";
function App() {
  const [amounts, setAmount] = useState("");
  const handleAmount = (amount, text) => {
    console.log(amount, text);
    setAmount(amount);
  };
  return (
    <div className="main">
      <div className="container">
        <Header></Header>
        <Balance amount={amounts}></Balance>
        <Income></Income>
        <History></History>
        <Amount func={handleAmount}></Amount>
      </div>
    </div>
  );
}

export default App;
