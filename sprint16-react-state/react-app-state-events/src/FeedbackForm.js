import { useState } from 'react';

export default function FeedbackForm() {

  console.log("Feedback Form initiere");
  console.log("salut din FeedbackForm");

  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');
  // const [user, setUser] = useState(initialUser);

  // const initialUser = {
  //   name: "Victor",
  //   age: 24,
  // };

  function getHello() {
    let text =  "Sending: ";
    text += message;

    return text;
  }
  
  if (isSent) {
    return <h1>Thank you!</h1>;
  } else {
    return (
      <form onSubmit={e => {
        e.preventDefault();
        alert(getHello());
        setIsSent(true);
      }}>
        <textarea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    );
  }
}
