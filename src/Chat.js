import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore, fieldValue, auth } from "./Firebase";
import React, { useRef, useState } from 'react';


export function SignOut() {
  return auth.currentUser && (
    <button className="chat-sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

export function Chat() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = useState('');
  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await messagesRef.add({
      text: formValue,
      createdAt: fieldValue.serverTimestamp(),
      uid,
      photoURL
    })
    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <div className="chat-container">
      <div className="chat-header">
        <SignOut />
      </div>
      <div className="chat-body">
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </div>
      <div className="chat-footer">
        <div class="chat">
          <form className="chat-message" onSubmit={sendMessage}>
            <input className="message-type" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Message" />
            <button className="message-send" type="submit" disabled={!formValue}>
              <img src={process.env.PUBLIC_URL + 'send_icon.png'}/>
            </button>
          </form>
        </div>
      </div>
    </div>
  </>)
}

export function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
  <>
    <div className={`message ${messageClass}`}>
      <img className="icon" src={photoURL || 'https://api.adorable.io/avatars/23/bob'} />
      <p>{text}</p>
    </div>
  </>
  )
}