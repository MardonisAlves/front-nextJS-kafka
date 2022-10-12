import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {ToastContainer} from 'react-toastify';
import {GetServerSideProps} from 'next'
import {UpdateCliente, getClienteEmail} from '../../src/services/AuthService';
import {ToastSuccess} from '../../src/utils/utils'
import { parseCookies } from 'nookies';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {['nextauth.token']: token} = parseCookies(ctx);
  if(!token){
    return {
      redirect:{
        destination:'/',
        permanent:false
      }
      
    }
  }

  return {
    props:{}
  }
  
}

export default function Update() {
  const { query } = useRouter();
  const [queryemail, setQueryEmail] = useState<any>(query.updat);
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

  const handleSubmit = async (event:any) => {
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
      ToastSuccess(result.message);
      reset();
    }
  }
  return (
    <>
    <div className="mt-10 sm:mt-0">
    <div className="md:grid md:grid-cols-1 md:gap-6">
      <div className="mt-5 md:col-span-2 md:mt-0">
        <form onSubmit={handleSubmit}>
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-8 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    value={first_name}
                    id="first_name"
                    autoComplete="given-name"
                    className="mt-1 block w-full 
                    rounded-md border-gray-300 
                    shadow-sm focus:border-indigo-500 
                    focus:ring-indigo-500 sm:text-sm"
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    value={last_name}
                    id="last_name"
                    autoComplete="family-name"
                    className="mt-1 block w-full 
                    rounded-md border-gray-300 
                    shadow-sm focus:border-indigo-500 
                    focus:ring-indigo-500 sm:text-sm"
                    onChange={(e) => setLastname( e.target.value )}
                  />
                </div>

                <div className="col-span-4 sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    id="email"
                    autoComplete="email"
                    className="mt-1 block w-full 
                    rounded-md border-gray-300 shadow-sm 
                    focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={(e) => setEmail( e.target.value )}
                  />
                </div>

                <div className="col-span-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                   Phone
                  </label>
                  <input
                    type="text"
                    value={phone}
                    name="phone"
                    id="phone"
                    autoComplete="phone"
                    className="mt-1 block w-full 
                    rounded-md border-gray-300 shadow-sm 
                    focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    onChange={(e) => setPhone( e.target.value )}
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
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
    <ToastContainer  
    style={{ width: "600px" }} />
    </>
  )
}