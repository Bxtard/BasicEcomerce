
import {Navigate, Link} from 'react-router-dom'
function Card(props) {
  const {product} = props;
  return (
    <>
      <li id={product.id} className= "card">
        <img src={product.image} />
        <h3>{product.title}</h3>
        <Link to={`ProductDetail/${product.id}`} >Detail</Link>
      </li>
    </>
  );
}

export default Card;