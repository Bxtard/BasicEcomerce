import { useEffect, useState } from 'react';
import { getProducts } from '../../services/products';
import Card from '../../components/Card';
function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProducts();
      setProducts(result);
    };
    fetchData();
  }, []);

  return (
    <div className="products">
      {products.map(product => {
        return <Card product={product} key={product.id}/>;
      })}
    </div>
  );
}

export default Home;
