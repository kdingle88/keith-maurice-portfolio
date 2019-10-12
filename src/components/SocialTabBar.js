import React from "react";

import Tab from "@material-ui/core/Tab";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DeviceHubIcon from "@material-ui/icons/DeviceHub";
import EmailIcon from "@material-ui/icons/Email";

import TabBar from "./TabBar";

const SocialTabBar = () => {
  return (
    <TabBar>
      <a
        href="https://www.linkedin.com/in/keith-dingle-a73670163/"
        target="_blank"
      >
        <Tab
          style={{ color: "#fff", marginRight: "25px", marginLeft: "25px" }}
          icon={<LinkedInIcon />}
          label="LINKEDIN"
        />
      </a>
      <a href="https://github.com/kdingle88" target="_blank">
        <Tab
          style={{ color: "#fff", marginRight: "25px", marginLeft: "25px" }}
          icon={<DeviceHubIcon />}
          label="GITHUB"
        />
      </a>
      <a href="mailto:kdingle88@yahoo.com">
        <Tab
          style={{ color: "#fff", marginRight: "25px", marginLeft: "25px" }}
          icon={<EmailIcon />}
          label="EMAIL"
        />
      </a>
    </TabBar>
  );
};

export default SocialTabBar;
