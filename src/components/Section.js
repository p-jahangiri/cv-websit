

export const Section = ({children, title ,id}) => {

  return (
    <section id={id} className=" section">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>{title}</h2>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
};
