import React, { ReactFragment } from "react";
import "./sidebar.css";
import { LinkSidebar } from "../components/LinkSidebar";
const Sidebar = () => {
  return (
    <>
      <div className="aside">
        <div className="logo">
          <span>parviz</span>
        </div>
        <div className="nav-toggler">
          <span></span>
        </div>
        <ul className="nav-item">
          <li>
            <LinkSidebar 
            to={"Home"} 
            title={"Home"} 
            icon={"fa fa-home"} />
          </li>
          <li>
            <LinkSidebar 
            to={"AboutMe"}
             title={"AboutMe"} 
             icon={"fa fa-user"} 
             />
          </li>
          <li>
            <LinkSidebar
              to={"Services"}
              title={"Services"}
              icon={"fa fa-home"}
            />
          </li>
          <li>
            <LinkSidebar
              to={"Portfolio"}
              title={"Portfolio"}
              icon={"fa fa-briefcase"}
            />
          </li>
          <li>
            <LinkSidebar
              to={"Contact"}
              title={"Contact"}
              icon={"fa fa-comments"}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
