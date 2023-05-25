import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Tast from './components/pages/Task';
import Navbar from "./components/layout/Navbar";


function App() {

 

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home  />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/task" element={<Tast/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
