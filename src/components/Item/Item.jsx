import "./Item.css";
export const Item = ({fruits}) => {
  console.log(fruits)
  return <li className="item">
    <h3 className="fruit__name">{fruits.name}</h3>
    <img className="fruit__photo" src={fruits.photo} alt="photo" />
    <p className="fruit__price">{fruits.price}</p>
  </li>;
};
