import { useState } from "react";
import styles from './../styles/User.module.css'
export default function Cadastro(){
    const [senha, setSenha] = useState('');
    const [senha_repet, setSenhaRepet] = useState('');
    const [email, setEmail] = useState('');

    const resetCadastro = async () => {
        setSenha('');
        setEmail('');
        setSenhaRepet('')
    }

    const onSubmitCadastrar = () => {

    }
    
    return(
        <div>
            <h1>Cadastro</h1>
        <form onSubmit={onSubmitCadastrar}>
          <ul className={styles.flex_outer}>
            <li>
              <label htmlFor="email">Email</label>
              <input type="email" id="email"
                placeholder="Enter your email here"
                name="email" required
                value={email}
                onChange={(e) => setEmail( e.target.value )} />
            </li>
            <li>
              <label htmlFor="phone">Password</label>
              <input type="password" id="senha"
                placeholder="Enter your senha here"
                value={senha}
                name="senha" required
                onChange={(e) => setSenha( e.target.value )} />
            </li>

            <li>
              <label htmlFor="phone">Password</label>
              <input type="password" id="senha_repet"
                placeholder="Enter your senha here"
                value={senha_repet}
                name="senha_repet" required
                onChange={(e) => setSenhaRepet( e.target.value )} />
            </li>

            <li>
            <button type="submit">Cadastro</button>
            <button type='reset' onClick={resetCadastro}>Reset</button>
            </li>
            
          </ul>
        </form>
        </div>
    )
}