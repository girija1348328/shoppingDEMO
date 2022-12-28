import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Login from './component/Home';
import Welcome from './component/product';
import Image from "./component/addImage";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login/>} />    				
					 <Route  path="/welcome" element={<Welcome/>} />	

      <Route path="*" element={<Login/>} />
      
      <Route path="/image" element={<Image/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

