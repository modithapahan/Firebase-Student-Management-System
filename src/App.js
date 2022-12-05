import { BrowserRouter as Router, Route} from 'react-router-dom'; 
import './App.css';
import AddStudentDetails from './components/AddStudentDetails';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/add" component={AddStudentDetails}/>
      </div>
    </Router>
  );
}

export default App;