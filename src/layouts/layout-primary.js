import React from "react";

// Components
import Menu from "components/menu/";

const LayoutPrimary = ({ children }) => {
  return (
    <div className="container">
      <Menu />
      {children}
    </div>
  );
};

export default LayoutPrimary;
