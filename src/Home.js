import React  from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./index.css";
import App from './App';
import Form from './components/Form'
import PopUp from './components/PopUp'



const Home = () => {
  
  return (
    <Router forceRefresh={true} >
        <Routes>
          <Route exact={true} path="/" element={<App/>}/>
          <Route  path="/register" element={<Form/>}/>
          <Route  path="/popup" element={<PopUp/>}/>
        </Routes>
    </Router> 
  
  );
};
export default Home;
