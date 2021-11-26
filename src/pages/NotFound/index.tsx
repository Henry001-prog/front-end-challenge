import React, { useEffect} from 'react';
import { Div, H2 } from './styles';
import { toast, ToastContainer } from 'react-toastify';

export default function NotFound(): JSX.Element {

    useEffect(() => {
        function message() {
            toast.error('There is nothing to see here. Go back to the previous page.');
        }
        message();
    },[]);

    return(
        <Div>
            <ToastContainer autoClose={15000} />
            <H2>404 Página não encontrada!</H2>
        </Div>
    );
}