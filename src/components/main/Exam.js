import { Link } from "react-router-dom";
import { useState } from "react";
import "./Exam.scss";
import CocktailA from "../exam/Cocktail_A";
import CocktailB from "../exam/Cocktail_B";
import CocktailC from "../exam/Cocktail_C";

export default function Exam() {
  const [ChoseExamA, setChoseExamA] = useState(false);
  const [ChoseExamB, setChoseExamB] = useState(false);
  const [ChoseExamC, setChoseExamC] = useState(false);
  const [hoverMouse1, sethoverMouese1] = useState(false);
  const [hoverMouse2, sethoverMouese2] = useState(false);
  const [hoverMouse3, sethoverMouese3] = useState(false);

  function Choice_ExamA() {
    setChoseExamA(true);
    setChoseExamB(false);
    setChoseExamC(false);
    console.log(ChoseExamA);
  }

  function Choice_ExamB() {
    setChoseExamA(false);
    setChoseExamB(true);
    setChoseExamC(false);
    console.log(ChoseExamB);
  }

  function Choice_ExamC() {
    setChoseExamA(false);
    setChoseExamB(false);
    setChoseExamC(true);
    console.log(ChoseExamC);
  }

  return (
    <div className="Exam_container">
      {ChoseExamA === false && ChoseExamB === false && ChoseExamC === false ? (
        <div className="Column_flex_container">
          <img id="exam_top_line" src="./Main_cocktail/exam_img/top_line.png" />
          <div id="exam_top_mini_txt">기능사 모의 필기 시험</div>
          <div id="exam_top_txt2">조주기능사 영역</div>

          <button
            id="chose_hover_btn"
            onMouseOver={() => sethoverMouese1(true)}
            onMouseOut={() => sethoverMouese1(false)}
          >
            {hoverMouse1 === false ? (
              <img
                src="./Main_cocktail/exam_img/ExamA_btn.png"
                id="Exam_btn"
                onClick={Choice_ExamA}
              />
            ) : (
              <img
                src="./Main_cocktail/exam_img/ExamA_btn_hover.png"
                id="Exam_btn"
                onClick={Choice_ExamA}
              />
            )}
          </button>
          <button
            id="chose_hover_btn"
            onMouseOver={() => sethoverMouese2(true)}
            onMouseOut={() => sethoverMouese2(false)}
          >
            {hoverMouse2 === false ? (
              <img
                src="./Main_cocktail/exam_img/ExamB_btn.png"
                id="Exam_btn"
                onClick={Choice_ExamB}
              />
            ) : (
              <img
                src="./Main_cocktail/exam_img/ExamB_btn_hover.png"
                id="Exam_btn"
                onClick={Choice_ExamB}
              />
            )}
          </button>
          <button
            id="chose_hover_btn"
            onMouseOver={() => sethoverMouese3(true)}
            onMouseOut={() => sethoverMouese3(false)}
          >
            {hoverMouse3 === false ? (
              <img
                src="./Main_cocktail/exam_img/ExamC_btn.png"
                id="Exam_btn"
                onClick={Choice_ExamC}
              />
            ) : (
              <img
                src="./Main_cocktail/exam_img/ExamC_btn_hover.png"
                id="Exam_btn"
                onClick={Choice_ExamC}
              />
            )}
          </button>
        </div>
      ) : null}
      {ChoseExamA === false &&
      ChoseExamB === false &&
      ChoseExamC === false ? null : (
        <div id="exam_top_txt">
          {ChoseExamA === true
            ? "모의시험 테스트 문제 A"
            : ChoseExamB === true
            ? "모의시험 테스트 B"
            : ChoseExamC === true
            ? "모의시험 테스트 문제 C"
            : null}
        </div>
      )}
      {ChoseExamA === true ? <CocktailA /> : null}
      {ChoseExamB === true ? <CocktailB /> : null}
      {ChoseExamC === true ? <CocktailC /> : null}
    </div>
  );
}
