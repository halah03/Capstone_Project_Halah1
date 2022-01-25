import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function Home() {

  

  
  return (<>
    <h1>       بيانات الموقع          </h1>
    <br></br>
    <div className="row">
    <div className="col-md-6">
              <table style={{border:"1px  solid black" }}>
              <tr>
                <td  style={{border:"1px  solid black", width:"600px", height:"50px"}} >إسم الموقع  </td>
                <td  style={{border:"1px  solid black", width:"600px", height:"50px"}} >   موقع مُعين للأسئلة البرمجية </td>

              </tr>
             
              <tr>
                <td  style={{border:"1px  solid black",  width:"600px" , height:"50px"}} >للتواصل  </td>
                <td  style={{border:"1px  solid black", width:"600px", height:"50px"}} >04629748 </td>
                
              </tr>
            
              <tr>
                <td  style={{border:"1px  solid black", width:"600px", height:"50px"}} >العنوان </td>
                <td  style={{border:"1px  solid black", width:"600px", height:"50px"}} >  الرياض </td>
                
              </tr>

              <tr>
                <td  style={{border:"1px  solid black", width:"600px", height:"50px"}} >الايميل  </td>
                <td  style={{border:"1px  solid black", width:"600px", height:"50px"}} >mud2200@gmail.com </td>
                
              </tr>
              </table>
    </div>     
    </div>
     </>
 )
}
