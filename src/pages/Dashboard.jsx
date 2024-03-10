import React, { useEffect, useState } from "react";
import { FaArrowTrendDown as ArrowDownIcon } from "react-icons/fa6";
import { FaArrowTrendUp as ArrowUpIcon } from "react-icons/fa6";
import { Column } from "@ant-design/plots";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import useSelection from "antd/es/table/hooks/useSelection";
import {
  getMonthlyIncome,
  getOrders,
  getYearlyIncome,
} from "../features/auth/authSlice";

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



function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMonthlyIncome());
    dispatch(getYearlyIncome());
    dispatch(getOrders());
  }, []);
  const monthlyIncomeState = useSelector((state) => state?.auth?.monthlyItem);
  const yearlyIncomeState = useSelector((state) => state?.auth?.yearlyItem);
  const allOrderState = useSelector((state) => state?.auth?.orders)

  const [dataMonthly, setDataMonthly] = useState([]);
  const [salesCount, setSalesCount] = useState([]);



  useEffect(() => {
    let saleData = [];
    let data = [];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    for (let index = 0; index < monthlyIncomeState?.length; index++) {
      const element = monthlyIncomeState[index];
      data.push({ type: months[element?._id?.month], income: element?.amount });
      saleData.push({ sale: element?.count });
    }
    setDataMonthly(data);
    setSalesCount(saleData);
    console.log(saleData);
  }, [monthlyIncomeState]);

  const config = {
    data: dataMonthly,
    xField: "type",
    yField: "sales",
    label: {
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "类别",
      },
      sales: {
        alias: "销售额",
      },
    },
  };

  const data1 = [];
for (let i = 0; i < allOrderState?.length ; i++) {
  data1.push({
    key: i,
    id: i+1,
    customer: allOrderState[i]?.userId?.firstname,
    orderDate: allOrderState[i].createdAt?.split('T')[0],
    orderId: allOrderState[i]?._id,
    status: allOrderState[i]?.orderStatus,
  });
}

  return (
    <div>
      <h3 className="mb-4 title">Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex justify-content-between align-items-end bg-white p-3 flex-grow-1 rounded-3 gap-3">
          <div>
            <p>Total</p>{" "}
            <h4 className="mb-0">
              ₹{yearlyIncomeState && yearlyIncomeState[0]?.amount}
            </h4>
          </div>

          <div className="d-flex flex-column align-items-end">
            <h6 className="red">
              <ArrowDownIcon /> 25%
            </h6>
            <p className="mb-0">Total Revenue from Last Year</p>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-end bg-white p-3 flex-grow-1 rounded-3 gap-3">
          <div>
            <p>Total</p> <h4 className="mb-0">₹10,000</h4>
          </div>

          <div className="d-flex flex-column align-items-end">
            <h6 className="red">
              <ArrowDownIcon /> 25%
            </h6>
            <p className="mb-0">Last 30 days</p>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-end bg-white p-3 flex-grow-1 rounded-3 gap-3">
          <div>
            <p>Total</p> <h4 className="mb-0">₹10,000</h4>
          </div>

          <div className="d-flex flex-column align-items-end">
            <h6 className="green">
              <ArrowUpIcon /> 25%
            </h6>
            <p className="mb-0">Last 30 days</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mt-4">Income Statistics</h3>
        <div>
          <Column {...config} />
        </div>
      </div>

      <div className="mt-4">
        <h3 className="mt-4">Recent Orders</h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
