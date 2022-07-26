import {useEffect, useState} from 'react'
import {getProducts} from '../../services/products'
import Card from '../../components/Card'
function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
    const result = await getProducts();
    setProducts(result);
    console.log(products);
    }
  fetchData();
  },[]);
  return (
    <>
      <h1>Home Page</h1>
      <ul>
        {
          products.map((product) => {
            return(<Card product = {product}/>)
          })
        }
      </ul>
    </>
  );
}

export default Home;