import { Footer } from "antd/es/layout/layout";
import React from "react";

const CustomFooter = () => {
  return (
    <Footer>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#101010",
          borderRadius: "10px",
          fontSize:"12px"
        }}
      >
        ©{new Date().getFullYear()}{" "}
        <span style={{ color: "red" }}>Virgin </span>Active. All rights
        reserved.
      </Footer>
    </Footer>
  );
};

export default CustomFooter;
