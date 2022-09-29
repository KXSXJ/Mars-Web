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
import TestResult1 from "./components/main/Cocktail_Test_Result"
import LookupCertificate from "./components/main/Lookup_My_Certificate";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Main1" element={<Main/>}/>
      <Route path="/bartender_certificate_page" element={<Bartendet_Certificate/>}/>
      <Route path="/Sign_page" element={<Sign/>}/>
      <Route path="/Guide" element={<Guide/>}/>
      <Route path="/SignUp" element={<SignUP/>}/>
      <Route path="/TestResult1" element={<TestResult1/>}/>
      <Route path="/Lookup_Certificate" element={<LookupCertificate/>}/>
    </Routes>
  );
}

export default App;
