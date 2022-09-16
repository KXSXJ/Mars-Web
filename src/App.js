
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Sign from "./components/auth/Sign";
import Home from "./components/main";
import Bartendet_Certificate from "./components/main/Certificate";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/bartender_certificate_page" element={<Bartendet_Certificate/>}/>
      <Route path="/Sgin_page" element={<Sign/>}/>
    </Routes>
  );
}

export default App;
