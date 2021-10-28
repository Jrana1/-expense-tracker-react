import Header from "./components/Header";
import './components/App.css';
import Balance from "./components/Balance";
import Income from "./components/Income";
import History from "./components/History";
import Transaction from "./components/Transaction";
import Amount from "./components/Amount";
function App() {
  return (
    <div className="main">
      <div className="container">
        <Header></Header>
        <Balance></Balance>
        <Income></Income>
        <History></History>
        <Transaction></Transaction>
        <Amount></Amount>
      </div>
    </div>
  );
}

export default App;
