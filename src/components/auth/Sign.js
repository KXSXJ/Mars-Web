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
        <img id="Mars_logo2" src="./main_logo.png"></img>
        <img id="Sign_background_img"src="./Sign_img/Sign_background.png"></img>
    <div className="Sign_content_conatiner">
        <img id="back_button" src="./Sign_img/back_img.png"></img>
        <div className="Sign_in_content">
            <div id="sign_in_text">Sign in</div>

        <div id="text_input_content">
            <div id="input_text">Email or phone number</div>
            <input type="text" id="idpw" onChange={(e) => setInputId(e.target.value)}  required></input>
        </div>

        <div id="text_input_content">
            <div className="same_line">
                <div id="input_text">Password</div>
                <label on onClick={togglePassword}>
                    {isRevealPassword ? <img id = "input_blind2"src="./Sign_img/eyes.png"></img> : <img id = "input_blind"src="./Sign_img/killeyes.png"></img>}
                    <div id = "input_blind_text">{isRevealPassword ? 'Show' : 'Hide'}</div>
                </label>
            </div>
            <input type={isRevealPassword ? 'text' : 'password'} id="idpw" onChange={(e) => setInputId(e.target.value)}  required></input>
        </div>
        
        <button id="sign_button">Sign in</button>
        <div className="same_line">
            <label>     
            <div className="same_line">
            <input type="checkbox" id="checkbox_line"/>
            <div id="text_margin">Remember me</div> 
            </div>
            </label>
            <div id="text_margin2">Need help?</div>
        </div> 

            <div className="bottom_text">
                <div id="same_line">
                    <div id="input_text2">Don't have an acount? <a>Sign up</a></div>
                </div>        
                <div id="same_line">
                    <div id="input_text2">This page is protected by Google reCAPTCHA </div>
                </div> 
                <div id="same_line">
                    <div id="input_text2">to ensure you're not a bot. <a>Learn more.</a></div>
                </div>
            </div>
        </div>
        
    </div>
    </div>
    )
}