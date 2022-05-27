import React from "react";

export default function Dashboard(){

    var x = document.getElementById("demo");

    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {console.log(position.coords.latitude,position.coords.longitude)});
        } else {
          x.innerHTML = "Geolocation is not supported by this browser.";
        }
      }

    return(
        <div style = {{backgroundColor : "rgb(0, 68, 68)"}}>
            <h1 style={{color: "white",textAlign : "center"}}>Welcome To Udaan</h1>
            <div className="row">
                <div className="card col-sm-4 my-3 mx-2" style={{background : "transparent",border : "none"}}>
                    <h1 style={{textAlign : "center",color: "white",opacity : "0.8"}}>Filters</h1>
                    <div className="row my-4">
                    <p className="col-sm-2" style={{fontSize : "20px",color: "white",opacity : "0.8"}}>Time</p>
                    
                    <div className="col-sm-3">
                    <input type={"radio"} name = "time"/><label style={{fontSize : "20px",color: "white",opacity : "0.8"}}>Morning</label>
                    </div>
                    <div className="col-sm-3">
                    <input type={"radio"} name = "time"/><label style={{fontSize : "20px",color: "white",opacity : "0.8"}}>Evening</label>
                    </div>
                    <div className="col-sm-3">
                    <input type={"radio"} name = "time"/><label style={{fontSize : "20px",color: "white",opacity : "0.8"}}>Night</label>
                    </div>
                    </div>
                </div>
                <div className="col-sm-7 my-3 card" style={{background : "transparent",border : "none"}}>
                    <button className="btn btn-primary" style={{width : "100%",float : 'right'}} onClick = {getLocation}>Search Students</button>
                </div>
            </div>
        </div>
    )
}