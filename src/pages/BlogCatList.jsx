import React from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getBlogCategories } from "../features/blogCat/BlogCatSlice";
import { useEffect } from "react";

const columns = [
  {
    title: "S.No",
    dataIndex: "id",
  },
  {
    title: "Category",
    dataIndex: "category",
  }
];



function BlogCatList() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogCategories());
  }, []);

  const data = useSelector((state) => state.blogcat.blogcats);
  // console.log("data", data);

  const data1 = [];
for (let i = 0; i <data.length; i++) {
  data1.push({
    key: i,
    id: i+1,
    category: data[i].title,
   
  });
}

  return (
    <div className="mt-4">
      <h3 className="mt-4 title">Blog Category List</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
}

export default BlogCatList;
