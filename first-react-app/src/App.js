
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent'
function App() {
  return (
    <div className="App">
   
      <p>Welcome to React session</p>
    <ClassComponent/>
    <br/>
    <p>Function Component</p>
    <FunctionComponent/>
    </div>
  );
}

export default App;
