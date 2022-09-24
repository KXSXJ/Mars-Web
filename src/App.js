import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Sign from "./components/auth/Sign";
import Home from "./components/main/Choice"
import Bartendet_Certificate from "./components/main/Certificate";
import Main from "./components/main/Main";
import Guide from "./components/main/Guide"
import SignUP from "./components/auth/Sign_up";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Main1" element={<Main/>}/>
      <Route path="/bartender_certificate_page" element={<Bartendet_Certificate/>}/>
      <Route path="/Sign_page" element={<Sign/>}/>
      <Route path="/Guide" element={<Guide/>}/>
      <Route path="/SignUp" element={<SignUP/>}/>
    </Routes>
  );
}

export default App;
