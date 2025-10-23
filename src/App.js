     import React from 'react';
     import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
     import Header from './components/Header';
     import Footer from './components/Footer';
     import Homepage from './pages/Homepage';
     import ProductListing from './pages/ProductListing';
     import ProductDetails from './pages/ProductDetails';
     import Cart from './pages/Cart';
     import Checkout from './pages/Checkout';
     import './App.css';

     function App() {
       return (
         <Router>
           <div className="app">
             <Header />
             <main>
               <Routes>
                 <Route path="/" element={<Homepage />} />
                 <Route path="/products" element={<ProductListing />} />
                 <Route path="/product/:id" element={<ProductDetails />} />
                 <Route path="/cart" element={<Cart />} />
                 <Route path="/checkout" element={<Checkout />} />
               </Routes>
             </main>
             <Footer />
           </div>
         </Router>
       );
     }

     export default App;
     
