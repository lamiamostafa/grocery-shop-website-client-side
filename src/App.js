
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
// import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Blogs from './Pages/Home/Blogs/Blogs';
import Header from './Pages/Shared/Header/Header';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Feedback from 'react-bootstrap/esm/Feedback';
import './App.css';
import ManageAllItems from './Pages/ManageAllItems/ManageAllItems';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Inventory from './Pages/Inventory/Inventory';
import AddProduct from './Pages/AddProduct/AddProduct';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path='/product/:productId' element={
          <RequireAuth>
            <ProductDetail></ProductDetail>
          </RequireAuth>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="feedback" element={<Feedback></Feedback>}></Route>
        <Route path="manageallitems" element={<ManageAllItems></ManageAllItems>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/inventory" element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path="/addproduct" element={

          <RequireAuth>
            <AddProduct></AddProduct>
          </RequireAuth>

        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>


    </div>
  );
}

export default App;
