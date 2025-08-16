import React, { createContext, useContext, useState, useEffect } from 'react'

const CustomersContext = createContext<any | null>(null)

const CustomersProvider: React.FunctionComponent = ({ children }:any)  => {
//   const orderFormContext = useOrderForm()
//   const [orderForm, setOrderForm] = useState<any>(null)
//   const { selectedItem }: any = useContext(ProductContext)
//   const [selectedService, setSelectedService] = useState({
//     warranty: { serviceType: 'GAE', value: '0', selectedSellers: null },
//     services: { serviceType: '', value: '0', selectedSellers: null, servicePrice: { order: 0 } },
//   })
//   const [selectedService2, setSelectedService2] = useState({
//     warranty: { serviceType: 'GAE', value: '0', selectedSellers: null },
//     services: { serviceType: '', value: '0', selectedSellers: null, servicePrice: { order: 0 } },
//   })
//   const [toggleCombo, setToggleCombo] = useState(false)

//   const [rf, setRf] = useState(0)
//   const [qa, setQa] = useState(0)

//   const [isCombo, setIsCombo] = useState(false)


   const [users, setCurrentUsers] = useState(null)

useEffect(() => {
    fetch('https://boasorte.teddybackoffice.com.br/users?page=1&limit=10')
      .then((response) => response.json())
      .then(async (data) => {
        setCurrentUsers(data)
      })
  }, [users])

//   useEffect(() => {
//     fetch('/api/checkout/pub/orderForm')
//       .then((response) => response.json())
//       .then(async (data) => {
//         setOrderForm(data)
//       })
//   }, [orderFormContext])

//   useEffect(() => {
//     if (orderForm) {
//       const isWarrantyProductOnCart = orderForm?.items?.find(
//         (item: any) => item.id === selectedItem.itemId
//       )
//       setCurrentWarrantyProductOnCart(isWarrantyProductOnCart)
//     }
//   }, [orderForm])

//   useEffect(() => {
//     if (!toggleCombo) {
//       setSelectedService({
//         warranty: { serviceType: 'GAE', value: '0', selectedSellers: null },
//         services: { serviceType: '', value: '0', selectedSellers: null, servicePrice: { order: 0 } },
//       })
//       setSelectedService2({
//         warranty: { serviceType: 'GAE', value: '0', selectedSellers: null },
//         services: { serviceType: '', value: '0', selectedSellers: null, servicePrice: { order: 0 } },
//       })
//     }

//   }, [toggleCombo])



//   useEffect(() => {
//     setRf(selectedService.services.servicePrice && selectedService.services.servicePrice.order)

//   }, [selectedService])

//   useEffect(() => {

//     setQa(selectedService.services.servicePrice && selectedService2.services.servicePrice.order)

//   }, [selectedService2])

//   useEffect(() => {

//     if (rf === qa && rf !== 0 && qa !== 0) {
//       setToggleCombo(true)
//       setRf(0)
//       setQa(0)
//     }

//   }, [qa])

//   useEffect(() => {

//     if (rf === qa && rf !== 0 && qa !== 0) {
//       setToggleCombo(true)
//       setRf(0)
//       setQa(0)
//     }

//   }, [rf])

//   useEffect(() => {
//     setIsCombo(toggleCombo)

//   }, [toggleCombo])

  return (
    <CustomersContext.Provider
      value={{
        users
      }}
    >
      {children}
    </CustomersContext.Provider>
  )
}

export function useCustomersContext() {
  const context = useContext(CustomersContext)

  if (!context) {
    throw new Error('xablau')
  }

  return context
}

export default CustomersProvider
