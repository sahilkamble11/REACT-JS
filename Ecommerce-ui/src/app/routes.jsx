import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ProductCatalogPage from "../pages/product/ProductCatalogPage";
// import ProductCatalogDetails from "../pages/product/ProductDetailsPage";
import CartPage from "../pages/cart/CartPage";
// import CheckOutPage from "../pages/checkout/CheckoutPage";
import LoginPage from "../pages/auth/LoginPage";
// import RegisterPage from "../pages/auth/RegisterPage";
// import OrderPage from "../pages/orders/OrdersPage";
// import OrderDetails from "../pages/orders/OrderDetailsPage";

const AppRoutes=()=>
{
    return(
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/products" element={<ProductCatalogPage/>}/>
                {/* <route path="/products/:id" element={<ProductCatalogDetails/>}/> */}
                <Route path="/cart" element={<CartPage/>}/>
                {/* <route path="/checkout" element={<CheckOutPage/>}/> */}
                <Route path="/login" element={<LoginPage/>}/>
                {/* <route path="/register" element={<RegisterPage/>}/> */}
                {/* <route path="/order" element={<OrderPage/>}/> */}
                {/* <route path="/order/:id" element={<OrderDetails/>}/> */}
            </Routes>
    )
}
export default AppRoutes;