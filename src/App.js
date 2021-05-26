import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { Container } from 'react-bootstrap';
import Employees from './components/Employees';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    axios.get('https://yalantis-react-school-api.yalantis.com/api/task0/users').then(res=> console.log(res))
  },[])



  return (
    <Container fluid className="App">
      <Employees />
    </Container>
  );
}

export default App;
