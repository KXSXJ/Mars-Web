import{Link} from "react-router-dom";
import { useState } from "react"
import "./Exam.scss"
import Buttom_Information from './Bottom_Information';

export default function Exam(){

    return(
        <div className="Exam_container">
   
        <img id="exam_text" src="./Main_cocktail/exam_img/exam_top_img.png"></img>
        <img id="exam_screen" src="./Main_cocktail/exam_img/exam_test_img.png"></img>
        <div className="exam_button">
            <img id="exam_items" src="./Main_cocktail/exam_img/exam_button1.png"></img>
            <img id="exam_items" src="./Main_cocktail/exam_img/exam_button2.png"></img>
        </div>
        </div>

    )
}