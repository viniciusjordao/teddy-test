import { useEffect, useState } from 'react'
import './customers.css'
import Pagination from './pagination';
import CustomerCard from './customer-card';
import CustomerCreate from './customer-create';

function CustomersList() {

    interface Data {
        clients: [];
        currentPage: number;
        totalPages: number
    }

    const [data, setData] = useState<Data>();

    const [currentPage, setCurrentPage] = useState(1)
    const [clientsPerPage, setClientsPerPage] = useState("16")

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch(`https://boasorte.teddybackoffice.com.br/users?page=${currentPage}&limit=${clientsPerPage}`);
            const data = await res.json();
            setData(data);

        };

        fetchPosts();
    }, [currentPage, clientsPerPage]);

    console.log(data, currentPage, "lelele")

    return (
        <>
            <div className='clients-per-page'>
                <p><b>{clientsPerPage}</b> clientes encontrados</p>
                <div>
                    Clientes encontrados: &nbsp;
                    <select
                        className=""
                        onChange={(e) => setClientsPerPage(e.target.value)}
                    >
                        <option value="16" >
                            16
                        </option>
                        <option value="8" >
                            8
                        </option>
                        <option value="4" >
                            4
                        </option>
                    </select>
                </div>
            </div>
            <ul className='wrap'>
                {data && data.clients?.map((client: any) => {
                    return (
                        <CustomerCard
                            id={client.id}
                            name={client.name}
                            salary={client.salary}
                            companyValuation={client.companyValuation}
                            createdAt={client.createdAt}
                            updatedAt={client.updatedAt} />
                    )
                })}
            </ul>
            <CustomerCreate />
            {data && <Pagination pageNumbers={data?.totalPages} setCurrentPage={setCurrentPage} currentPage={data?.currentPage} />}
        </>
    )
}

export default CustomersList
