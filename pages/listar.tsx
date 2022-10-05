import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './../styles/Listar.module.css';


export default function Listar() {

    const [data, setData] = useState([]);
    const [msgdelete, setMsgdelete] = useState('');
    const url = 'http://localhost:3001/api/v1';

    useEffect(() => {
        fetch(`${url}/all/users`)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })

    }, [msgdelete]);

    const deleteCliete = async (id) => {
        const options = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        }
        const res = await fetch(`${url}/delete/user/${id}`, options);
        const result = await res.json();
        setMsgdelete(result.message);
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
                    {data.map((item, index) => {
                        return <>
                            <tr>
                                <td key={index + 1}>{item.first_name}</td>
                                <td key={index + 2}>{item.email}</td>
                                <td key={index + 3}>
                                    <Link href={"/update/" + item.email}>
                                        <a id={styles.update}>Update</a>
                                    </Link>
                                    <Link href="#">
                                        <a id={styles.delete} onClick={() => deleteCliete(item.user_id)}>Delete</a>
                                    </Link>
                                </td>
                            </tr>
                        </>

                    })}
                </tbody>
            </table>
        </>
    )
}