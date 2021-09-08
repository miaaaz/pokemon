import React, {useState, useEffect} from 'react'
import TopNavBar from "../navbar/Navbar";
import {Link} from "react-router-dom";
import Card from "./Card";
import List from "./List";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

const Home = () => {

  return (
      <div>
        <TopNavBar/>
        <List/>
        <AmplifySignOut />


      </div>

  )
}

export default withAuthenticator(Home)