import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch } from "react-redux";
import { getOrders } from "../features/auth/authSlice";
import { useSelector } from "react-redux";

const data1 = [];

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
    title: "Order ID",
    dataIndex: "orderId",
  },
  {
    title: "Customer",
    dataIndex: "customer",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];

function Orders() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const orderState = useSelector((state) => state.auth.orders);
  // console.log(orderState);



  if (orderState) {
    for (let i = 0; i < orderState.length; i++) {
      data1.push({
        key: i,
        id: i + 1,
        customer: orderState[i].orderby.firstname,
        orderDate: orderState[i].createdAt.slice(0, 10),

        status: (
                  <>
                    <select
                      className="form-control form-select"
                      id="status"
                      name="status"
                    >
                      <option value="orderPlaced">Order Placed</option>
                      <option value="processing">Processing</option>
                      <option value="shipped">Shipped</option>
                      <option value="delivered">Delivered</option>
                    </select>
                  </>
                ),
   
    
      });
    }
  }



  // if (orderState) {
  //   for (let i = 0; i < orderState.length; i++) {
  //     data1.push({
  //       key: i,
  //       id: i + 1,
  //       customer: orderState[i].orderby.firstname,
  //       orderDate: orderState[i].createdAt.slice(0, 10),
  //       product: orderState[i].products[i].product.title,
  //       status: (
  //         <>
  //           <select
  //             className="form-control form-select"
  //             id="status"
  //             name="status"
  //           >
  //             <option value="Reviewing">Order Placed</option>
  //             <option value="In Progress">Processing</option>
  //             <option value="Contacted">Shipped</option>
  //           </select>
  //         </>
  //       ),
  //     });
  //   }
  // }

  return (
    <div className="mt-4">
      <h3 className="mt-4 title">Orders</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
}

export default Orders;
