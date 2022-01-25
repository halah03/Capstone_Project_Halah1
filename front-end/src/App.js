import { Outlet,Link } from "react-router-dom";
import './App.css';
import Login from "./hh/login";
import React, { useState } from 'react';
import "./index.css"


export default function App() {

  let loggedIn = localStorage.getItem("isLoggedln")
  if (loggedIn != "yes") {
       return (
    <div style={{
      backgroundColor:"Snow"
    }
    }>
      <div class="btn">
        
      <img src="https://d2vrvpw63099lz.cloudfront.net/website-chat-for-lead-generation/header.png" width={"1100px"} height={"400px"} text-align= "center" alt=""/>
    {/* <img src="https://www.blogtyrant.com/wp-content/uploads/2016/03/qanda.png" width={"500px"} height={"500px"}/> */}
    {/* <img src="https://i2.wp.com/semantica.in/wp-content/uploads/2018/09/d939387e647dc6ed97f8122919806d6d830725fb-1.png" /> */}
</div>
<br/>
   
    <h1 style={{
      fontSize:"4rem"
    }}> مُعين للأسئلة البرمجية</h1>
     <nav 
           style={{
             borderBottom: "solid 1px",
             paddingBottom: "1rem",
             backgroundColor: "Cornsilk"
           }} > 

      
        <Link  to="/register">  <button class="button"> التسجيل </button> </Link>{" "} 
                  <Link to="/login"> <button class="button">الدخول</button> </Link> {" "}
                  <Link  to="/home">  <button class="button"> نبذه </button> </Link>{" "} 
      <br>
      </br>

        <Outlet></Outlet>
      </nav>
      </div>
    )
  }

  return (
    <div style={{
      backgroundColor:"Snow"
    }
    }>
        
      <img src="https://d2vrvpw63099lz.cloudfront.net/website-chat-for-lead-generation/header.png" width={"1100px"} height={"400px"} text-align= "center"/>
     
      <nav  style={{
             borderBottom: "solid 1px",
             paddingBottom: "1rem",
             backgroundColor: "Cornsilk"
           }}>
        <ul>
                  <Link  to="/register">  <button class="button"> التسجيل </button> </Link>{" "} 
                  <Link to="/pages"> <button class="button">الرئيسية</button> </Link> {" "}
                  <Link to="/asks">  <button class="button">اسأل</button> </Link>{" "}
        <Link to="/answers"> <button class="button">أجب</button></Link> {" "} 


         <Link onClick={() => { localStorage.setItem("isLoggedln", "no"); window.open("/home", "_self") }} to='/' > <button class="button"> تسجيل الخروج</button></Link>
        </ul>

      </nav>
      <Outlet/>
    </div>
  )
}



