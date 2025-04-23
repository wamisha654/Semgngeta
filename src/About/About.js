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
                    <p>Semagngeta Aychiluhem is an award-winning writer, director, and the founder of Guzo Films, 
                    a company dedicated to bringing Ethiopian and African stories to global audiences with craft, clarity, 
                    and cultural integrity.<br /><br />

                    A former mechanical and aircraft engineer, Semagngeta’s unexpected path into filmmaking informs both his 
                    technical precision and his thematic focus. His work explores the tension between duty, identity, and transformation, 
                    while also raising deeper questions about society through a sharply focused local lens.
                    <br /><br />

                    His breakout series Lijes?, commissioned by Canal+ and winner of the Pan-African Film & TV Award, established him as 
                    a bold new voice in African storytelling. He also leads Bridge-House, an award-winning startup that distributes films 
                    and trains emerging Ethiopian filmmakers to create with limited resources. This mission is rooted in his own experience 
                    navigating the challenges of independent filmmaking.
                    <br /><br />

                    Semagngeta’s work and vision have gained international recognition. He has participated in Cannes’ Marché du Film, 
                    Berlinale’s European Film Market, and the Durban Film Mart, where he also served as a panelist. He was awarded top 
                    prize at the 2020 IEFTA Global Film Expression conference and won the inaugural NEFTI competition.
                    <br /><br />
  

                    He is currently developing his debut feature film, Guardian of the Ark, in partnership with a leading German co-producer and distributor.</p>
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
     
