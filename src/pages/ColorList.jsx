import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getColors } from "../features/colors/ColorSlice";

let k = 1;
//for sl.no allocation

const columns = [
  {
    title: "S.No",
    dataIndex: "id",
  },
  {
    title: "Color",
    dataIndex: "colorName",
  }
];



function ColorList() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getColors());
  }, []);



  const data = useSelector((state) => state.color.colors);
  console.log(data);

  const data1 = [];
for (let i = 0; i < data.length; i++) {
  data1.push({
    key: i,
    id: k,
    colorName: data[i].title,
   
  });
  k++;
}

  return (
    <div className="mt-4">
      <h3 className="mt-4 title">Colors</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
}

export default ColorList;
