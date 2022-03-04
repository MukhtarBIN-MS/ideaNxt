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
import Space1 from './components/spaces/space-1';
import Space2 from './components/spaces/space-2';
import Space3 from './components/spaces/space-3';
import Space4 from './components/spaces/space-4';
import Space5 from './components/spaces/space-5';
import Space6 from './components/spaces/space-6';
import Space7 from './components/spaces/space-7';



const Home = () => {
  
  return (
    <Router forceRefresh={true} >
        <Routes>
          <Route exact={true} path="/" element={<App/>}/>
          <Route  path="/register" element={<Form/>}/>
          <Route  path="/popup" element={<PopUp/>}/>
          <Route  path="/space-1" element={<Space1/>}/>
          <Route  path="/space-2" element={<Space2/>}/>
          <Route  path="/space-3" element={<Space3/>}/>
          <Route  path="/space-4" element={<Space4/>}/>
          <Route  path="/space-5" element={<Space5/>}/>
          <Route  path="/space-6" element={<Space6/>}/>
          <Route  path="/space-7" element={<Space7/>}/>
        </Routes>
    </Router> 
  
  );
};
export default Home;
