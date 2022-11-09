import productData from "../data/data"
import ProductInfo from "./ProductInfo"
export default function(){
  return(
    <ul>
      {
        productData.map(i => <ProductInfo item={i} key={i.id}/>)
      }
    </ul>
  )
}