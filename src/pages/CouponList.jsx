import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getCoupons } from "../features/coupons/CouponSlice";

let k = 1;
//for sl.no allocation

const columns = [
  {
    title: "S.No",
    dataIndex: "id",
  },
  {
    title: "Coupon Code",
    dataIndex: "couponCode",
  },
  {
    title: "Discount",
    dataIndex: "discount",
  },
  {
    title: "Expiry Date",
    dataIndex: "expiryDate",
  },
];

function CouponList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoupons());
  }, []);

  const data = useSelector((state) => state.coupon.coupons);
  console.log(data);

  const data1 = [];
  for (let i = 0; i < data.length; i++) {
    data1.push({
      key: i,
      id: k,
      couponCode: data[i].name,
      discount: data[i].discount + "%",
      expiryDate: data[i].expiry.slice(0, 10),
    });
    k++;
  }

  return (
    <div className="mt-4">
      <h3 className="mt-4 title">Coupons</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
}

export default CouponList;
