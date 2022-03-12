import {  Routes, Route} from 'react-router-dom';
import Calculator from '../calculator/Calculator';
import Home from '../homeResume/home/Home';

export const Layout = () => {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        {/* <Route path="" element={<OwnUserProfile />} /> */}
      </Routes>
    )
}