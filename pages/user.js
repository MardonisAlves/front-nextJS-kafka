import { useState } from 'react';
import styles from './../styles/User.module.css';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function User() {
  const [first_name, setFirstname] = useState('');
  const [last_name, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const resetInputs = async () => {
    setFirstname({first_name: ''})
    setLastname({last_name:''})
    setEmail({email:''})
    setPhone({phone:''})
  }

  const handleSubmit = async (event) => {
    const errnotify = async (msg) => toast.warn(msg , {
      position:'top-center',
      theme:'colored'
    });
    event.preventDefault();
    const data = {
      first_name: first_name.first_name,
      last_name: last_name.last_name,
      email: email.email,
      phone: phone.phone
    }
    
    
    const JSONdata = JSON.stringify(data);
    const endpoint = 'http://localhost:3001/api/v1/create/user';
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSONdata
    }
    
    const res = await fetch(endpoint, options);
    const result = await res.json();
    resetInputs()
    errnotify(result.message)
  }
  return (
    <div>
      <div>
        <h3>Novo Cliente</h3>
        <ToastContainer />
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <ul className={styles.flex_outer}>
            <li>
              <label htmlFor="first-name">First Name</label>
              <input type="text" id="first_name"
                placeholder="Enter your first name here"
                name="first_name" required
                value={first_name.first_name}
                onChange={(e) => setFirstname({ first_name: e.target.value })} />
            </li>
            <li>
              <label htmlFor="last-name">Last Name</label>
              <input type="text" id="last_name"
                placeholder="Enter your last name here"
                name="last_name" required
                value={last_name.last_name}
                onChange={(e) => setLastname({ last_name: e.target.value })} />
            </li>
            <li>
              <label htmlFor="email">Email</label>
              <input type="email" id="email"
                placeholder="Enter your email here"
                name="email" required
                value={email.email}
                onChange={(e) => setEmail({ email: e.target.value })} />
            </li>
            <li>
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone"
                placeholder="Enter your phone here"
                name="phone" required
                value={phone.phone}
                onChange={(e) => setPhone({ phone: e.target.value })} />
            </li>
            <li>
              <button type="submit">Submit</button>
              <button type='reset'>Reset</button>
            </li>
          </ul>
        </form>
      </div>
      
    </div>
  )
}

