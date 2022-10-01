import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './../styles/Listar.module.css';



export default function Listar() {
    const [data, setData] = useState([]);
    const url = 'http://localhost:3001/';
    useEffect(() => {
        fetch(`${url}api/v1/all/users`)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })

    }, [])

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
                                    <Link href={"/update/"+item.email}><a id={styles.update}>Update</a></Link>
                                    <Link href="/" ><a id={styles.delete}>Delete</a></Link>
                                </td>
                            </tr>
                        </>

                    })}
                </tbody>
            </table>
        </>
    )
}