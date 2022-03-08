export const Education = ({ title, icon, subTitle, data, children }) => {
  return (
   
      <div className="education padd-15">
        <h3 className="title">{title}</h3>
        <div className="row">
          <div className="timeline-box padd-15">
            <div className="timeline shadow-dark">
              <div className="timeline-item">
                <div className="circle-dot"></div>
                <h3 className="timeline-data">
                  <i className={icon}></i>
                  {data}
                </h3>
                <h4 className="timeline-title">{subTitle}</h4>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};
