import './index.css';
import Calculator from './Calculator';
import MyContext from './WorkingResult';

function App() {
  return (
    <MyContext>
      <div className="App">
        <Calculator />
      </div>
    </MyContext>

  );
}

export default App;
