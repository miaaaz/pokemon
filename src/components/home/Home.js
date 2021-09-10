import React, {useState, useEffect} from 'react'
import TopNavBar from "../navbar/Navbar";
import {Link} from "react-router-dom";

import List from "./List";
import Amplify, {API} from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import RandomPage from "./random/RandomPage";
import Footer from "../footer/Footer";

const Home = () => {

  useEffect(() => {
    API.get("pokemonapi", "/pokemons/pokemonid", {}).then((res) => console.log(res))
  })

  return (
      <div>
        <TopNavBar/>
        <RandomPage/>
        {/*<AmplifySignOut />*/}
        <Footer/>


      </div>

  )
}

export default Home
// export default withAuthenticator(Home)