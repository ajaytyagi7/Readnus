import React from 'react'
import { TiTickOutline } from "react-icons/ti";

const Payment = () => {

  const paymentHandler = async (e) => {
    const amount=9900
    const currency='INR'
    const reciptedId='123'
    const response = await fetch('http://localhost:5000/payment/order', {
   method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      amount, 
      currency, 
      reciptedId
    })
  });
  const order = await response.json()
  console.log('order',order)


  var option = {
    key: '',
    amount,
    currency,
    name: 'Readnus',
    description: 'Test Transaction',
    image: 'https://example.com/your_logo',
    order_id: order.id,
    handler: async function (response) {
        const data = {
            orderCreationId: order.id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
            amount,
            currency,
            reciptedId
        }
        const result = await fetch('http://localhost:5000/payment/capture', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resultData = await result.json();
        alert(resultData.msg)

        
    },
    prefill: {
        name: ' Readnus',
        email: 'tyagiajay785186@gmail.com',
        contact: '9999999999'
    },
    notes: {
        address: 'Luxify'
    },
    theme: {
        color: '#3399cc'
    }



}
var rzp1 = new window.Razorpay(option);
rzp1.open("Payment failed", function (response) {
    alert(response.razorpay_payment_id);
    alert(response.razorpay_order_id);
    alert(response.razorpay_signature);
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.step);
    alert(response.error.reason);


});
rzpl.open();
event.preventDefault();
}

  
  return (
    <div className='bg-secondary-subtle'>

      <div className="col-md-4 mx-auto py-5">
        <div className="card shadow p-5">
        <h1 className='text-4xl text-center font-semibold'>Subcription</h1>
          <div className="card-body">
            <h1 className='text-5xl font-bold text-center mt-3'>Rs 99</h1>
            <h1 className='text-center font-semibold mt-3 3xl'>Monthly</h1>
            <p className='text-center mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam aspernatur deleniti vero commodi fugiat totam error ipsam in quibusdam assumenda.</p>
            <h1 className='mt-4 text-center font-semibold '>Lorem ipsum dolor sit amet.</h1>
            <h1 className='mt-4 text-center font-semibold '>Lorem ipsum dolor sit amet.</h1>
            <h1 className='mt-4 text-center font-semibold '>Lorem ipsum dolor sit amet.</h1>
            <button className='bg-pink-500 p-3 w-100 mt-3' onClick={paymentHandler}>Pay now</button>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment