import { BrowserRouter, Routes, Route, Link, useLocation, useParams, Outlet } from "react-router-dom";

function Index(){
  return <div>index</div>
}
function Products(){
  return (
    <>
      <div>Products</div>
      <Outlet></Outlet>
    </>
    
  )
}
function Users(){
  return(
      <>
        <p>users</p>
        <Outlet></Outlet>
      </>
    )
}
function Notice(){
  return <div>notice</div>
}
function Cart(){
  return <div>cart</div>
}

function Coupon(){
  return(
    <>
      <p>coupon</p>
    </>
  )
}

function Question(){
  return(
    <>
      <p>question</p>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/products/:num/*" element={<Products />}>
          <Route path="notice" element={<Notice/>}/>
        </Route>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/users/*" element={<Users />}>
          <Route path="coupon" element={<Coupon/>}/>
          <Route path="question" element={<Question/>}/>
          <Route path="notice" element={<Notice/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;