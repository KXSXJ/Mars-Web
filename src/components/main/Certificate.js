// import{Link} from "react-router-dom";
// import { useState } from "react"
import { useState } from "react"
import "./Certificate.scss"
import LookupCertificate from "./Lookup_My_Certificate";
import LookupCertificate2 from "./Lookup_My_Certificate2";

export default function Certificate(){

    const [Switchpage, setSwitchpage] =useState(false);
    const [Switchpage2, setSwitchpage2] =useState(false);

    function Certificate_index(){
        setSwitchpage(true);
    }

    function Certificate_index2(){
        setSwitchpage2(true);
    }

    return(
        <div>
            {Switchpage2 ===true? <LookupCertificate2/> :
            Switchpage ===false? 
     <div className="Certificate_container">
        <div id="certificate_Title"><div>내 자격증 확인</div></div>
        <div className="My_certificate_txt">현재 취득한 자격증</div>
        <div className="Video_img_contaioner">
            <div className="img_wrap">
                <img id="my_Certificate1"src="./Main_cocktail/certificate_img/My_Certificate1.png" alt="Certificate_img" onClick={Certificate_index}></img>
            </div>
            <div className="img_wrap">
                <img id="my_Certificate2"src="./Main_cocktail/certificate_img/My_Certificate2.png" alt="Certificate_img" onClick={Certificate_index2}></img>
            </div>
        </div>
        <div id="certificate_Title2"><div>실기시험 영상</div></div>
        <div className="My_certificate_txt">조주기능사 참고 영상</div>
        <iframe id="certifiacte_video" src="https://www.youtube.com/embed/ac1jwfn4R9Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

     </div>
       : <LookupCertificate/>}
     </div>

    )
}