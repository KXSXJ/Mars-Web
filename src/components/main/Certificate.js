import{Link} from "react-router-dom";
import { useState } from "react"
import "./Certificate.scss"


export default function Certificate(){

    return(
        <div>
     <div className="Certificate_container">
        <div id="certificate_Title"><div>내 자격증 확인</div></div>
        <div className="My_certificate_txt">현재 취득한 자격증</div>
        <div className="Video_img_contaioner">
            <div className="img_wrap">
                <img id="my_Certificate1"src="./Main_cocktail/certificate_img/My_Certificate1.png"></img>
            </div>
            <div className="img_wrap">
                <img id="my_Certificate2"src="./Main_cocktail/certificate_img/My_Certificate2.png"></img>
            </div>
        </div>
        <div id="certificate_Title2"><div>실기시험 영상</div></div>
        <div className="My_certificate_txt">조주기능사 참고 영상</div>
        <iframe id="certifiacte_video" src="https://www.youtube.com/embed/ac1jwfn4R9Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div id="certificate_Title2"><div>실기시험 영상</div></div>
        <img id="certificate_date"src="./Main_cocktail/certificate_img/Certificate_date_img.png"></img>
        <button id="exam_notes_button"><b>조주기능사 시험 유의사항 확인 하기</b></button>
     </div>

     </div>

    )
}