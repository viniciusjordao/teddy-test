import './customers.css'

 interface Customer {
    id: number;
    name: string;
    salary: number;
    companyValuation: number;
    createdAt: string;
    updatedAt: string;


}

function CustomerCard(props: Customer) {

    const {
        id,
        name,
        salary,
        companyValuation,
        createdAt,
        updatedAt
    } = props


    return (
        <>
            <li className='customer-card'>
                <p className='name'>{name}</p>
                <p>Salário: {salary}</p>
                <p>Empresa: {companyValuation}</p>
                <div className='actions'>
                    <img src='src/assets/icons/plus-icon.png'/>
                    <img src='src/assets/icons/edit-icon.png'/>
                    <img src='src/assets/icons/trash-icon.png'/>
                </div>
            </li>
        </>
    )
}

export default CustomerCard
