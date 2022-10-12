
import { useEffect, useState } from 'react';
import { deleteCliente, allClientes } from './../src/services/AuthService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';


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

export default function Listar() {
    const [data, setData] = useState([]);
    const [smg, setMsg] = useState('');

    useEffect(() => {
        allClientes().then(data => {
            setData(data)
        })

    }, [smg]);

    const errnotify = async (smg: string) => toast.warning(smg, {
        position: 'top-center',
        theme: 'colored'
    });

    const deleteCliete = async (id: any, event: any) => {
        event.preventDefault();
        const result = await deleteCliente(id);
        setMsg(result.message)
        errnotify(result.message)
    }

    return (
        <>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                               Email
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length ? data.map((item: any, index) => {
                            return <>
                                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                      {item.email}
                                    </th>
                                    <td className="py-4 px-6">
                                       {item.first_name} {item.last_name}
                                    </td>
                                    <td className="py-4 px-6">
                                        <a href={"/update/" + item.email} className="m-2 font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        <a href="#" onClick={(e) => deleteCliete(item.user_id, e)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                                    </td>
                                </tr>
                            </>
                        }) : ''}
                    </tbody>
                </table>
            </div>

            <ToastContainer />
        </>
    )
}