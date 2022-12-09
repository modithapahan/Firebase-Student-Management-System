import { BrowserRouter as Router, Route} from 'react-router-dom'; 
import './App.css';
import AddStudentDetails from './components/AddStudentDetails';
import Home from './components/Home';
import NavBar from './components/NavBar';
import UpdateStudent from './components/UpdateStudent';
import ViewStudent from './components/ViewStudent';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/add" component={AddStudentDetails} />
        <Route path="/view/:id" component={ViewStudent} />
        <Route path="/update/:id" component={UpdateStudent} />
      </div>
    </Router>
  );
}

export default App;
