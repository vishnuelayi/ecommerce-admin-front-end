import React from "react";
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

function BlogCatList() {
  return (
    <div className="mt-4">
      <h3 className="mt-4">Blog Category List</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
}

export default BlogCatList;
