import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Clinic from './component/Projects/Clinic';
import Amazon from './component/Projects/Amazon';
import Snake from './component/Projects/Snake';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
      <Routes>
        <Route path='/PortfolioRD' element={<Home />}></Route>
        <Route path='/clinic' element={<Clinic />}></Route>
        <Route path='/amazon' element={<Amazon />}></Route>
        <Route path='/snake' element={<Snake />}></Route>
      </Routes>

    </div>
  );
}

export default App;
