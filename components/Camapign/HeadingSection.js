import React from "react";

const HeadingSection = ({ children }) => {
  return (
      <div
        className={"col-sm-8 section-heading "}
      >
        {children ? (
            <p className="mt-30">{children}</p>
        ) : null}
      </div>
  );
};

export default HeadingSection;
