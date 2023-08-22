import "./ProductList.css";
import { Item } from "../Product/Item";
import {  useParams } from 'react-router-dom';

export const ProductList = ({
  filteredProoducts,
  addToCart,
  input,
  check,
  activecategory,
  handleFav,
  checkFav,
  data
}) => {
  
  const params = useParams();
  console.log(params, '>>>> params');
  const filtered = !params.hasOwnProperty('category') || params.category === 'All' ? data : data.filter(item => item.category === params.category)

  

  /*   Dropdown(filtering)   */
  // if (activecategory === "price") {
  //   const copy = data.slice().sort((a, b) => {
  //     const yearDifference = parseInt(b.price) - parseInt(a.price);
  //     if (yearDifference !== 0) return yearDifference;
  //   });
  //   filtered = copy;
  // }
//    else {
      /*   Searching   */
    //   filtered = filteredProoducts.filter((item) =>
    //     item.title.toLowerCase().includes(input.toLowerCase())
    //   );
  //   }
//   console.log(filtered, ">>> filtered");
  return (
    <div className="container my-5">
      {data.length > 0 &&
        filtered.map((item) => {
          const isInFav = checkFav(item.id)
          return (
            <Item {...item} key={item.id} addToCart={addToCart} handleFav={handleFav} check={check}  isInFav={isInFav}/>
          );
        })}
    </div>
  );
};
