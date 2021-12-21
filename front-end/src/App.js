import React from "react";
import { Outlet,Link } from "react-router-dom";


export default function App() {
  return (
    <div>
      <br></br>
     
      <h1>Bookkeeper</h1>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
          }}
        >     
          <Link to="/register">Page 0</Link> |{" "}

          <Link to="/asks">Page 1</Link> |{" "}

          <Link to="/answers">Page 2</Link> |{" "}

          <Link to="/services">Page 3</Link>
        </nav>
        <Outlet />
    </div> 
  )
}



