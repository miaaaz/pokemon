import React from 'react'
import TopNavBar from "../navbar/Navbar";

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import RandomPage from "./random/RandomPage";
import Footer from "../footer/Footer";

const Home = () => {


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