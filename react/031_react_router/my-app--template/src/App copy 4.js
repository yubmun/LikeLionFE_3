import{BrowserRouter, Routes, Route, Link, useLocation} from "react-router-dom";

function Home(){
  return(
    <>
      <div>Home</div>
    </>
  )
}
function ProductDetail(){
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  return(
    <>
      <div>{path}ProductDetail</div>
    </>
  )
}
function Cart(){
  return(
    <>
      <div>Cart</div>
    </>
  )
}
function Buy(){
  return(
    <>
      <div>Buy</div>
    </>
  )
}

function App(){
  return (
    <BrowserRouter>
      <Link to="/"> home </Link>
      <Link to="/product/1"> productDeatail </Link>
      <Link to="/cart"> cart </Link>
      <Link to="/buy"> buy </Link>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/buy" element={<Buy/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;