import "./Intruduce.scss"
import { ScrollControler } from "react-animation-on-scroll"
import { useEffect, useState } from "react"




export default function Intrucduce(){
  const [position, setPosition]=useState(0);

  function onScroll(){
    setPosition(window.scrollY)
  }
  useEffect(()=>{
    window.addEventListener("scroll", onScroll);
    return()=>{
      window.removeEventListener("scroll", onScroll);
    }
  },[]);
  
  


   return(
        
        <div className="Intruduce_container">
            <img id="vws_txt"  src="./Main_cocktail/Intruduce_img/VWS_txt.png"></img>
            <video src="./Main_cocktail/Intruduce_img/intruduce_video.mp4" id="intruduce_video" poster="./Main_cocktail/Intruduce_img/intruduce_video_poster.png" controls></video>
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
