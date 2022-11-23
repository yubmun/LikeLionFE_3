import {useRef} from 'react'
import ProductImage from './ProductImage/ProductImage'
import ProductName from './ProductName/ProductName'
import ProductPrice from './ProductPrice/ProductPrice'
import './card.css'

export default function Card({productName, price, thumbnailImg}) {

  const likeBtn = useRef();

  function handleLikeBtn(e){
    e.currentTarget.classList.toggle('on');
  }

  return (
    <li className='product-item'>
      <div className='product-img'>
        <ProductImage {...{thumbnailImg, productName}}/>
      </div>
      <ProductName {...{productName}}/>
      <button ref={likeBtn} onClick={handleLikeBtn} className='like-btn'></button>

      <div className='product-price'>
        <ProductPrice {...{price}}/>
      </div>
    </li>
  )
}
