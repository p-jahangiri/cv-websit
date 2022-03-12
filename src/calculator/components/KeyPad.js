
import { DataCalculator } from "../../statics/DataCalculator";
const KeyPad = (props) => {
  return (
    <div>
      <div className="buttons">
        {DataCalculator.map((item, index) => {
          return (
            <button
            key={index}
              className={item.style}
              id={item.d}
              name={item.name}
              onClick={(e) => props.onClick(e.target.name)}
            >
              {item.title}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default KeyPad;
