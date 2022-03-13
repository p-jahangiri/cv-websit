import { Link } from "react-scroll";

export const LinkSidebar = ({ icon, to, title }) => {
  return (
    <>
      <Link
        to={to}
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-57}
        duration={300}
        className="sidebar-item"
      >
        
          <i className={icon}></i>
          <small>{title}</small>
      
      </Link>
      
    </>
  );
};
