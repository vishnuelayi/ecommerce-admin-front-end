import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../features/brand/BrandSlice";

let k = 1;
//for sl.no allocation

const columns = [
  {
    title: "S.No",
    dataIndex: "id",
  },
  {
    title: "Brand Name",
    dataIndex: "brandName",
  },
];

function BrandList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrands());
  }, []);

  const data = useSelector((state) => state.brand.brands);
  console.log(data);

  const data1 = [];
  for (let i = 0; i < data.length; i++) {
    data1.push({
      key: i,
      id: k,
      brandName: data[i].title,
    });
    k++;
  }

  return (
    <div className="mt-4">
      <h3 className="mt-4 title">Brands</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
}

export default BrandList;
