import "./List.css";
import { Item } from "../Item/Item";
export const List = ({fruitsData}) => {
  console.log(fruitsData)
    // Дестрыктырызували об'єкт
    // const {fruitsData} = data
  return <ul className="list">
    {
        fruitsData.map((data) => {
          return <Item fruits={data}/>
        })
    }
  </ul>;
};
