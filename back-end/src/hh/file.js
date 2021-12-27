// import React, { Component } from 'react'
//   import axios from 'axios';
// class File extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             answer:[],
//         };}

//         componentDidMount(){
//             axios
//               .get("api/answers")
//               .then(result =>{
//                 const answer=result.data
//                 this.setState({answer});
            
//           });}
        
//            delete(answerId){
//             console.log("in")
//             axios.delete(`/api/answers/delete/${answerId}`)
//             .then(res=>{
// const answer =this.state.answer.filter(item=>item.answerId!==answerId);
// this.setState({answer})

//             })

//            }
          
//   render(){   
//     return( <div>
//         <h3>Get</h3>
  
//         {this.state.answer.map((item => (
//           <div key={item.answerId}>
//             <h2>{item.answerText}</h2>
//             <p>{item.answerText2}</p>
//             <button onClick={(e)=> delete(item.answerId , e)}>Delete</button>
//             <p>_ _ _ _</p>
//           </div>
//         )))}
//       </div>
//         ) }}

// export default File;