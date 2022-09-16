import{Link} from "react-router-dom";
import { useEffect, useState } from "react"
import "./Main.scss"
import Certificate from "./Certificate";
import Intrucduce from "./Intruduce";
import Buttom_Information from "./Bottom_Information";
import Exam from "./Exam";

export default function Main(){
    const [isImg1, setIsImg1]=useState("0");
    const [isImg2, setIsImg2]=useState("0");
    const [isImg3, setIsImg3]=useState("0");
    const [isImg4, setIsImg4]=useState("0");

    const [isImg_click1, setIsImg_click1]=useState("0");
    const [isImg_click2, setIsImg_click2]=useState("0");
    const [isImg_click3, setIsImg_click3]=useState("0");
    const [isImg_click4, setIsImg_click4]=useState("0");
    const [isImg_click5, setIsImg_click5]=useState("0");


    const Go_to_Main = ()=>{
        setIsImg_click1("0")
        setIsImg_click2("0")
        setIsImg_click3("0")
        setIsImg_click4("0")
        setIsImg_click5("0")
    }

    const ClickMenu1 = ()=>{
        setIsImg_click1("1")
        setIsImg_click2("0")
        setIsImg_click3("0")
        setIsImg_click4("0")
        setIsImg_click5("0")
    }

    const ClickMenu2 = ()=>{
        setIsImg_click1("0")
        setIsImg_click2("1")
        setIsImg_click3("0")
        setIsImg_click4("0")
        setIsImg_click5("0")
    }

    const ClickMenu3 = ()=>{
        setIsImg_click1("0")
        setIsImg_click2("0")
        setIsImg_click3("1")
        setIsImg_click4("0")
        setIsImg_click5("0")
    }

    const ClickMenu4 = ()=>{
        setIsImg_click1("0")
        setIsImg_click2("0")
        setIsImg_click3("0")
        setIsImg_click4("1")
        setIsImg_click5("0")
    }

    const ClickMenu5 = ()=>{
        setIsImg_click1("0")
        setIsImg_click2("0")
        setIsImg_click3("0")
        setIsImg_click4("0")
        setIsImg_click5("1")
    }



    return(
        <div>
        <div className="Main_Top_Background">
            <img id="main_top_background_img" src="./Main_cocktail/main_img/main_big_img2.png" width="100%"></img>
        </div>
        <div className="Main_Top_Content">
            <div className="Main_Top">
                <img onClick={Go_to_Main} id="Mars_logo" src="./main_logo.png"></img>
                <Link to="/Sgin_page"><img id="guest_Mode_profile" src="./Main_cocktail/main_img/Guest_Mode.png"></img></Link>
            </div>
            <div className="Main_Top_Txt">여러분의 창업능력을 지금 확인해보세요</div>
            <div id="main_test_button_img" onClick={ClickMenu5}><img id="icon2" src="./Main_cocktail/main_img/icon2.png"></img><div>창업 모의시험 테스트</div></div>
        </div>

        <div className="Menu_bar">
            <div onMouseOver={()=>setIsImg1("1")} onMouseOut={()=>setIsImg1("0")} onClick={ClickMenu1} >
                {isImg_click1 =="1" ? <img id="menu_items2" src="./Main_cocktail/main_img/menu_item1_click.png"></img> :
                (isImg1 =="0" ?
                <img id="menu_items2" src="./Main_cocktail/main_img/menu_item1.png"></img> :
                <img id="menu_items2" src="./Main_cocktail/main_img/menu_item_mouse_hover1.png"></img>)}
            </div>
            <div onMouseOver={()=>setIsImg2("1")} onMouseOut={()=>setIsImg2("0")} onClick={ClickMenu2}>
            {isImg_click2 =="1" ? <img id="menu_items" src="./Main_cocktail/main_img/menu_item2_click.png"></img> :
                (isImg2 =="0" ?
                <img id="menu_items" src="./Main_cocktail/main_img/menu_item2.png"></img> :
                <img id="menu_items" src="./Main_cocktail/main_img/menu_item_mouse_hover2.png"></img>)}
            </div>
            <div onMouseOver={()=>setIsImg3("1")} onMouseOut={()=>setIsImg3("0")} onClick={ClickMenu3}>
            {isImg_click3 =="1" ?  <img id="menu_items" src="./Main_cocktail/main_img/menu_item3_click.png"></img> :
            (isImg3 =="0" ?
            <img id="menu_items" src="./Main_cocktail/main_img/menu_item3.png"></img> :
            <img id="menu_items" src="./Main_cocktail/main_img/menu_item_mouse_hover3.png"></img>)}    
            </div>
 
 
            <div onMouseOver={()=>setIsImg4("1")} onMouseOut={()=>setIsImg4("0")} onClick={ClickMenu4}>
            {isImg_click4 =="1" ? <img id="menu_items" src="./Main_cocktail/main_img/menu_item4_click.png"></img> :
                (isImg4 =="0" ?
                <img id="menu_items" src="./Main_cocktail/main_img/menu_item4.png"></img> :
                <img id="menu_items" src="./Main_cocktail/main_img/menu_item_mouse_hover4.png"></img>)}
            </div>
            <div id="search_icon_contain"><img id="search_icon" src="./Main_cocktail/main_img/Search_icon.png"></img></div>
            {/* <div id="search_input"><input type="text"></input></div> */}
        </div>

            {isImg_click1=="0" && isImg_click2=="0" && isImg_click3=="0" && isImg_click4=="0" && isImg_click5=="0"? <Intrucduce/> :null}
            {isImg_click1 =="1" ? <Intrucduce/> : null}   
            {isImg_click2 =="1" ? <Intrucduce/> : null}
            {isImg_click3 =="1" ? <Certificate/> : null}
            {isImg_click4 =="1" ? <Certificate/> : null}
            {isImg_click5 =="1" ? <Exam/> : null}
            <Buttom_Information/>
        </div>
    )
}