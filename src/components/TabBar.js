import React, { useState } from "react";

import useMediaQuery from "@material-ui/core/useMediaQuery";

import Tabs from "@material-ui/core/Tabs";

const TabBar = ({ children }) => {
  const [value, setValue] = useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const tabs = () => {
    const matches = useMediaQuery("(max-width:768px)");
    if (matches) {
      return (
        <React.Fragment>
          <Tabs
            style={{ paddingTop: "50px" }}
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor=""
            textColor="secondary"
            aria-label="tab bar"
            orientation="horizontal"
          >
            {children}
          </Tabs>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor=""
            textColor="secondary"
            aria-label="tab bar"
            orientation="vertical"
          >
            {children}
          </Tabs>
        </React.Fragment>
      );
    }
  };

  return (
    <React.Fragment>
      {tabs()}

      <style jsx global>
        {`
          button.MuiTab-textColorSecondary {
            color: #fff;
          }
          button.MuiTab-textColorInherit {
            color: #fff;
          }
          button.MuiTab-textColorInherit:active {
            color: #fc2f48;
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default TabBar;
