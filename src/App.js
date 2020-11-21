import './App.css';
import Car from './components/carComponent/Car';
// import Anano, { Giorgi, Anastasia, Levan } from './components/Hello';

function App() {
  return (
    <div className="App">
      {/* <Giorgi fatherName="ნუგზარი" />
        <br />
      <Anastasia age={17} hasBrother={true} />
        <br />
      <Levan age={18} hasCar={true} isStudent={false} />
        <br />
      <Anano age={13} nationality="ქართველი">
        <p>Hey brother !</p>
        <p>Hey Sister !</p>
      </Anano> */}
      <Car brand="Nissan" model="Skyline R34" year="1998"></Car>
    </div>
  );
}

export default App;
