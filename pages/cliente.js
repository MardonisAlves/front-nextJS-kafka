import { useState } from 'react';
import styles from './../styles/User.module.css';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {CadastroCliente} from './../src/services/AuthService';

export default function Cliente() {
  const [first_name, setFirstname] = useState('');
  const [last_name, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const resetInputs = async () => {
    setFirstname('')
    setLastname('')
    setEmail('')
    setPhone('')
  }

  const handleSubmit = async (event) => {
    const errnotify = async (msg) => toast.success(msg , {
      position:'top-center',
      theme:'colored'
    });
    event.preventDefault()
    const data = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone
    }
    
    const  result = await  CadastroCliente(data);
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
                value={first_name}
                onChange={(e) => setFirstname(e.target.value)} />
            </li>
            <li>
              <label htmlFor="last-name">Last Name</label>
              <input type="text" id="last_name"
                placeholder="Enter your last name here"
                name="last_name" required
                value={last_name}
                onChange={(e) => setLastname( e.target.value )} />
            </li>
            <li>
              <label htmlFor="email">Email</label>
              <input type="email" id="email"
                placeholder="Enter your email here"
                name="email" required
                value={email}
                onChange={(e) => setEmail( e.target.value )} />
            </li>
            <li>
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone"
                placeholder="Enter your phone here"
                name="phone" required
                value={phone}
                onChange={(e) => setPhone( e.target.value )} />
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

