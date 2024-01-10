import React, { useState } from "react";
import { RiDashboard2Line } from "react-icons/ri";
import { IoPeople } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { FaClipboardList as ProductListIcon } from "react-icons/fa";
import { TbBrandBumble as BrandIcon } from "react-icons/tb";
import { MdOutlinePlaylistAddCheckCircle as BrandListIcon } from "react-icons/md";
import { BiCategory as CategoryIcon } from "react-icons/bi";
import { TbListDetails as CategoryListIcon } from "react-icons/tb";
import { IoMdColorFill as ColorIcon } from "react-icons/io";
import { MdFormatColorFill as ColorListIcon } from "react-icons/md";
import { FaShippingFast as OrdersIcon } from "react-icons/fa";
import { FaBlog as BlogsIcon } from "react-icons/fa";
import { FaFileCircleQuestion as EnquiriesIcon } from "react-icons/fa6";
import { MdNoteAdd as AddBlogIcon } from "react-icons/md";
import { RiFileListFill as BlogList } from "react-icons/ri";
import { GrBlog as BlogCategoryIcon } from "react-icons/gr";
import { MdOutlineNoteAdd as AddBlogCategory } from "react-icons/md";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={({key}) => 
          {
            if(key == "signout")
            {

            }
            else
            {
                navigate(key)
            }
          }}
          items={[
            {
              key: "",
              icon: <RiDashboard2Line className="fs-4" />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <IoPeople  className="fs-4"/>,
              label: "Customers",
            },
            {
              key: "catelog",
              icon: <FaCartShopping className="fs-4" />,
              label: "Catelog",
              children:[
                {
                    key: "product",
                    icon: <FaCartPlus  className="fs-4"/>,
                    label: "Add Product",
                },
                {
                    key: "product-list",
                    icon: <ProductListIcon className="fs-4"/>,
                    label: "Product List",
                },
                {
                    key: "category",
                    icon: <BrandIcon className="fs-4"/>,
                    label: "Brand",
                },
                {
                    key: "category-list",
                    icon: <BrandListIcon className="fs-4"/>,
                    label: "Brand List",
                },
                {
                    key: "category",
                    icon: <CategoryIcon className="fs-4"/>,
                    label: "Category",
                },
                {
                    key: "category-list",
                    icon: <CategoryListIcon className="fs-4"/>,
                    label: "Category List",
                },
                {
                    key: "color-list",
                    icon: <ColorIcon className="fs-4"/>,
                    label: "Color",
                },
                {
                    key: "color-list",
                    icon: <ColorListIcon className="fs-4"/>,
                    label: "Color List",
                }
                
              ]
            },
            {
              key: "orders",
              icon: <OrdersIcon className="fs-4" />,
              label: "Orders",
            },
            {
              key: "enquiries",
              icon: <EnquiriesIcon className="fs-4" />,
              label: "Enquiries",
            },
            {
              key: "blogs",
              icon: <BlogsIcon className="fs-4" />,
              label: "Blogs",
              children:[
                {
                    key: "blog-list",
                    icon: <BlogList className="fs-4"/>,
                    label: "Blog List",
                },
                {
                    key: "add-blog",
                    icon: <AddBlogIcon className="fs-4"/>,
                    label: "Add Blog",
                },
                {
                    key: "blog-category",
                    icon: <BlogCategoryIcon className="fs-4"/>,
                    label: "Blog Categories",
                },
                {
                    key: "blog-category",
                    icon: <AddBlogCategory className="fs-4"/>,
                    label: "Add Blog Category",
                }
              ]
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
