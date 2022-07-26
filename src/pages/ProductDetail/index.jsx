import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {getProduct} from '../../services/products'

function Detail() {
  const [product, setProduct] = useState({});
  const {id} = useParams();

  useEffect(() => {
    const fetchData = async () => {
    const result = await getProduct(id);
    setProduct(result);
    console.log(product);
    }
  fetchData();
  },[]);

  return (
    <>
      <h1>{`${product.title}`}</h1>
      <img src={product.image}></img>
      <h3>{product.category}</h3>
      <p>{product.description}</p>
      <p>{`$${product.price}`}</p>
    </>
  );
}

export default Detail;