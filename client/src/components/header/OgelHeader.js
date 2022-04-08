import { Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const { Header } = Layout;

const OgelHeader = ({ menuItems = [], defaultSelectedKeys = "1" }) => {
  return (
    <Header style={{ zIndex: 1, width: "100%" }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={defaultSelectedKeys}
      >
        {menuItems.map((item, index) => (
          <Menu.Item key={item + index}>
            <Link to={`/${item.toLowerCase()}`}>{item}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  );
};

export default OgelHeader;
