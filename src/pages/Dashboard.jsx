import React from "react";
import { FaArrowTrendDown as ArrowDownIcon } from "react-icons/fa6";
import { FaArrowTrendUp as ArrowUpIcon } from "react-icons/fa6";
import { Column } from "@ant-design/plots";
import { Table } from "antd";

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

const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    id: i,
    customer: `Edward King ${i}`,
    orderDate: `2014-0${Math.floor(i / 10)}-0${i % 10}`,
    orderId: `FDA20140${i}`,
    status: `status ${i}`,
  });
}

const data = [
  {
    type: "家具家电",
    sales: 38,
  },
  {
    type: "粮油副食",
    sales: 52,
  },
  {
    type: "生鲜水果",
    sales: 61,
  },
  {
    type: "美容洗护",
    sales: 145,
  },
  {
    type: "母婴用品",
    sales: 48,
  },
  {
    type: "进口食品",
    sales: 38,
  },
  {
    type: "食品饮料",
    sales: 38,
  },
  {
    type: "家庭清洁",
    sales: 38,
  },
];

const config = {
  data,
  xField: "type",
  yField: "sales",
  label: {
    // 可手动配置 label 数据标签位置
    position: "middle",
    // 'top', 'bottom', 'middle',
    // 配置样式
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

function Dashboard() {
  return (
    <div>
      <h3 className="mb-4 title">Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-3">
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
