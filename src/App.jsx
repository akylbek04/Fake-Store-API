import { NavbarComponent } from "./component/Navbar/Navbar";
import { useEffect, useState } from "react";
import "./App.css";
import { CartList } from "./component/Cart/CartList";
import { ProductList } from "./component/ProductList/ProductList";
import { PiSmileyXEyesLight } from "react-icons/pi";
import { Wrapper, Merger } from "./component/Styled-components/Style";
import { FavPage } from "./component/FavPage/FavPage";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [input, setInput] = useState("");
  const [activecategory, setActiveCategory] = useState("All");
  const [display, setDisplay] = useState(false);
  const [check, setCheck] = useState(false);
  const [category, setCategories] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [displayFav, setDisplayFav] = useState(false);
  const [isNight, setIsDay] = useState(false);

  useEffect(() => {
    const url = "https://fakestoreapi.com/products";
    fetchData(url);
  }, []);

  useEffect(() => {
    document.title = `Devs(${cart?.reduce((acc, el) => {
      return (acc += el.quantity);
    }, 0)})`;
  }, [cart]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    const storeFav = JSON.parse(localStorage.getItem("favourites"));
    const storeMode = JSON.parse(localStorage.getItem("mode"));
    if (storedCart) {
      setCart(storedCart);
    }
    if (storeFav) {
      setFavourites(storeFav);
    }
    if (storeMode) {
      setIsDay(storeMode);
    }
  }, []);

  useEffect(() => {
    if (activecategory === "favourites") {
      setDisplayFav(true);
      // setData(favourites)
    } else {
      setDisplayFav(false);
    }
  }, [activecategory]);

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      if (response.status !== 200) throw new Error("Bad request");
      const data = response.data;
      setData(data);
      console.log(data, ">>> DATA");
      const uniqueCategories = [
        "All",
        ...new Set(data.map((item) => item.category)),
      ];
      setCategories(uniqueCategories);
    } catch (error) {
      console.log(error);
    }
  };

  const checkFav = (id) => {
    return favourites.some((el) => el.id === id);
  };

  const handleFav = (id) => {
    
    const item = data.find((el) => el.id === id);

    if (!favourites.some((el) => el.id === id)) {
      setFavourites([...favourites, item]);
      localStorage.setItem("favourites", JSON.stringify([...favourites, item]));
    } else {
      alert("already there");
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleDisplay = () => {
    setDisplay(!display);
  };

  const addToCart = (id) => {
    const item = data.find((product) => product.id === id);
    const isExist = cart.some((item) => item.id === id);
    if (isExist) {
      const updated = cart.map((item) => {
        if (item.id === id) {
          item.quantity++;
        }
        return item;
      });
      setCart(updated);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...item, quantity: 1 }])
      );
    }
  };

  const handleClick = () => {
    const optimized = input.toLowerCase();
    const url = `https://fakestoreapi.com/products/category/${optimized}`;
    fetchData(url);
  };

  const handleDelete = (id) => {
    const filtered = cart.filter((item) => item.id !== id);
    setCart(filtered);
    localStorage.setItem("cart", JSON.stringify(filtered));
    const filteredFav = favourites.filter((item) => item.id !== id);
    localStorage.setItem("favourites", JSON.stringify(filteredFav));
  };

  const updateQuantity = (digit, id) => {
    const updated = cart.map((item) => {
      if (item.id === id) {
        item.quantity = digit;
      }
      return item;
    });
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // const filteredProoducts = data.filter((product) => {
  //   if (activecategory === "All") {
  //     return true;
  //   } else {
  //     return product.category === activecategory;
  //   }
  // });

  // console.log(filteredProoducts, "product");

  const filteredCart = cart.filter((product) => {
    if (activecategory === "All") {
      return true;
    } else {
      return product.category === activecategory;
    }
  });
  console.log(filteredCart, "cart");

  const handleMode = () => {
    setIsDay(!isNight);
    localStorage.setItem("mode", JSON.stringify(!isNight));
  };

  const customClass = isNight ? "App dark" : "App";

  return (
    <div className={customClass}>
      <NavbarComponent
        cart={cart}
        handleChange={handleChange}
        handleDisplay={handleDisplay}
        display={display}
        input={input}
        setActiveCategory={setActiveCategory}
        category={category}
        activecategory={activecategory}
        handleClick={handleClick}
        handleMode={handleMode}
        isNight={isNight}
      />
      {/* {display ? (
        <CartList
          handleDelete={handleDelete}
          input={input}
          check={check}
          activecategory={activecategory}
          filteredCart={filteredCart}
          updateQuantity={updateQuantity}
        />
      ) : displayFav ? (
        <FavPage
          handleDelete={handleDelete}
          favourites={favourites}
          addToCart={addToCart}
          input={input}
          check={check}
          activecategory={activecategory}
        />
      ) : data.length > 0 ? (
        <ProductList
          filteredProoducts={filteredProoducts}
          addToCart={addToCart}
          input={input}
          check={check}
          activecategory={activecategory}
          handleFav={handleFav}
          checkFav={checkFav}
        />
      ) : (
        <div className="errPage">
          <PiSmileyXEyesLight className="err-icon" />
          <h1>Data not found</h1>
        </div>
      )} */}

      <Routes>
        <Route
          path="/"
          element={
            <ProductList
              data={data}
              addToCart={addToCart}
              input={input}
              check={check}
              activecategory={activecategory}
              handleFav={handleFav}
              checkFav={checkFav}
            />
          }
        ></Route>
        <Route
          path="/category/:category"
          element={
            <ProductList
              data={data}
              addToCart={addToCart}
              input={input}
              check={check}
              activecategory={activecategory}
              handleFav={handleFav}
              checkFav={checkFav}
            />
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <CartList
              handleDelete={handleDelete}
              input={input}
              check={check}
              activecategory={activecategory}
              filteredCart={filteredCart}
              updateQuantity={updateQuantity}
            />
          }
        ></Route>
        <Route
          path="/favourites"
          element={
            <FavPage
              handleDelete={handleDelete}
              favourites={favourites}
              addToCart={addToCart}
              input={input}
              check={check}
              activecategory={activecategory}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
