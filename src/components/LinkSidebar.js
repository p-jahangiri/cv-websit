import { Link } from "react-scroll";

export const LinkSidebar = ({ icon, to, title }) => {
  return (
    <>
      <Link
        to={to}
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-60}
        duration={400}
      >
        <div className="sidebar-item">
          <i className={icon}></i>
          <small>{title}</small>
        </div>
      </Link>
      
    </>
  );
};
