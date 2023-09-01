import "./ProductList.css";
import { Item } from "../Product/Item";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Button } from "reactstrap";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export const ProductList = ({
  filteredProoducts,
  addToCart,
  input,
  check,
  activecategory,
  handleFav,
  checkFav,
  data,
}) => {
  const [activePage, setActivePage] = useState(1);
  const [bookPerPage, setBookPerPage] = useState(5);

  const totalPages = Math.ceil(data.length / bookPerPage);

  const next = () => {
    if (activePage < totalPages) {
      setActivePage((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (activePage > 1) {
      setActivePage((prev) => prev - 1);
    }
  };
  const first = () => {
    if (activePage > 1) {
      setActivePage(1);
    }
  };

  const last = () => {
    if (activePage < totalPages) {
      setActivePage(totalPages);
    }
  };

  
  const params = useParams();
  console.log(params, ">>>> params");
  const filtered =
  !params.hasOwnProperty("category") || params.category === "All"
  ? data
  : data.filter((item) => item.category === params.category);
  
  
  const startIndex = (activePage - 1) * bookPerPage;
  const lastIndex = activePage * bookPerPage;
  const slicedBooks = filtered.slice(startIndex, lastIndex);

  return (
    <div className="container my-5">
      {slicedBooks.length > 0 &&
        slicedBooks.map((item) => {
          const isInFav = checkFav(item.id);
          return (
            <Item
              {...item}
              key={item.id}
              addToCart={addToCart}
              handleFav={handleFav}
              check={check}
              isInFav={isInFav}
            />
          );
        })}
      <div className="pg-container  mb-5">
        <BsArrowLeft
          color="black"
          className="arrow"
          disabled={activePage === 1}
          onClick={prev}
        />

        <Button
          color="white"
          disabled={activePage ===  1}
          onClick={first}
          className="rounded-0 px-2 py-0 ms-2  border border-1"
        >
          {activePage}
        </Button>
        <Button
          disabled={activePage === totalPages}
          onClick={last}
          className="rounded-0 px-2 py-0 mx-1 me-2 "
        >
          {totalPages}
        </Button>

        <BsArrowRight
          className="arrow"
          disabled={activePage === totalPages}
          onClick={next}
          color="black"
        />
      </div>
    </div>
  );
};
