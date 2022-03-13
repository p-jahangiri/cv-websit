import React, { ReactFragment } from "react";
import "./sidebar.css";
import { LinkSidebar } from "components/LinkSidebar";
const Sidebar = () => {
  return (
    <>
      <div className="aside">
        <div className="logo">
          <small>parviz</small>
        </div>
        <div className="nav-toggler">
          <small></small>
        </div>
        <div className="nav-item">
          <LinkSidebar 
          to={"Home"} 
          
          title={"Home"} 
          icon={"fa fa-home"} 
          />
          <LinkSidebar 
          to={"AboutMe"} 
          title={"AboutMe"} 
          icon={"fa fa-user"} 
          />
          <LinkSidebar
            to={"Portfolio"}
            title={"Portfolio"}
            icon={"fa fa-briefcase"}
          />
          <LinkSidebar
            to={"Contact"}
            title={"Contact"}
            icon={"fa fa-comments"}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
