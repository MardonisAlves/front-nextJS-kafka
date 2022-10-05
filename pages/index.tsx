import { useState } from "react"
import styles from './../styles/User.module.css';
import { useContext } from "react";
import { AuthContext } from '../context/AuthContext';

export default function Login() {
  const [senha, setSenha] = useState('jk8yup02@');
  const [email, setEmail] = useState('mardonisgp@gmail.com');
  const {signIn} = useContext(AuthContext)

  async function  authLogin() {
    const data = {
      email: email,
      senha: senha
    }
    await signIn(data);
  }

  return (
    <div>
      <form>
        <ul className={styles.flex_outer}>
          <li>
            <label htmlFor="email">Email</label>
            <input type="email" id="email"
              placeholder="Enter your email here"
              name="email" required
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </li>
          <li>
            <label htmlFor="phone">Password</label>
            <input type="password" id="senha"
              placeholder="Enter your senha here"
              value={senha}
              name="senha" required
              onChange={(e) => setSenha(e.target.value)} />
          </li>

          <li>
            <button type="button" onClick={authLogin}>Login</button>
            <a href="/cadastro">
              <button type="button">Cadastro</button>
            </a>
            <button type='reset'>Reset</button>
          </li>
        </ul>
      </form>
    </div>
  )
}