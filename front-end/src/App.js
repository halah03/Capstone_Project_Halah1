import React from "react";
import { Outlet,Link } from "react-router-dom";
import './App.css';



export default function App() {
  return (
    <div>
      <br></br>
     
      <h1>مُعين</h1>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
          }}
        >     
          <Link to="/register">التسجيل</Link> |{" "}

          <Link to="/asks">اسأل</Link> |{" "}

          <Link to="/answers">أجب</Link> |{" "}

          <Link to="/pages">صفحة</Link> |{" "}

          <Link to="/files">ملف</Link> |{" "}

          <Link to="/registrations">استدعي التسجيل</Link>

          <Link to="/services">الخدمات\معلومات</Link>
        </nav>
        <Outlet />
    </div> 
  )
}



