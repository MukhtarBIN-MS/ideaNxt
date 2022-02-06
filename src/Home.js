import React  from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./index.css";
import App from './App';
import Form from './components/Form'



const Home = () => {
  
  return (
    <Router forceRefresh={true} >
        <Routes>
          <Route exact={true} path="/" element={<App/>}/>
          <Route  path="/register" element={<Form/>}/>
        </Routes>
    </Router> 
  
  );
};
export default Home;
