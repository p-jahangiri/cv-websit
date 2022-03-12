export const FormContact = ({ text, title , col ,nam}) => {
  return (
    <>
      <div className="form-item  padd-15" id={col}>
        <div className="form-group">
          <input className="form-control" type={text} placeholder={title} name={nam}/>
        </div>
      </div>
    </>
  );
};
