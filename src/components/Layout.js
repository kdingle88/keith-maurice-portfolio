import React from "react";

import NavTabBar from "./NavTabBar";
import SocialTabBar from "./SocialTabBar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="grid">
        <div className="grid-item">
          <NavTabBar />
        </div>

        {children}

        <div className="grid-item">
          <SocialTabBar />
        </div>
      </div>

      <style jsx global>{`
        body {
          background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
            url("../../static/img/business-1839876_1920.jpg") no-repeat center
              center fixed;
          background-size: cover;
        }
      `}</style>
      <style jsx>
        {`
          .grid-item {
            flex: 1;
          }
          .grid {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }

          @media (max-width: 768px) {
            .grid {
              flex-direction: column;
            }
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default Layout;
