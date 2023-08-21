import { Navbar, NavbarBrand } from "reactstrap";
import "./Navbar.css";
import { InputComponent } from "../Input/Input";
import { BsCart4, BsFillSunFill } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { Wrapper, Button, Merger } from "../Styled-components/Style";
import { GrMoney } from "react-icons/gr";
import { FaMoon } from "react-icons/fa";
import Canvas from "../OffCanvas/OffCanvas";

export const NavbarComponent = ({
  cart,
  handleChange,
  handleDisplay,
  display,
  input,
  setActiveCategory,
  category,
  activecategory,
  handleClick,
  isNight,
  handleMode,
}) => {
  const totalPrice = cart.reduce(
    (acc, el) => (acc += el.price * el.quantity),
    0
  );
  const check = cart.length > 0 ? false : true;
  const customClass = cart.length > 0 ? "cart-item" : "cart-disabled";
  return (
    <>
      <Navbar color="dark" dark className="p-0  mb-4">
        <NavbarBrand href="/">
          <img
            className="me-3 img logo"
            alt="logo"
            src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1444017277/cwrxk3ciucdwluu80jqt.png"
            style={{
              height: 40,
              width: 40,
            }}
          />
          <span className="logo-title">DevsShop</span>
        </NavbarBrand>
        <Wrapper>
          <Canvas
            className="canvas"
            activecategory={activecategory}
            category={category}
            setActiveCategory={setActiveCategory}
          />
          {/* <DropdownComponent handleFilter={handleFilter} /> */}
          <InputComponent
            handleChange={handleChange}
            input={input}
            display={display}
            handleClick={handleClick}
          />
        </Wrapper>
        <Wrapper className="cart-info">
          <Merger>
            <GrMoney color="primary" className="penny" />
            <div className="total-price">${totalPrice.toFixed(2)}</div>
          </Merger>
          <div className="cart-card">
            <div className="cart-count">
              {cart.reduce((sum, el) => sum + el.quantity, 0)}
            </div>
            {display ? (
              <Button onClick={handleDisplay}>
                <AiOutlineHome className="cart-item" />
              </Button>
            ) : (
              <Button disabled={check} onClick={handleDisplay}>
                <BsCart4 className={customClass} />
              </Button>
            )}
          </div>
          <Button onClick={() => handleMode()} className="ms-3 mode">
            {isNight ? (
              <BsFillSunFill className="sun" />
            ) : (
              <FaMoon className="moon" />
            )}
          </Button>
        </Wrapper>
      </Navbar>
    </>
  );
};
