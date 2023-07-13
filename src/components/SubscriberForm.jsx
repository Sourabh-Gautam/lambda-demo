
import React, { useState } from 'react'
import LoginService from '../services/LoginService';

const SubscriberForm = () => {
  const [email, setEmail] = useState("");

function emailHandler() {
  console.log(email);
  let obj = new LoginService();
  obj.setSubscriber(email).then(response => console.log(response.data))

}

  return (
    <div>
      <h1>To subscribe fill the details</h1>
      Email : <input type="email" onChange={(e) => setEmail(e.target.value)}/>
      <button onClick={() => emailHandler()}>Subscribe</button>
    </div>
  )
}

export default SubscriberForm