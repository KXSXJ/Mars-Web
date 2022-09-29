import { Link } from "react-router-dom";
import { useState } from "react";
import { axiosC } from "../../axios";
import "./Sign_up.scss";

export default function Sign_Up() {
  //PW 숨기기/보기
  const [isRevealPassword, setIsRevealPassword] = useState(false);
  //Id, Pw
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputRePw, setInputREPw] = useState("");
  const [inputNickName, setInputNickName] = useState("");
 


  const togglePassword = () => {
    setIsRevealPassword((prevState) => !prevState);
  };

  let pwcheck=inputPw;

  function setPwlength(e){
    setInputPw(e.target.value)
    console.log(inputPw)
  }

  
// Btn click -> axiosC Login Post 요청
const postJoin = () => {
  axiosC({
    url: "",
    method: "post",
    data: {
      id: inputId,
      pw: inputPw,
      email: inputEmail,
      NickName: inputNickName
    },
  })
    .then((res) => {
      //Login 성공
      if (res.data.result) {
        localStorage.setItem("accessToken", res.data.token); // JWT 저장, (key : value) 형식
        localStorage.setItem("joinId", res.data.info[0]); // 계정 정보(id) 저장
        localStorage.setItem("joinpw", res.data.info[1]); // 계정 정보(pw) 저장
        localStorage.setItem("joinEmail", res.data.info[2]); // 계정 정보(email) 저장
        localStorage.setItem("joinNickName", res.data.info[3]); // 계정 정보(NickName) 저장
        
        window.alert("회원가입 완료"); // 계정 정보(이름) 이용
        window.location.replace("/Sign_page"); // 기본 경로로 이동
      }
      //Login 실패
      else {
        window.alert("정확한 정보를 입력해주세요.");
      }
    })
    .catch((err) => console.log(err));
};



  return (
    <div className="Sign_container">
      <Link to="/">
        <img id="Mars_logo2" src="./main_logo.png"></img>
      </Link>
      <img id="sign_background_img" src="./Sign_img/Sign_background.png"></img>
      <div id="background_top_text">
        여러분의 자격시험 능력을 지금 시험해보세요
      </div>
      <div className="Sign_up_content_container">
        <Link to="/">
          <img id="sign_up_close_button" src="./Sign_img/back_img.png"></img>
        </Link>
        <div className="Sign_up_content">
          <div id="sign_up_text">회원가입</div>
          <div className="Sign_up_top_text">
            <div id="sign_up_input_text2">
              사용하실 계정 정보를 입력해 주세요
            </div>
          </div>
          <div id="sign_up_text_input_content">
            <div id="sign_up_input_text">아이디</div>
            <input
              type="text"
              id="sign_up_idpw"
              onChange={(e) => setInputId(e.target.value)}
              required
              placeholder="아이디 입력"
            ></input>
          </div>
          <div id="sign_up_text_input_content">
            <div id="sign_up_input_text">이메일</div>
            <input
              type="text"
              id="sign_up_idpw"
              onChange={(e) => setInputEmail(e.target.value)}
              required
              placeholder="이메일 입력"
            ></input>
          </div>
          <div id="sign_up_text_input_content">
            <div id="sign_up_input_text">닉네임</div>
            <input
              type="text"
              id="sign_up_idpw"
              onChange={(e) => setInputNickName(e.target.value)}
              required
              placeholder="아이디 입력"
            ></input>
          </div>

          <div id="sign_up_text_input_content">
            <div className="Sign_up_same_line">
              <div id="sign_up_input_text">비밀번호</div>
              <label on onClick={togglePassword}>
                {isRevealPassword ? (
                   <img id="sign_up_input_blind" src="./Sign_img/killeyes.png"></img>
                ) : (
                  <img id="sign_up_input_blind2" src="./Sign_img/eyes.png"></img>
                )}
                <div id="sign_up_input_blind_text">
                  {isRevealPassword ? "숨기기" : "보기"}
                </div>
              </label>
            </div>
            <input
              type={isRevealPassword ? "text" : "password"}
              id="sign_up_idpw"
              onChange={setPwlength}
              required
              placeholder="비밀번호 입력"
            ></input>
            { pwcheck.length =="" ? null : pwcheck.length>=8 ? null :<div id="sign_up_guide_text">8글자 이상 입력해주세요</div>}
           
            <div id="sign_up_text_input_content2">
            <div id="sign_up_input_text">비밀번호 확인</div>
            <input
              type={isRevealPassword ? "text" : "password"}
              id="sign_up_idpw"
              onChange={(e) => setInputREPw(e.target.value)}
              required
              placeholder="비밀번호 확인"
            ></input>
              {inputPw==="" || inputRePw==="" ? null :  inputPw === inputRePw ?  null :<div id="sign_up_guide_text">비밀번호를 다시 확인해주세요</div>}
          </div>
          <div className="Sign_up_same_line2">
            준비하시는 기능사를 선택해주세요 <a>(선택)</a>
          </div>
          <div className="Sign_up_checkbox_container">
            <input id="sign_up_checkbox_array" type="checkbox" value="drink" /><a>조주기능사</a>
            <input id="sign_up_checkbox_array" type="checkbox" value="pastry"/><a>제과기능사</a>
            <input id="sign_up_checkbox_array" type="checkbox" value="bakery"/><a>제빵기능사</a>
          </div>
          </div>

          <button id="sign_up_button" name="Sign_up" onClick={postJoin}>
            회원가입
          </button>

          <div className="Sign_up_bottom_text">
            <div id="sign_up_input_text3">
              계정이 있으십니까? <Link to="/Sign_page"><a>로그인</a></Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
