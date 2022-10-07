import { GetServerSideProps } from "next";
import Main from "../components/main/main";
import {parseCookies} from 'nookies'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {['nextauth.token']: token} = parseCookies(ctx);

  if(token === undefined){
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

export default function Home() {
  return (
    <>
    
      <Main /> 
    </>

  )
}