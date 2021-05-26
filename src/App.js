import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { Container } from 'react-bootstrap';
import Employees from './components/Employee';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployees } from "./actions";

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    axios.get('https://yalantis-react-school-api.yalantis.com/api/task0/users').then(res=> dispatch(addEmployees(res.data)))
  },[])



  return (
    <Container fluid className="App">
      <Employees />
    </Container>
  );
}

export default App;
