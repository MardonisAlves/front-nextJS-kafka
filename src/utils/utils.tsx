import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export async function ToastWarning(msg: string) {
    const errnotify =  (msg: string) => toast.warn(msg, {
        position: 'top-center',
        theme: 'colored'
    });
     
    return (
        <>  {errnotify(msg)}        
        </>
    )
}

export async function ToastSuccess(msg: string) {
    const errnotify =  (msg: string) => toast.success(msg, {
        position: 'top-center',
        theme: 'colored'
    });
    return (
        <> 
         {errnotify(msg)}      
        </>
    )
}