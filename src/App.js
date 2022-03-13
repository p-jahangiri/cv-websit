import {Routes ,Route} from 'react-router-dom'
import Apps from "./weather/Weather"
import Calculator from "./calculator/Calculator";
import Resume from "./pages/Resume";

const App = () => {


  return (
    <Routes>
    <Route path="/" element={<Resume />}/>
    <Route path="calculator" element={<Calculator />}/>
    <Route path="weather" element={<Apps/>}/>
  </Routes>
  );
};

export default App;
