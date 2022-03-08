export const ContactList = ({ icon, title , href, aid}) => {
  return (
    <>
      <div className="content-info-item padd-15">
        <div className="icon">
          <i className={icon}></i>
        </div>
        <h4>{title}</h4>
        <a href={href}>{aid}</a>
      </div>
    </>
  );
};
