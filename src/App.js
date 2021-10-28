import Header from "./components/Header";
import './components/App.css';
import Balance from "./components/Balance";
import Income from "./components/Income";
import History from "./components/History";
function App() {
  return (
    <div className="main">
      <div className="container">
        <Header></Header>
        <Balance></Balance>
        <Income></Income>
        <History></History>
      </div>
    </div>
  );
}

export default App;
