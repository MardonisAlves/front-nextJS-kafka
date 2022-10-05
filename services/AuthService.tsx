import { Login } from "../interfaces/auth.interface";

export async function AuthService(data:Login){
    const url = `http://localhost:3001/api/v1`;
    const JSONdata = JSON.stringify(data);
    const options = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSONdata
      }
    const res = await fetch(`${url}/auth/login`, options);
    const result = await res.json();
    return result
}

export async function UserInfomation(email:string){
   const url = `http://localhost:3001/api/v1`;
   const res = await fetch(`${url}/auth/info/${email}`);
   const result = await res.json();
   return result
}

export async function CadastroCliente(data:any){

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
  return result;
}


export async function UpdateCliente(data:any , id:string){
  const endpoint = `http://localhost:3001/api/v1/update/user/${id}`;
  const JSONdata = JSON.stringify(data);
  const options = {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSONdata
  }

const resdata =  await fetch(endpoint, options)
const result = await resdata.json();
return result;
}