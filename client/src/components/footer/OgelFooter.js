import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const OgelFooter = ({ text = "" }) => {
  const year = new Date().getFullYear() + 1;
  const _text = text || `Ogel Design ©${year} Created by Muhannad`;
  return <Footer style={{ textAlign: "center" }}>{_text}</Footer>;
};

export default OgelFooter;
