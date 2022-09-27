import { Link } from "react-router-dom";
import { useState } from "react";
import { axiosC } from "./../../axios";
import "./Sign.scss";

export default function Sign() {
  //PW 숨기기/보기
  const [isRevealPassword, setIsRevealPassword] = useState(false);
  //Id, Pw
  const [inputId, setInputId] = useState();
  const [inputPw, setInputPw] = useState("");

  const togglePassword = () => {
    setIsRevealPassword((prevState) => !prevState);
  };

  
  let pwcheck=inputPw;

  function setPwlength(e){
    setInputPw(e.target.value)
    console.log(inputPw)
  }



  // Btn click -> axiosC Login Post 요청
  const postLogin = () => {
    axiosC({
      url: "",
      method: "post",
      data: {
        id: inputId,
        pw: inputPw,
      },
    })
      .then((res) => {
        //Login 성공
        if (res.data.result) {
          localStorage.setItem("accessToken", res.data.token); // JWT 저장, (key : value) 형식
          localStorage.setItem("loginId", res.data.info[1]); // 계정 정보(id) 저장
          localStorage.setItem("loginName", res.data.info[0]); // 계정 정보(이름) 저장
          window.alert(`안녕하세요! ${localStorage.getItem("loginName")}님`); // 계정 정보(이름) 이용
          window.location.replace("/Main1"); // 기본 경로로 이동
        }
        //Login 실패
        else {
          window.alert("로그인 실패");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="Sign_container">
      <Link to="/">
        <img id="Mars_logo2" src="./main_logo.png"></img>
      </Link>
      <img id="Sign_background_img" src="./Sign_img/Sign_background.png"></img>
      <div id="background_top_txt">
        여러분의 자격시험 능력을 지금 시험해보세요
      </div>
      <div className="Sign_content_container">
        <Link to="/">
          <img id="close_button" src="./Sign_img/back_img.png"></img>
        </Link>
        <div className="Sign_in_content">
          <div id="sign_in_text">로그인</div>
          <div id="text_input_content">
            <div id="input_text">아이디</div>
            <input
              type="text"
              id="idpw"
              onChange={(e) => setInputId(e.target.value)}
              required
              placeholder="아이디 입력"
            ></input>
          </div>

          <div id="text_input_content">
            <div className="same_line">
              <div id="input_text">비밀번호</div>
              <label on onClick={togglePassword}>
                {isRevealPassword ? (
                  <img id="input_blind" src="./Sign_img/killeyes.png"></img>
                ) : (
                  <img id="input_blind2" src="./Sign_img/eyes.png"></img>
                )}
                <div id="input_blind_text">
                  {isRevealPassword ? "숨기기" : "보기"}
                </div>
              </label>
            </div>
            <input
              type={isRevealPassword ? "text" : "password"}
              id="idpw"
              onChange={setPwlength}
              required
              placeholder="비밀번호 입력"
            ></input>
          </div>
          { pwcheck.length =="" ? null : pwcheck.length>=8 ? null :<div id="guide_txt">8글자 이상 입력해주세요</div>}
           
          <button id="login_button" name="login" onClick={postLogin}>
            로그인
          </button>

          <div className="bottom_text">
            <div id="input_text2">
              계정을 가지고있지 않습니까? <Link to="/SignUp"><a>회원가입</a></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
