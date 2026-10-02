import React from 'react'
import { useState } from 'react'
import './UserForm.css'

const UserForm = ({totalAmount, onAmountSuccess}) => {
  const [paymentData, setPaymentData]=useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  const handleChange=(e)=>{
    const{name,value}=e.target;
    setPaymentData((prev)=>({...prev, [name]: value}));
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    // Perform payment processing logic here \ Call API here
    alert(`Payment of ${totalAmount} successful!`);
    if(onAmountSuccess){
      onAmountSuccess();
    }
  };
  
  return (
    <div className='hero_section'>
      <section>
        <div className="payment_container">
          <h3>Payment Details</h3>
          
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="cardName">Cardholder Name:</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={paymentData.cardName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="cardNumber">Card Number:</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                maxLength={16}
                value={paymentData.cardNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="expiryDate">Expiry Date:</label>
              <input
                type="date"
                id="expiryDate"
                name="expiryDate"
                value={paymentData.expiryDate}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="cvv">CVV:</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={paymentData.cvv}
                onChange={handleChange}
                required
              />
            </div>
          </form>
          <button type="submit" onClick={handleSubmit}>Pay Now</button>

        </div>
      </section>
    </div>
  )
}

export default UserForm