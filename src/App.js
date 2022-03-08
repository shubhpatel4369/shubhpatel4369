import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from './Pages/Navbar';
import {Routes,Route} from 'react-router-dom';
import {Home} from './Pages/Home';
import {AboutUs} from './Pages/AboutUs';
import {ContactUs} from './Pages/ContactUs';
import {Traveldiary} from './Pages/Traveldiary';
import{Tripplan} from './Pages/Tripplan'
import{Simpleform} from './Components/Simpleform';
import{Tripplanning} from './Components/Tripplanning';
import { ApiDemo } from './Components/ApiDemo';
// import {Navbar} from 'react-bootstrap';

function App() {

  var title ="whatever" 

  return (
  <div>
    {/* <Navbar/> */}
    {/* <Tripplanning/> */}
    <ApiDemo/>
    <Routes>
      <Route path = "/home" element = {<Home/>}></Route>
      <Route path = "/aboutus" element = {<AboutUs/>}></Route>
      <Route path = "/contactus" element = {<ContactUs/>}></Route>
      <Route path = "/tripplan" element = {<Tripplan/>}></Route>
      <Route path = "/traveldiary" element = {<Traveldiary/>}></Route>
      <Route path = "/simpleform" element = {<Simpleform/>}></Route>
      
    </Routes>
  </div>

  );
}

export default App;
