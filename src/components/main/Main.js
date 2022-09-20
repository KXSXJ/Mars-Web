import{Link} from "react-router-dom";
import { useState } from "react"
// eslint-disable-line no-unused-vars
import "./Main.scss"
import Certificate from "./Certificate";
import Intrucduce from "./Intruduce";
import ButtomInformation from "./Bottom_Information";
import Rank from "./Rank"

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
            <img id="main_top_background_img" src="./Main_cocktail/main_img/main_big_img2.png" alt="Main_background_img" width="100%"></img>
        </div>
        <div className="Main_Top_Content">
            <div className="Main_Top">
                <img onClick={Go_to_Main} id="Mars_logo" src="./main_logo.png" alt="Mars_icon"></img>
                <Link to="/Sgin_page"><img id="guest_Mode_profile" src="./Main_cocktail/main_img/Guest_Mode.png" alt="Guest_icon"></img></Link>
            </div>
            <div className="Main_Top_Txt">여러분의 창업능력을 지금 확인해보세요</div>
            <div id="main_test_button_img" onClick={ClickMenu5}><img id="icon2" src="./Main_cocktail/main_img/icon2.png" alt="icon2"></img>
            <div>창업 모의시험 테스트</div></div>
        </div>

        <div className="Menu_bar">
            <div onMouseOver={()=>setIsImg1("1")} onMouseOut={()=>setIsImg1("0")} onClick={ClickMenu1} >
                {isImg_click1 ==="1" ? <img id="menu_items2" src="./Main_cocktail/main_img/menu_item1_click.png" alt="item1"></img> :
                (isImg1 ==="0" ?
                <img id="menu_items2" src="./Main_cocktail/main_img/menu_item1.png" alt="item1"></img> :
                <img id="menu_items2" src="./Main_cocktail/main_img/menu_item_mouse_hover1.png" alt="item1"></img>)}
            </div>
            <div onMouseOver={()=>setIsImg2("1")} onMouseOut={()=>setIsImg2("0")} onClick={ClickMenu2}>
            {isImg_click2 ==="1" ? <img id="menu_items" src="./Main_cocktail/main_img/menu_item2_click.png" alt="item2"></img> :
                (isImg2 ==="0" ?
                <img id="menu_items" src="./Main_cocktail/main_img/menu_item2.png" alt="item2"></img> :
                <img id="menu_items" src="./Main_cocktail/main_img/menu_item_mouse_hover2.png" alt="item2"></img>)}
            </div>
            <div onMouseOver={()=>setIsImg3("1")} onMouseOut={()=>setIsImg3("0")} onClick={ClickMenu3}>
            {isImg_click3 ==="1" ?  <img id="menu_items" src="./Main_cocktail/main_img/menu_item3_click.png" alt="item3"></img> :
            (isImg3 ==="0" ?
            <img id="menu_items" src="./Main_cocktail/main_img/menu_item3.png" alt="item3" ></img> :
            <img id="menu_items" src="./Main_cocktail/main_img/menu_item_mouse_hover3.png" alt="item3"></img>)}    
            </div>
 
 
            <div onMouseOver={()=>setIsImg4("1")} onMouseOut={()=>setIsImg4("0")} onClick={ClickMenu4}>
            {isImg_click4 ==="1" ? <img id="menu_items" src="./Main_cocktail/main_img/menu_item4_click.png" alt="item4"></img> :
                (isImg4 ==="0" ?
                <img id="menu_items" src="./Main_cocktail/main_img/menu_item4.png" alt="item4"></img> :
                <img id="menu_items" src="./Main_cocktail/main_img/menu_item_mouse_hover4.png" alt="item4"></img>)}
            </div>
           <div id="home_icon_contain" ><Link to="/"><img id="home_icon" src="./Main_cocktail/main_img/home_icon.png" alt="home_icon"></img></Link></div>
            
        </div>

            {isImg_click1==="0" && isImg_click2==="0" && isImg_click3==="0" && isImg_click4==="0" && isImg_click5==="0"? <Intrucduce/> :null}
            {isImg_click1 ==="1" ? <Intrucduce/> : null}   
            {isImg_click2 ==="1" ? <Intrucduce/> : null} 
            {isImg_click3 ==="1" ? <Certificate/> : null}
            {isImg_click4 ==="1" ? <Rank/> : null}
            {isImg_click5 ==="1" ? <Exam/> : null}
            <ButtomInformation/>
        </div>
    )
}