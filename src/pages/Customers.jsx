import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../features/customers/CustomerSlice";

let k = 1;
//for sl.no allocation

const columns = [
  {
    title: "S.No",
    dataIndex: "id",
  },
  {
    title: "First Name",
    dataIndex: "firstName",
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
  },
];



function Customers() {
  const despatch = useDispatch();
  useEffect(() => {
    despatch(getUsers());
  }, []);

  const data = useSelector((state) => state.customer.customers);
  console.log(data);


  const data1 = [];
for (let i = 0; i < data.length; i++) {
  if(data[i].role != "admin")
  {
    data1.push({
      key: i,
      id: k,
      firstName: data[i].firstname,
      lastName: data[i].lastname,
      email: data[i].email,
      phone: data[i].mobile,
    });
    k++;
  }
  
}

  return (
    <div className="mt-4">
      <h3 className="mt-4 title">Customers</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
}

export default Customers;
