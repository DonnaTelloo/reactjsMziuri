import './App.css';
import Anano, { Giorgi, Anastasia, Levan } from './components/Hello';

function App() {
  return (
    <div className="App">
      <Giorgi fatherName="ნუგზარი" />
        <br />
      <Anastasia age={17} hasBrother={true} />
        <br />
      <Levan />
        <br />
      <Anano age={13} nationality="ქართველი">
        <p>Hey brother !</p>
        <p>Hey Sister !</p>
      </Anano>
    </div>
  );
}

export default App;
