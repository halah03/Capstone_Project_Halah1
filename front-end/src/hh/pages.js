import React, { useState } from 'react'
import Services from "./services";
import Files from "./files";



export default function Pages() {
  
let [displayBorder1, setDisplayBorder1] = useState(false);


return(
<div>

 <button
 className="btn"
 onClick={() => setDisplayBorder1(!displayBorder1)}
>


 إظهار المعلومات من  {displayBorder1 ? " الجداول" : " الجداول"}{" "}
</button>
<br />
{displayBorder1 && (
 
    <tr>
   <td>
   <Services
 />
  {/* asks */}
    </td>
    <td>
    <Files
 />
    </td>
  </tr> 
  )}
</div>
)}