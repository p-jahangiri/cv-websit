export const Button = ({ classNam, nam, title }) => {
  return (
    <button
      className={classNam}
      name={nam}
      // onClick={(e) => sad(e.target.name)}
    >
      {title}
    </button>
  );
};
