// Components
import Menu from "components/menu/";
import React from "react";

const LayoutPrimary = ({ children }) => {
  return (
    <React.Fragment>
      <Menu />
      {children}
    </React.Fragment>
  );
};

export default LayoutPrimary;
