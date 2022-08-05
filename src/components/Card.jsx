import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Timer from './Timer';
function Card({ product }) {
  const navigate = useNavigate();
  const [bool,setBool] = useState(true);

  const handleClick = () => {
    if (bool) {
      navigate(`ProductDetail/${product.id}`, { replace: true });
    }
  }

  return (
    <div className="card">
      <div className="card__containerImg">
        <img src={product.image} className= "card__image"/>
      </div>
      <h3 className= "card__title">{product.title}</h3>
      <div className='card__down'>
        <Timer setBool = {setBool}/>
        <button type="button" className={bool?"card__button":"card__button--null"} onClick={handleClick}>Detail</button>
      </div>
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.shape(),
}
Card.defaultProps = {
  product: {},
}


export default Card;
