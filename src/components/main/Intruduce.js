import{Link} from "react-router-dom";
import "./Intruduce.scss"
import Exam from "./Exam";

export default function Intrucduce(){
    return(
        <div className="Intruduce_container">
            <img id="vws_txt" src="./Main_cocktail/Intruduce_img/VWS_txt.png"></img>
            <video src="./Main_cocktail/Intruduce_img/intruduce_video.mp4" id="intruduce_img" poster="./Main_cocktail/Intruduce_img/intruduce_video_poster.png" controls></video>
            <div className="Content_about">VWS의 VR컨텐츠를 이용해</div>
            <div className="Content_about2">현실처럼 훈련할 수 있습니다</div>
            <div className="Video_img_contaioner">
                <img id="video_img"src="./Main_cocktail/Intruduce_img/video_img1.png"></img>
                <img id="video_img"src="./Main_cocktail/Intruduce_img/video_img2.png"></img>
            </div>
            <div>
            <div className="Content_about3">바텐더와 바리스타의 업무를 직접 경험해보세요</div>
            </div>
        </div>
    )
}