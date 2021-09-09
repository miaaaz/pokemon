import React, {useState, useEffect} from 'react'
import TopNavBar from "../navbar/Navbar";
import {Link} from "react-router-dom";
import Card from "./Card";
import List from "./List";
import Amplify, {API} from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

const Home = () => {

  useEffect(() => {
    API.get("pokemonapi", "/pokemons/pokemonid", {}).then((res) => console.log(res))
    // API.get("fetchAllPokemons", "/pokemons", {}).then(res => console.log(res))
  })

  return (
      <div>
        <TopNavBar/>
        <List/>
        {/*<AmplifySignOut />*/}


      </div>

  )
}

export default Home
// export default withAuthenticator(Home)