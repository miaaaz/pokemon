import React from 'react'
import Navbar from "../navbar/Navbar";
import Table from "./Table";
import "./Pocket.css"
import Footer from "../footer/Footer";

const Pocket = () => {
  return (
      <div className={"pocket-wrapper"}>
        <Navbar/>
        <Table/>
        <Footer/>

      </div>
  )
}

export default Pocket