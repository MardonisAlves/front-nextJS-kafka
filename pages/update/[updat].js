import styles from '../../styles/User.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {UpdateCliente, getClienteEmail} from '../../src/services/AuthService';


export default function Update() {
  const { query } = useRouter();
  const [queryemail, setQueryEmail] = useState(query.updat);
  const [msg, setMsg] = useState('');
  const [first_name, setFirstname] = useState('');
  const [last_name, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [id, setId]= useState('');
 

  useEffect( () => {
       getClienteEmail(queryemail)
       .then( user => {
        setFirstname(user[0].first_name);
            setLastname(user[0].last_name);
            setEmail(user[0].email);
            setPhone(user[0].phone);
            setId(user[0].user_id)
            setMsg('')
       })
  },[msg]);

  const reset = async () => {
    setFirstname('');
    setLastname('');
    setEmail('');
    setPhone('');
    setId('')
  }

  const handleSubmit = async (event) => {
    const errnotify = async (msg) => toast.success(msg , {
      position:'top-center',
      theme:'colored'
    });
    event.preventDefault();
    const data = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone
    }
   const result = await UpdateCliente(data, id);
    if(result.message){
      setMsg(result.message)
      errnotify(result.message);
      reset();
    }
  }
  return (
    <div>
      <h3>Atualização cadastral</h3>
      <form onSubmit={handleSubmit}>
        <ul className={styles.flex_outer}>
              <li>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first_name"
                  placeholder={first_name}
                  value={first_name}
                  name="first_name" required
                  onChange={(e) => setFirstname(e.target.value)} />
              </li>
              <li>
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last_name"
                  placeholder={last_name}
                  name="last_name" required
                  value={last_name}
                  onChange={(e) => setLastname( e.target.value )} />
              </li><li>
                <label htmlFor="email">Email</label>
                <input type="email" id="email"
                  placeholder={email}
                  name="email" required
                  value={email}
                  onChange={(e) => setEmail( e.target.value )} />
              </li><li>
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone"
                  placeholder={phone}
                  name="phone" required
                  value={phone}
                  onChange={(e) => setPhone( e.target.value )} />
              </li><li>
                <button 
                type="submit">Update</button>
                <button 
                type='reset' onClick={reset}>Reset</button>
              </li>  
        </ul>
      </form>
      <ToastContainer />
    </div>
  )
}