import { Link } from "react-scroll";

export const LinkSidebar = ({ icon, to, title }) => {
  return (
    <>
      <Link
        to={to}
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <div className="sidebar-item">
          <i className={icon}></i>
          <span>{title}</span>
        </div>
      </Link>
      
    </>
  );
};
