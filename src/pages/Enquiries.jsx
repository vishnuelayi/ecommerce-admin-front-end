import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getEnquiries } from "../features/enquiry/EnquirySlice";
const columns = [
  {
    title: "S.No",
    dataIndex: "id",
  },
  {
    title: "Name",
    dataIndex: "customer",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Comment",
    dataIndex: "comment",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];



function Enquiries() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEnquiries());
  }, []);

  const data = useSelector((state) => state.enquiry.enquiries);
  // console.log("data", data);


  const data1 = [];
for (let i = 0; i < data.length; i++) {
  data1.push({
    key: i,
    id: i+1,
    customer: data[i].name,
    email: data[i].email,
    comment: data[i].comment,
    status: (
      <>
        <select className="form-control form-select" id="status" name="status">
          <option value="Reviewing">Reviewing</option>
          <option value="In Progress">In Progress</option>
          <option value="Contacted">Contacted</option>
        </select>
      </>
    ),
  });
}
  return (
    <div className="mt-4">
      <h3 className="mt-4 title">Enquiries</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
}

export default Enquiries;
