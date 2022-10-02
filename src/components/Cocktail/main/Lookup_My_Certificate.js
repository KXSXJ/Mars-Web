import { useState } from "react";
import{Link} from "react-router-dom";
import "./Lookup_My_Certificate.scss";
import Certificate from "./Certificate";


export default function LookupCertificate() {
  const [Search_id, setSerach_id] = useState("");
  const [Nextpage, setNextpage] = useState(false);
  const [Backpage, setBackpage] = useState(false);

  
  function Searchtoggle(){
    if(Search_id==="승재")
    {
        setNextpage(true);
    }
    else{
        window.alert("아이디 및 성함을 확인해주세요.");
    }
  }


  function Goto_back(){
    setBackpage(true);
  }


  return (
    <div>{
        Backpage ===false ?
      (Nextpage === false ? (
        <div className="Lookup_Container">
          <div className="Lookup_content_container">
            <div className="Lookup_top_text">내 자격증 확인</div>
            <div id="lookup_id_name">아이디 또는 성함 입력</div>
            <input
              type="text"
              id="lookup_input_id"
              onChange={(e) => setSerach_id(e.target.value)}
              required
              placeholder="아이디 또는 성함 입력"
            ></input>
            <div className="Lookup_button_line">
              <button id="search_btn" onClick={Searchtoggle}>확인</button>
              <button id="cancle_btn" onClick={Goto_back} >취소</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="Lookup_Container">
          <div className="Lookup_content_container">
            <div className="Lookup_top_text">조주기능사</div>
            <img
              id="user_profile_img"
              src="./Main_cocktail/Lookup_Certificate/user_profile_img.png"
              alt="user_profile_img"
            />
            <div id="lookup_mid_text">VWS <a>조주기능사</a> 자격증을</div>
            <div id="lookup_mid_text">취득하였음을 증명합니다.</div>
            <div id="lookup_Date">2022.09.29</div>
            <button id="lookup_close_btn" onClick={Goto_back}>닫기</button>
          </div>
        </div>
      ))
    : <Certificate/>}
    </div>
  );
}