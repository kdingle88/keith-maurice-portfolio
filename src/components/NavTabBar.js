import React from "react";

import Link from "../../src/Link";

import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";

import PermMediaIcon from "@material-ui/icons/PermMedia";
import FaceIcon from "@material-ui/icons/Face";
import TabBar from "./TabBar";

const NavTabBar = () => {
  return (
    <TabBar>
      <Link
        href="/"
        color="secondary"
        style={{ textDecoration: "none", marginLeft: "50px" }}
      >
        <Tab icon={<HomeIcon />} label="Home" />
      </Link>
      <Link
        href="/portfolio"
        color="secondary"
        style={{ textDecoration: "none", marginLeft: "50px" }}
      >
        <Tab icon={<PermMediaIcon />} label="Portfolio" />
      </Link>
      <Link
        href="/contact"
        color="secondary"
        style={{ textDecoration: "none", marginLeft: "50px" }}
      >
        <Tab icon={<FaceIcon />} label="Contact" />
      </Link>
    </TabBar>
  );
};

export default NavTabBar;
