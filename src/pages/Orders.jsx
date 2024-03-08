import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch } from "react-redux";
import { getOrders, updateOrderStatus } from "../features/auth/authSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "S.No",
    dataIndex: "id",
  },
  {
    title: "Order Date",
    dataIndex: "orderDate",
  },
  {
    title: "Item Count",
    dataIndex: "itemCount",
  },
  {
    title: "Customer",
    dataIndex: "customer",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Order Details",
    dataIndex: "orderDetails",
    render: (text, record) => (
      <Link to={`${record?.orderDetails?.itemId}`}>View Details</Link>
    ),
  },
];

function Orders() {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state?.auth?.orders);
  const [status, setStatus] = useState({});
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  useEffect(() => {
    if (Object.keys(status).length !== 0) {
      dispatch(updateOrderStatus(status));
    }
  }, [status]);

  useEffect(() => {
    let data1 = [];
    for (let i = 0; i < orderState?.length; i++) {
      data1.push({
        key: i,
        id: i + 1,
        customer:
        <span style={{ fontWeight: "bold" }}>
        {orderState[i]?.userId?.firstname} {orderState[i]?.userId?.lastname}
      </span>,
        orderDate: orderState[i]?.createdAt?.split("T")[0],
        itemCount: orderState[i]?.orderItems?.length,
        amount: orderState[i]?.totalPriceAfterDiscount,
        status: (
          <>
            <select
              className="form-control form-select"
              id="status"
              name="status"
              defaultValue={orderState[i]?.orderStatus}
              onChange={(e) =>
                setStatus({
                  itemId: orderState[i]?._id,
                  updatedStatus: e.target.value,
                })
              }
            >
              <option value="ordered">Ordered</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
            </select>
          </>
        ),
        orderDetails: {
          itemId: orderState[i]?._id,
        },
      });
    }
    setOrderData(data1);
  }, [orderState]);

  return (
    <div className="mt-4">
      <h3 className="mt-4 title">Orders</h3>
      <div>
        <Table columns={columns} dataSource={orderData} />
      </div>
    </div>
  );
}

export default Orders;
