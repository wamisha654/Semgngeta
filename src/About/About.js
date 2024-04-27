import React from 'react';
import './About.css';
import List from '../Contact/List.js';
import pic from './pikture.jpg';

const About = () => {
    return (
        <div className="about">
            <div className="about-main">
                <div className="about-container">
                    <img src={pic} alt="Semagngeta's Picture" className="about-img" width="640" height="760" />
                    <article>
                    <p>Semagngeta Aychiluhem is an award-winning auto-didactic writer, producer, and director from 
                    Addis Abeba, Ethiopia with over 15 years of experience in the film industry. His passion lies in 
                    storytelling that sparks meaningful conversations and show different perspective. Above all, he 
                    believes in creating a cinema industry that tells Ethiopian stories from an Ethiopian perspective.<br /><br />

                    Semagngeta’s filmmaking journey took flight after the screening of his first short film, leading him 
                    to establish Guzo Films in 2018. Since then, he has written, directed, and produced several award-winning short movies that have made waves at international film festivals. Notable works include 
                    his short movies, “My happiness”, “Love and Brain” and “The Trip”, as well as a limited TV series 
                    “Liya”. Currently, Semagngeta is dedicated to working on an exciting TV series titled “Lijes?” in 
                    association with Canal+.<br /><br />

                    His artistic prowess has gained recognition on a global stage, as Semagngeta recently took part in 
                    esteemed events such as the Cannes film festival’s Marche du Film and the Durban Film Mart, 
                    where he was a panelist. He was awarded the top prize at 2020 IEFTA’s Global Film Expression 
                    conference and also won the first edition of NEFTI competition</p>
                    </article>
                </div>
            </div>
            <List />
            
             
        </div>
    );
}

export default About;


	 // <div>
	 // 	<div className = "about">
   //    <img src = {pic} />
   //    <div className="about-txt">
   //      <div className="abt-img"></div>
   //    	<h1>“Director’s Bio”</h1>
   //    	<p>Semagngeta Aychiluhem is an award-winning auto-didactic writer, producer, and director from 
   //        Addis Abeba, Ethiopia with over 15 years of experience in the film industry. His passion lies in 
   //        storytelling that sparks meaningful conversations and show different perspective. Above all, he 
   //        believes in creating a cinema industry that tells Ethiopian stories from an Ethiopian perspective.<br /><br />

   //         Semagngeta’s filmmaking journey took flight after the screening of his first short film, leading him 
   //         to establish Guzo Films in 2018. Since then, he has written, directed, and produced several awardwinning short movies that have made waves at international film festivals. Notable works include 
   //         his short movies, “My happiness”, “Love and Brain” and “The Trip”, as well as a limited TV series 
   //         “Liya”. Currently, Semagngeta is dedicated to working on an exciting TV series titled “Lijes?” in 
   //         association with Canal+.<br /><br />

   //         His artistic prowess has gained recognition on a global stage, as Semagngeta recently took part in 
   //         esteemed events such as the Cannes film festival’s Marche du Film and the Durban Film Mart, 
   //         where he was a panelist. He was awarded the top prize at 2020 IEFTA’s Global Film Expression 
   //         conference and also won the first edition of NEFTI competition</p>
   //    </div>
      
   //   </div>
   //   <List />
	 // </div>	
     
