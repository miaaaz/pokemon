import React, {useState, useEffect} from 'react'
import Navbar from "../navbar/Navbar";
import Table from "./Table";
import "./Pocket.css"

const Pocket = () => {
  return (
      <div className={"pocket-wrapper"}>
        <Navbar/>
        <Table/>

      </div>
  )
}

export default Pocket