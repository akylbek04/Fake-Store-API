import "./FavPage.css";
import { FavCard } from "../FavCard/FavCard";


export const FavPage = ({
  favourites,
  addToCart,
  input,
  check,
  activecategory,
  isInFav,
  handleDelete
}) => {
  
  return (
    <div className="container my-5">
      {favourites.length > 0 &&
        favourites.map((item) => {
          return (
            <FavCard
              {...item}
              key={item.id}
              addToCart={addToCart}
                handleDelete={handleDelete}
              check={check}
              isInFav={isInFav}
            />
          );
        })}
    </div>
  );
};
