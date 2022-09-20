import{Link} from "react-router-dom";
import "./Rank.scss"

export default function Intrucduce(){
    return(
        <div className="Rank_container">
            <div id="rank_top_txt">랭킹확인</div>
            <div className="My_Rank_txt">지금<div>나의 랭킹</div>은?</div>
            <div className="top3_Rank_box_container">
                <div id ="top3_Rank_box">
                    <img id="rank_img"src="./Main_cocktail/Rank_img/1st.png" alt="1st_img"/>
                    <p>김일등</p>
                    <div className="top3_score_container">
                        <div id="rank_score">489</div>
                        <div id="point_txt">POINT</div>
                    </div>
                </div>
                <div id ="top3_Rank_box">
                    <img id="rank_img"src="./Main_cocktail/Rank_img/2nd.png" alt="1st_img"/>
                    <p>이이등</p>
                    <div className="top3_score_container">
                        <div id="rank_score">467</div>
                        <div id="point_txt">POINT</div>
                    </div>
                </div>
                <div id ="top3_Rank_box">
                    <img id="rank_img"src="./Main_cocktail/Rank_img/3rd.png" alt="1st_img"/>
                    <p>박삼등</p>
                    <div className="top3_score_container">
                        <div id="rank_score">432</div>
                        <div id="point_txt">POINT</div>
                    </div>
                </div>
            </div>
            
            <div className="Rank_box_container">
                    <div id="rank">407</div>
                    <img id="porfile_items" src="./Main_cocktail/Rank_img/user_profile.png" alt="profile"></img>
                    <div id="user_name_txt">another user</div>
                    <div className="score_container">
                        <div id="rank_score">432</div>
                        <div id="point_txt">POINT</div>
                    </div>
            </div>
            <div className="Rank_box_container">
                    <div id="rank">407</div>
                    <img id="porfile_items" src="./Main_cocktail/Rank_img/user_profile.png" alt="profile"></img>
                    <div id="user_name_txt">another user</div>
                    <div className="score_container">
                        <div id="rank_score">432</div>
                        <div id="point_txt">POINT</div>
                    </div>
            </div>
            <div className="Rank_box_container">
                    <div id="rank">407</div>
                    <img id="porfile_items" src="./Main_cocktail/Rank_img/user_profile.png" alt="profile"></img>
                    <div id="user_name_txt">another user</div>
                    <div className="score_container">
                        <div id="rank_score">432</div>
                        <div id="point_txt">POINT</div>
                    </div>
            </div>
            
        </div>
    )
}