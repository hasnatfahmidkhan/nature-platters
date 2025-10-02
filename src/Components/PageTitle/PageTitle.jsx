import React from "react";

const PageTitle = ({ title }) => {
  document.title = { title };
  return null;
};

export default PageTitle;
