
export const AboutItem = ({children ,icon ,title}) => {
  return (
    <div className="row about-head">
      <div className="head">
        <i className={icon}></i>
        <h4>{title}</h4>
      </div>
      {children}
    </div>
  );
};
