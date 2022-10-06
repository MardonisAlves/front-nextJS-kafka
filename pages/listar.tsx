import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './../styles/Listar.module.css';
import { deleteCliente, allClientes } from './../src/services/AuthService';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Listar() {
    const [data, setData] = useState([]);
    const [smg, setMsg] = useState('');

    useEffect(() => {
        allClientes().then(data => {
            setData(data)
        })
        
    }, [smg]);

    const errnotify = async (smg:string) => toast.warning(smg , {
        position:'top-center',
        theme:'colored'
      });

    const deleteCliete = async (id: any, event: any) => {
        event.preventDefault();
        const result = await deleteCliente(id);
        setMsg(result.message)
       await errnotify(smg)
    }

    return (
        <>
            <table className={styles.table}>
                <thead>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {data.map((item: any, index) => {
                        return <>
                            <tr>
                                <td key={index + 1}>{item.first_name}</td>
                                <td key={index + 2}>{item.email}</td>
                                <td key={index + 3}>
                                    <Link href={"/update/" + item.email}>
                                        <a id={styles.update}>Update</a>
                                    </Link>
                                    <Link href="#">
                                        <a id={styles.delete} onClick={(e) => deleteCliete(item.user_id, e)}>Delete</a>
                                    </Link>
                                </td>
                            </tr>
                        </>

                    })}
                </tbody>
            </table>
            <ToastContainer />
        </>
    )
}