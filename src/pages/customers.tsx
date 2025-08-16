import { useState } from 'react'
import CustomersList from './customers-list';
//import { useCustomersContext } from '../context/customers-context';

function Customers() {

    const [username] = useState(() => {
        const savedUsername = localStorage.getItem('username');
        return savedUsername ? JSON.parse(savedUsername) : '';
    });

    return (
        <>
            <div>
                <p>Olá, {username}</p>
            </div>
            <CustomersList/>
        </>
    )
}

export default Customers
