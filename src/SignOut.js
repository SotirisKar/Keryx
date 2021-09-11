import { auth } from "./Firebase";
import React from 'react';


function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

export default SignOut;