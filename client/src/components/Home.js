import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return(<div style = {{backgroundColor : "rgb(0, 68, 68)"}}>

        <h1 style={{textAlign : "center",color: "rgb(0, 255, 255)"}}>Uddan</h1>
        <p style={{textAlign : "center",fontStyle : "italic",color : "white"}}>"Because education is the only weapon for the poor."</p>
        <br/>
        <p style={{marginLeft : "60px",marginRight : "60px", color: "white", opacity: "0.8"}}>Every eighth urban child in India in the age-group of 0-6 years stays in slums, according to ‘Slums in India – A statistical compendium 2011' published by the Union government which gives a total sum of around 8 million.</p>
        <p style={{marginLeft : "60px",marginRight : "60px",marginTop : "20px", color: "white", opacity: "0.8"}}>Are we doing enough for these kids? And the answer is absolutely no.So join us in this technology driven movement of providing these kids their biggest weapon(as rightly said by Dr. B.R Ambedkar) i.e EDUCATION.</p>
        <p style={{marginLeft : "60px",marginRight : "60px",marginTop : "20px", color: "white", opacity: "0.8"}}>Come join us and be a part of the history change ….    </p>
        <p style={{textAlign : "center",color: "white", opacity: "0.8"}}>Are you a passionate Teacher ?</p>
        <Link to = "/register" className = "btn btn-primary" style={{marginLeft : "43%",width : "200px"}}>Join Here</Link>
        
        <div className="card mx-auto my-5" style={{width : "95%",border : "none",background : "transparent"}}>
            <h1 style={{color: "rgb(0, 255, 255)"}}># HOW IT ALL WORKS….</h1>
            <div className="row my-3">
            <div className="col-sm-6">
                <p style={{fontSize : "20px",color: "white", opacity: "0.8"}}>Whenever any person be it college student or a passionate  teacher wants to teach in his city or village , he has to approach a local NGO for connecting him to the needy children in his locality or even in the whole city also. So, to remove this hassle and time consuming process of visiting a NGO and then connecting with relevant needy students and that too from their limited data available, we have made an webapp on which various NGOs can contribute their data of needy ones in the database of the webapp and then any user(i.e teacher)  who wants to teach students nearest to them  can just go  on the web portal and search for kids and also apply filters such as age group of students ,their grade, etc  and get even more refined results.  This saves time and also gives most accurate list of target students the person wants to teach..
</p>        
            </div>
                <div className="col-sm-6">
                    <img src = "./rooftop-musahar-school-patna_orig (1).jpg" style={{width : "100%",float : "right"}}/>
                </div>
            </div>
        </div>

        <div className="card mx-auto my-5" style={{width : "95%",border : "none",background : "transparent"}}>
            <h1 style={{textAlign : "right",color: "rgb(0, 255, 255)"}}># Our Approach</h1>
            <div className="row my-3">
            <div className="col-sm-6">
                    <img src = "./ph_45849_176314.jpg" style={{width : "100%",float : "right"}}/>
                </div>
            <div className="col-sm-6">
                <p style={{fontSize : "20px",color: "white", opacity: "0.8"}}>We are solving this problem by providing a webapp where the poor children who need help can be registered with the help of local NGOs or frankly anyone who wants to contribute to this cause.
                </p><p style={{fontSize : "20px",color: "white", opacity: "0.8"}}>It will connect the passionate teachers to the one in need on the basis of their location and other preferences like age group , timing availability , etc . Then they can organize the classes offline</p>        
            </div>
                
            </div>
        </div>

    </div>    
    )
}