import "./Item.css";
import PropTypes from 'prop-types';


export const Item = ({fruits}) => {
  const {name, photo, price} = fruits
  console.log(fruits)
  return <li className="item">
    <h3 className="fruit__name">{name}</h3>
    <img className="fruit__photo" src={photo} alt="photo" />
    <p className="fruit__price">{price}</p>
  </li>;
};



Item.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  name: PropTypes.string,
  photo: PropTypes.string,
  price: PropTypes.number,
}