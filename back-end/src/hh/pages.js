import React, { useEffect, useState } from 'react'
import { Outlet, NavLink, useSearchParams } from "react-router-dom";
import axios from "axios"
import {Link} from "react-router-dom";
import Answers from "./answers";
import Services from "./services";
import Files from "./files";


export default function Pages() {
    let [searchParams, setSearchParams] = useSearchParams();


  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem"
        }}
      >
        <input
          value={searchParams.get("filter") || ""}
          onChange={event => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        <button>Here</button>

        <br />
        <Link to="/pages"> اسال </Link>
      </nav>
      <Outlet />
      
{/* <Services
 /> */}
 <Files
 />
    </div>
    
  );
}