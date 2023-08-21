import "./ProductList.css";
import { Item } from "../Product/Item";

export const ProductList = ({
  filteredProoducts,
  addToCart,
  input,
  check,
  activecategory,
  handleFav,
  checkFav
}) => {
  let filtered = filteredProoducts;

  /*   Dropdown(filtering)   */
  if (activecategory === "price") {
    const copy = data.slice().sort((a, b) => {
      const yearDifference = parseInt(b.price) - parseInt(a.price);
      if (yearDifference !== 0) return yearDifference;
    });
    filtered = copy;
  }
//    else {
      /*   Searching   */
    //   filtered = filteredProoducts.filter((item) =>
    //     item.title.toLowerCase().includes(input.toLowerCase())
    //   );
  //   }
//   console.log(filtered, ">>> filtered");
  return (
    <div className="container my-5">
      {filteredProoducts.length > 0 &&
        filtered.map((item) => {
          const isInFav = checkFav(item.id)
          return (
            <Item {...item} key={item.id} addToCart={addToCart} handleFav={handleFav} check={check}  isInFav={isInFav}/>
          );
        })}
    </div>
  );
};
