import { useAuthState } from 'react-firebase-hooks/auth';
import {ChatRoom} from './ChatRoom';
import 'firebase/compat/firestore';
import { auth } from "./Firebase";
import SignOut from './SignOut';
import Login from './Login';
import React from 'react';
import './Login.css';
import './App.css';



function App() {
  const [user] = useAuthState(auth);
  return (
      <section>
        {user ? (
          <>
            <header>
              <SignOut />
            </header>
            <ChatRoom />
          </>
        ) : (
          <>
            <Login />
          </>
        )}
      </section>
  );
}

export default App;