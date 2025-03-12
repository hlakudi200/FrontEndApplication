"use client";
import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useRouter } from "next/navigation";
import { AppleFilled, HomeFilled, UserAddOutlined } from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "/trainer/addfood",
    icon: (
      <AppleFilled
        style={{ fontSize: 30, marginLeft: 100, marginRight: 100 }}
      />
    ),
  },
  {
    key: "/trainer/dashboard",
    icon: (
      <HomeFilled style={{ fontSize: 30, marginLeft: 100, marginRight: 100 }} />
    ),
  },
 
  {
    key: "/landing/markerting/contact",
    icon: (
      <UserAddOutlined
        style={{ fontSize: 30, marginLeft: 100, marginRight: 100 }}
      />
    ),
  },
];

const CustomMenu = () => {
  const router = useRouter();
  const [current, setCurrent] = useState("/landing/markerting/home");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    router.push(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      style={{ justifyContent: "center" }}
    />
  );
};

export default CustomMenu;
