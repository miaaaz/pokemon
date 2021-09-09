import React  from 'react'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

const Login = () => {

  return (
      <div>

        <AmplifySignOut />


      </div>

  )
}

export default withAuthenticator(Login)