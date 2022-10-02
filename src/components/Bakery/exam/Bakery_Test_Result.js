import { useState } from "react";
import "./Bakery_Test_Result.scss"
export default function CocktailTestResult(name){
    

const[inputScore,setInputScore]=useState(59);
    // // 프로퍼티 타입 지정
    // Main.propTypes = {
    //     name: PropTypes.string
    //   }
      
    //   // 프로퍼티 기본값 지정
    //   Main.defaultProps = {
    //     name: '디폴트'
    //   }

    return(
        <div className="Test_Result_Container">
            <div className="Result_content_container">
                <div className="Result_top_text">모의테스트 결과</div>
                <div id="result_top_text1">조주 기능사</div>
                <img id="result_top_line"src="./Main_cocktail/Test_Result/top_line.png" alt="top_line"/>
                <img id="result_video_picture" src="./Main_cocktail/Test_Result/result_video_picture.png2" alt="result_video_picture"/>      
                {inputScore>=60 ? 
                <img id="stamp_img"  src="./Main_cocktail/Test_Result/pass_img.png" alt="stamp_img"/>:
                <img id="stamp_img" src="./Main_cocktail/Test_Result/fail_img.png" alt="stamp_img"/>
                }
                <div id="final_score" style={{color: (inputScore>=60 ? 'blue' : 'red')}}>총점 : {inputScore}점</div>
                <div id="result_bottom_text">{name}님의 <a>'제과 · 제빵기능사'</a> 모의시험 테스트는 <span style={{color: (inputScore>=60 ? 'blue' : 'red')}}>{inputScore>=60 ? '합격' :'불합격'}</span>입니다</div>    
                <button id="result_save">확인</button>
            </div>
            
        </div>
    )


 
}