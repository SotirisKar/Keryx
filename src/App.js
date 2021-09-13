import { useAuthState } from 'react-firebase-hooks/auth';
import 'firebase/compat/firestore';
import { auth } from "./Firebase";
import {Chat} from './Chat';
import Login from './Login';
import React from 'react';
import './Login.css';
import './App.css';

const TITLE = 'My Page Title'

function App() {
  const [user] = useAuthState(auth);
  return (
      <section className="main-section">
        {user ? (
          <>
            <Chat />
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