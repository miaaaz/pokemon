import React, {useState, useEffect} from 'react'
import TopNavBar from "../navbar/Navbar";
import {Link} from "react-router-dom";
import Card from "./Card";
import List from "./List";

const Home = () => {

  return (
      <div>
        <TopNavBar/>
        <List/>


      </div>

  )
}

export default Home