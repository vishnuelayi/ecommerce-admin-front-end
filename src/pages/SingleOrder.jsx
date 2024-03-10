import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleOrder } from '../features/auth/authSlice';

const OrderDetails = () => {
  const { orderId } = useParams();

  const dispatch = useDispatch()

  useEffect(()=> {
dispatch(getSingleOrder(orderId))
  },[])
  // Replace this with your API call to fetch order details
  const orderDetails = useSelector((state) => state.auth.singleOrder)

  return (
    <div className="container mt-4">
      <h2 className='mb-3'>Order Details</h2>
      <div className="card">
        <div className="card-header">
          Order ID #{orderId}
        </div>
        <div className="card-body">
          <h5 className="card-title">Shipping Information</h5>
          <p>Name: {orderDetails?.shippingInfo?.firstName} {orderDetails?.shippingInfo?.lastName}</p>
          <p>Address: {orderDetails?.shippingInfo?.address}, {orderDetails?.shippingInfo?.city}, {orderDetails?.shippingInfo?.state} - {orderDetails?.shippingInfo?.pin}</p>
          <p>Additional Details: {orderDetails?.shippingInfo?.others}</p>

          <h5 className="card-title mt-3">Payment Information</h5>
          <p>Razorpay Order ID: {orderDetails?.paymentInfo?.razorpayOrderId}</p>
          <p>Razorpay Payment ID: {orderDetails?.paymentInfo?.razorpayPaymentId}</p>

          <h5 className="card-title mt-3">Order Items</h5>
          <ul className="list-group">
            {orderDetails?.orderItems?.map((item, index) => (
              <li key={index} className="list-group-item">
                <p>Product ID: {item?.product}</p>
                <p>Color ID: {item?.color}</p>
                <p>Quantity: {item?.quantity}</p>
                <p>Price: ₹{item?.price}</p>
              </li>
            ))}
          </ul>

          <h5 className="card-title mt-3">Order Details</h5>
          <p>Total Price: ₹{orderDetails?.totalPrice}</p>
          <p>Total Price After Discount: ₹{orderDetails?.totalPriceAfterDiscount}</p>
          <p>Order Status: {orderDetails?.orderStatus}</p>
          <p>Paid At: {orderDetails?.paidAt.split("T")[0]}</p>

          <p>Order Created At: {orderDetails?.createdAt.split("T")[0]}</p>
          <p>Last Updated At: {orderDetails?.updatedAt.split("T")[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
