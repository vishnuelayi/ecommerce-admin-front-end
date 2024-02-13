import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getProCats } from "../features/product-category/ProductCatSlice";


const columns = [
  {
    title: "S.No",
    dataIndex: "id",
  },
  {
    title: "Category Name",
    dataIndex: "categoryName",
  },
  
];


function CategoryList() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProCats());
  }, []);

  const data = useSelector((state) => state.productcat.productCats);
  console.log(data);

  const data1 = [];
for (let i = 0; i < data.length; i++) {
  data1.push({
    key: i,
    id: i+1,
   categoryName: data[i].title,
  });

}


  return (
    <div className="mt-4">
      <h3 className="mt-4 title">Product Categories</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
}

export default CategoryList;
