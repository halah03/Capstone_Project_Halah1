import React, { useState, useEffect } from 'react'
import axios from "axios"

import { Outlet, NavLink, useSearchParams } from "react-router-dom";




export default function Answers() {
  const [answerId, setanswerId] = useState("")
  const [answerText, setanswerText] = useState("")
  const [answerText2, setanswerText2] = useState("")


  const [myAnswers, setMyAnswers] = useState([{ answerId: "", answerText: "",answerText2:"" }]);

  function handelid(event) {
    setanswerId((event.target.value));
  }
  function handeltitle(event) {
    setanswerText((event.target.value));
  }
  function handelcontent(event) {
    setanswerText2((event.target.value));
  }

  let nuwUser = {
    answerId: answerId,
    answerText: answerText,
    answerText2: answerText2
}
useEffect(() => {
    axios.get("api/answers")
        .then(response => {
            console.log(response.data)
            setMyAnswers(response.data[0])
        })
    return () => { }
}, [])
function handleClick2() {
    axios({
        method: 'post',
        url: 'api/answers/add',
        data: nuwUser
    });
}
  function handle1(){
    axios({
      method: 'delete',
      url: "/api/answers/delete/1"
    })}

  return (
      <div>

          <label > Id  :</label>
        <br /> <input type="text" placeholder="" name="Id" onChange={handelid} />
        <br />
        <label > Title :</label>
        <br />
        <input type="text" placeholder="" name="name" onChange={handeltitle} />
        <br />
        <label > Content :</label>
        <br />
        <input type="text" placeholder="" name="email" onChange={handelcontent} />
        <br />
         <h2>my Answers details are:  {JSON.stringify(nuwUser)}</h2>
      <button onClick={handleClick2}>Post</button>
      <button onClick={handle1}>delete</button>  
    </div>
  )

}





// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";




// //the if for check the value if its true show more details

// export default function Answers() {


//     let [confirm, setConfirm] = useState(false);
//     // let params = useParams();
//     // let patient = getPatient(parseInt(params.id, 10));

//     let [heartrate, setheartrate] = useState("")
//     let [weight, setweight] = useState("")
//     let [bloodpressure, setbloodpressure] = useState("")
//     let [catagory, setcatagory] = useState("")

//     function onChangeHeart(e) {

//         setheartrate(( e.target.value))
//     }
//     function onChangeWeight(e) {
//         setweight(( e.target.value))
//     }


//     //w3school
//     function myFunction() {
//         alert("Add Successfully To Doctor List");
//     }
//     function onChangeBloodpressure(e) {
//         setbloodpressure(( e.target.value))
//     }
//     // function getPatient(id) {
//     //     return patients.find(
//     //         pat => pat.id === id)
//     // }
//     function handleSubmitt(event) {
//         event.preventDefault()
//         // patient.heartrate = heartrate;
//         // patient.weight = weight;
//         // patient.bloodpressure = bloodpressure;
//         // patient.catagory = catagory;
//         // docPatient.push(patient);
//         // localStorage.setItem('docPatient', JSON.stringify(docPatient));
//     }
//     function handleConfirm(e) {
//         e.preventDefault();
//         setConfirm(confirm = true)
//     }
//     function handleConfirmm(e) {
//       e.preventDefault();
//       setConfirm(confirm = true)
//   }
//     if (confirm) {
//         return (
          
//             <main style={{ padding: "1rem" }}>

//                 {/* <h2>Your Name: </h2>
//                 <h2>Your ID: </h2>
//                 <h2>Your Phone: </h2>
//                 <h2>Your Adress: </h2>
//                 <h2>Your Age: </h2> */}
//                 <button  onClick={handleConfirm} >Confirm</button>

//                 <br /><br />
//                 <form>
//                     <div>
//                         <label>Add Heart Rate</label><br />
//                         {/* <input type="text" onChange={onChangeHeart} /> */}
//                     </div>
//                     <div>
//                         <label>Add Blood Pressure</label><br />
//                         {/* <input type="text" onChange={onChangeBloodpressure} /> */}
//                     </div>
//                     <div>
//                         <label>Add Weight</label><br />
//                         {/* <input type="text" onChange={onChangeWeight} /> */}
//                         {/* <h2>category</h2> */}
//                     </div>
// {/* 
//                     <div>
//                         <input type="radio" name="drone" onChange={() => setcatagory("Critical")}
//                         />
//                         <label for="huey">Critical</label>
//                     </div>
//                     <div>
//                         <input type="radio" name="drone" onChange={() => setcatagory("Emergency")}
//                         />
//                         <label for="huey" >Emergency</label>
//                     </div>
//                     <div>
//                         <input type="radio" name="drone" onChange={() => setcatagory("Urgent")}
//                         />
//                         <label for="huey" >Urgent</label>
//                     </div>
//                     <div>
//                         <input type="radio" name="drone" onChange={() => setcatagory("Semi-Urgent")}
//                         />
//                         <label for="huey" >Semi-Urgent</label>
//                     </div>
//                     <div>
//                         <input type="radio" name="drone" onChange={() => setcatagory("Discharged")}
//                         />
//                         <label for="huey" >Discharged</label>
//                     </div> */}

//                     <br />
//                     {/* <button style={{ textAlign: 'center', padding: "8px", backgroundColor: "lightblue" }} onMouseLeave={myFunction} onClick={handleSubmitt} >Submit</button> */}
//                     <Link to="/doctor">
//                     </Link>
//                 </form>
//             </main>
//         );
//     }
//     else {
//         return (
//             <main style={{ padding: "1rem" }}>
//                 {/* <h2>Your Name: </h2>
//                 <h2>Your ID: </h2>
//                 <h2>Your Phone: </h2>
//                 <h2>Your Adress: </h2>
//                 <h2>Your Age: </h2> */}
//                 <button onClick={handleConfirm}>Confirm</button>
//             </main>
//         );
//     }
// }










// import React from "react";
// import { Outlet } from "react-router-dom";
// // import { Outlet,NavLink ,useSearchParams} from "react-router-dom";

// // import { getInvoices } from "../data1";

// export default function Answers() {
//     // let invoices = getInvoices();
//     // let [searchParams, setSearchParams] = useSearchParams();
  
//     return (
//       <div style={{ display: "flex" }}>
//         <nav
//           style={{
//             borderRight: "solid 1px",
//             padding: "1rem"
//           }}
//         >
//           {/* <input
//             value={searchParams.get("filter") || ""}
//             onChange={event => {
//               let filter = event.target.value;
//               if (filter) {
//                 setSearchParams({ filter });
//               } else {
//                 setSearchParams({});
//               }
//             }}
//           />
//           {Answers
//             .filter(answer => {
//               let filter = searchParams.get("filter");
//               if (!filter) return true;
//               let name = answer.name.toLowerCase();
//               return name.startsWith(filter.toLowerCase());
//             })
//             .map(answer => (
//               <NavLink
//                 style={({ isActive }) => ({
//                   display: "block",
//                   margin: "1rem 0",
//                   color: isActive ? "pink" : ""
//                 })}
//                 to={`/answers/${answer.number}`}
//                 key={answer.number}
//               >
//                 {answer.name}
//               </NavLink>
//             ))} */}
//         </nav>
//         <Outlet />
//       </div>
//     );
//   }