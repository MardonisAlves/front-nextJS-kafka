import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { useState } from "react";
import {CadastroUser} from './../src/services/AuthService';
import {ToastContainer} from 'react-toastify';
import {ToastSuccess, ToastWarning} from './../src/utils/utils';


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['nextauth.token']: token } = parseCookies(ctx);
  if (token === undefined) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

export default function Cadastro() {
  const [senha, setSenha] = useState('');
  const [senha_repet, setSenhaRepet] = useState('');
  const [email, setEmail] = useState('');


  const resetCadastro = async () => {
    setSenha('');
    setEmail('');
    setSenhaRepet('')
  }

  const onSubmitCadastrar = async (event:any) => {
    event.preventDefault();
    const data = {
      email:email,
      senha:senha,
      senha_repet:senha_repet
    }
    if(data.senha != data.senha_repet){
     return ToastWarning('Por favor verificar senha')
    }
    const result = await CadastroUser(data);
    resetCadastro()
    ToastSuccess(result.message)
  }

  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-1 md:gap-6">
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form onSubmit={onSubmitCadastrar}>
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
              <h2>Cadastro Usuário</h2>
                <div className="col-span-6 sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    id="email"
                    required
                    autoComplete="email"
                    className="mt-1 block w-full 
                    rounded-md border-gray-300 shadow-sm 
                    focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-8 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      value={senha}
                      id="first_name"
                      required
                      autoComplete="given-name"
                      className="mt-1 block w-full 
                    rounded-md border-gray-300 
                    shadow-sm focus:border-indigo-500 
                    focus:ring-indigo-500 sm:text-sm"
                      onChange={(e) => setSenha(e.target.value)}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                      Repet Password
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      value={senha_repet}
                      id="last_name"
                      required
                      autoComplete="family-name"
                      className="mt-1 block w-full 
                    rounded-md border-gray-300 
                    shadow-sm focus:border-indigo-500 
                    focus:ring-indigo-500 sm:text-sm"
                      onChange={(e) => setSenhaRepet(e.target.value)}
                    />
                  </div>

                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center 
                rounded-md border border-transparent 
                bg-indigo-600 py-2 px-4 text-sm font-medium 
                text-white shadow-sm hover:bg-indigo-700 
                focus:outline-none focus:ring-2 
                focus:ring-indigo-500 focus:ring-offset-2"
                >Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer 
     style={{ width: "600px" }}/>
    </div>
  )
}