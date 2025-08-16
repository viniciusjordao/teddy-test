import { useState } from 'react'
import CustomersList from './customers-list';

function Customers() {

    const [username] = useState(() => {
        const savedUsername = localStorage.getItem('username');
        return savedUsername ? JSON.parse(savedUsername) : '';
    });

    return (
        <div className='customers-container'>
            <div>
                <p>Olá, {username}</p>
            </div>
            <CustomersList/>
        </div>
    )
}

export default Customers
