import{Link} from "react-router-dom";
import { useState } from "react"
import "./Sign.scss"

export default function Sign(){

    
//PW 숨기기/보기
const [isRevealPassword, setIsRevealPassword] = useState(false);
//Id, Pw
const [inputId, setInputId] = useState()
const [inputPw, setInputPw] = useState()

const togglePassword = () => {
    setIsRevealPassword((prevState) => !prevState);
  }

    return(
    <div className="Sign_container">
        <Link to="/"><img id="Mars_logo2" src="./main_logo.png"></img></Link>
        <img id="Sign_background_img"src="./Sign_img/Sign_background.png"></img>
        <div id="background_top_txt">여러분의 자격시험 능력을 지금 시험해보세요</div>
    <div className="Sign_content_conatiner">
        <Link to="/"><img id="close_button" src="./Sign_img/back_img.png"></img></Link>
        <div className="Sign_in_content">
            <div id="sign_in_text">로그인</div>
        <div id="text_input_content">
            <div id="input_text">아이디</div>
            <input type="text" id="idpw" onChange={(e) => setInputId(e.target.value)}  required ></input>
        </div>

        <div id="text_input_content">
            <div className="same_line">
                <div id="input_text">비밀번호</div>
                <label on onClick={togglePassword}>
                    {isRevealPassword ? <img id = "input_blind2"src="./Sign_img/eyes.png"></img> : <img id = "input_blind"src="./Sign_img/killeyes.png"></img>}
                    <div id = "input_blind_text">{isRevealPassword ? 'Show' : 'Hide'}</div>
                </label>
            </div>
            <input type={isRevealPassword ? 'text' : 'password'} id="idpw" onChange={(e) => setInputId(e.target.value)}  required></input>
        </div>
        
        <button id="sign_button">로그인</button>
   

            <div className="bottom_text">
                    <div id="input_text2">계정을 가지고있지 않습니까? <a>회원가입</a></div>    
            </div>
            
        </div>
        
    </div>
    </div>
    )
}