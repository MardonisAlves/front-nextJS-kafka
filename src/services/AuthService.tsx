import { Login } from "../interfaces/auth.interface";
import { parseCookies } from "nookies";

const { 'nextauth.token': token } = parseCookies();
const url = `http://localhost:3001/api/v1`;

export async function AuthService(data: Login) {
  const JSONdata = JSON.stringify(data);
  const res = await fetch(`${url}/auth/login`,{
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSONdata
  });
  return await res.json();

}

export async function UserInfomation(email: string) {
  const res = await fetch(`${url}/auth/info/${email}`,{
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
  });
  return await res.json();
 
}

export async function CadastroCliente(data: any) {
  const JSONdata = JSON.stringify(data);
  const res = await fetch(`${url}/create/user`, {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSONdata
  });
  return await res.json();

}


export async function UpdateCliente(data: any, id: string) {
  const JSONdata = JSON.stringify(data);
  const resdata = await fetch(`${url}/update/user/${id}`, {
    method: 'PUT',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSONdata
  })
  return await resdata.json();

}

export async function getClienteEmail(email:string) {
  const resdata = await fetch(`${url}/verificar/user/${email}`, {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
 return await resdata.json();

}

export async function deleteCliente(id:string){
  const resdata = await fetch(`${url}/delete/user/${id}`,{
    method: 'DELETE',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
  return await resdata.json();
}

export async function allClientes(){
  const resdata = await fetch(`${url}/all/users`,{
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
  return await resdata.json();
}


