import {useState, useEffect} from 'react'
import FailLoadData from '../../components/Shared/FailLoadData/FailLoadData'
// import { data } from '../../database/data'
import Card from '../../components/Card/Card'
import Cart from '../../components/Cart/Cart'
import './homePage.css'

export default function HomePage() {
    // console.log(data)
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
      const getData = async()=>{
        try{
          const res = await fetch('http://test.api.weniv.co.kr/mall');
          const result = await res.json();
          setItems(result);
          setIsLoaded(true);
        } catch (error){
          setError(error);
        }
      }
      getData();
    }, [])


    if(error){
      console.log(error)
      return <FailLoadData/>
    } else if (!isLoaded){
      return <div>로딩중!</div>
    } else {
      return (
        <main className='product'>
        {
          <>
              <ul className='product-list'>
                  {items.map(item => 
                    <Card key={item.id} {...item}/>
                  )}
              </ul>
              <Cart/>
          </>
        }
        </main>
    )
    }

}