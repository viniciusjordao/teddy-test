import { useEffect, useState } from "react"

interface CustomerCreate {
    name: string
    salary: number
    companyValuation: number
}

const CustomerCreate = () => {

    const [isOpen, setIsOpen] = useState(false)

    const [name, setName] = useState('')
    const [salary, setSalary] = useState('')
    const [companyValuation, setCompanyValuation] = useState('')
    const [customerData, setCustomerData] = useState<CustomerCreate>()
    const [isCreated, setIsCreated] = useState(false)
    const [isRequired, setIsRequisred] = useState(false)




    const createCustomer = () => {
        if (name && salary && companyValuation) {
            fetch('https://boasorte.teddybackoffice.com.br/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(customerData),
            })
                .then(async () => {
                    console.log('sucsess')
                    setIsCreated(true)
                })
                .catch((err) => {
                    console.log('err', err)
                })
        }
        setIsRequisred(true)
    }

    return (
        <>
            <button
                onClick={setIsOpen} className='create-button'>
                Criar Cliente:
            </button>
            {isOpen &&
                <>
                    <div className='modal-content'>
                        <div className='modal-title'>
                            <p>Criar Cliente:</p>
                            <img
                                onClick={() => {
                                    setIsOpen(false)
                                    setIsCreated(false)
                                    setName('')
                                    setSalary('')
                                    setCompanyValuation('')

                                }}
                                src='src/assets/icons/plus-icon.png'
                            />
                        </div>
                        {isCreated ?
                            <div className='modal-title'>
                                <p>Cliente criado com sucesso!</p>
                                <img
                                    onClick={() => {
                                        setIsOpen(false)
                                        setIsCreated(false)
                                        setName('')
                                        setSalary('')
                                        setCompanyValuation('')

                                    }}
                                    src='src/assets/icons/plus-icon.png'
                                />
                            </div>
                            :
                            <>

                                <div className='modal-form'>
                                    <input
                                        type={'text'}
                                        onChange={(e) => {
                                            setName(e.target.value)
                                            setCustomerData({
                                                name: e.target.value,
                                                salary: parseInt(salary),
                                                companyValuation: parseInt(companyValuation)
                                            })
                                            if (name && salary && companyValuation) {
                                                setIsRequisred(false)
                                            }
                                        }}
                                        value={name}
                                        placeholder={'Digite o nome:'}
                                        required
                                    />
                                    <input
                                        type={'number'}
                                        onChange={(e) => {
                                            setSalary(e.target.value)
                                            setCustomerData({
                                                name: name,
                                                salary: parseInt(e.target.value),
                                                companyValuation: parseInt(companyValuation)
                                            })
                                            if (name && salary && companyValuation) {
                                                setIsRequisred(false)
                                            }
                                        }}
                                        value={salary}
                                        placeholder={'Digite o salário:'}
                                        required
                                    />
                                    <input
                                        type={'number'}
                                        onChange={(e) => {
                                            setCompanyValuation(e.target.value)
                                            setCustomerData({
                                                name: name,
                                                salary: parseInt(salary),
                                                companyValuation: parseInt(e.target.value)
                                            })
                                            if (name && salary && companyValuation) {
                                                setIsRequisred(false)
                                            }
                                        }}
                                        value={companyValuation}
                                        placeholder={'Digite o valor da empresa:'}
                                    />
                                    {isRequired && <p>Todos os campos precisam ser preenchidos</p>}
                                    <button
                                        onClick={() => {
                                            createCustomer()
                                        }} className='button'>
                                        Criar Cliente
                                    </button>
                                </div>
                            </>
                        }
                    </div>
                    <div className='modal'
                        onClick={() => {
                            setIsOpen(false)
                            setIsCreated(false)
                            setName('')
                            setSalary('')
                            setCompanyValuation('')

                        }}
                    ></div>
                </>
            }
        </>
    )
}

export default CustomerCreate
