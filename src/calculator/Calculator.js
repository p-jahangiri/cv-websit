import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./calculator.css";
import Result from "./components/Result";
import KeyPad from "./components/KeyPad";

class Calculator extends Component {
  state = {
    result: "",
  };

  onClick = (name) => {
    if (name === "=") {
      this.calculate();
    } else if (name === "C") {
      this.reset();
    } else if (name === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + name,
      });
    }
  };

  calculate = () => {
    var checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result;
    }

    try {
      this.setState({
        result: (eval(checkResult) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  render() {
    return (
      <>
        <div className="calculator">
          <Result result={this.state.result} />
          <KeyPad onClick={this.onClick} />
        </div>
        <Link to="/">
          <div className="link">
            <i class="fa-solid fa-left-long"></i>
            <h3>home</h3>
          </div>
        </Link>
      </>
    );
  }
}

export default Calculator;

// const Calculator = () => {
//     const [result, setResult] = useState("");

//     const onClick = (button) => {
//         console.log(button)
//         if (button === '=') {
//             calculate();
//         } else if (button === 'C') {
//             reset();
//         } else if (button === 'CE') {
//             backspace();
//         }  else {
//             setResult({
//               result:result + button
//             })
//           }
//     };
// const calculate = () => {
//     const checkResult = ''
//     if (result.includes('--')){
//         checkResult = result.replace('--','+')
//     }else {
//         checkResult = result;
//     }

//     try {
//         setResult ({
//             result: (eval(checkResult) || "") + ""

//         })
//     }catch(e) {
//         setResult ({
//             result: "error"
//         })
//     }
// };

// const reset = () => {
//     setResult ({
//         result: ""
//     })
// }

// const backspace = () => {
//     setResult ({
//         result : result.slice(0, -1)
//     })
// }

// return (
//     <div>
//     <div className="calculator-body">
//       <h1>Simple Calculator</h1>
//       <ResultComponent result={() => result} />
//       <KeyPadComponent onClick={()=> onClick} />
//     </div>
//   </div>
// )

// };
// export default Calculator
