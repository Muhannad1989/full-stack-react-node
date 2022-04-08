import React from "react";

const Container = ({ children }) => (
  <div style={{ border: "1px solid red", height: "865px", overflow: "auto" }}>
    {children}
  </div>
);

export default Container;
