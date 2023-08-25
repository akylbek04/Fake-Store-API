import React, { useState } from "react";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { MdOutlineElectricBolt } from "react-icons/md";
import { FaRegGem } from "react-icons/fa";
import { Wrapper } from "../Styled-components/Style";
import { IoMdStarHalf, IoMdStarOutline, IoMdStar } from "react-icons/io";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Dropdown,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import "./Modal.css";

function CartItemModal({
  title,
  price,
  description,
  category,
  image,
  addToCart,
  id,
  handleDelete,
  rating,
  quantity,
  updateQuantity,
  digits,
}) {
  /* toggle */
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  /* icon specification */
  let icon;
  if (category === "women's clothing") {
    icon = <BsGenderFemale />;
  } else if (category === "men's clothing") {
    icon = <BsGenderMale />;
  } else if (category === "electronics") {
    icon = <MdOutlineElectricBolt />;
  } else if (category === "jewelery") {
    icon = <FaRegGem />;
  }

  // let star = rating.rate > 4.5 ? <>

  let stars;

  if (rating.rate > 4.5) {
    stars = (
      <>
        <IoMdStar style={{ color: "rgb(255, 215, 50)" }} className="star" />
        <IoMdStar style={{ color: "rgb(255, 215, 50)" }} className="star" />
        <IoMdStar style={{ color: "rgb(255, 215, 50)" }} className="star" />
        <IoMdStar style={{ color: "rgb(255, 215, 50)" }} className="star" />
        <IoMdStar style={{ color: "rgb(255, 215, 50)" }} className="star" />
      </>
    );
  } else if (rating.rate < 4.5 && rating.rate > 3.8) {
    stars = (
      <>
        <IoMdStar style={{ color: "rgb(255, 215, 50)" }} className="star" />
        <IoMdStar style={{ color: "rgb(255, 215, 50)" }} className="star" />
        <IoMdStar style={{ color: "rgb(255, 215, 50)" }} className="star" />
        <IoMdStarHalf style={{ color: "rgb(255,215, 50)" }} className="star" />
        <IoMdStarOutline
          style={{ color: "rgb(255,215, 50)" }}
          className="star"
        />
      </>
    );
  } else {
    stars = (
      <>
        <IoMdStar style={{ color: "rgb(255, 215, 50)" }} className="star" />
        <IoMdStar style={{ color: "rgb(255, 215, 50)" }} className="star" />
        <IoMdStarHalf style={{ color: "rgb(255,215, 50)" }} className="star" />
        <IoMdStarOutline
          style={{ color: "rgb(255,215, 50)" }}
          className="star"
        />
        <IoMdStarOutline
          style={{ color: "rgb(255,215, 50)" }}
          className="star"
        />
      </>
    );
  }

  return (
    <>
      <Button color="primary" className="read-btn" onClick={toggle}>
        Read more...
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="modal-container">
        <ModalHeader toggle={toggle} className="close-btn"></ModalHeader>
        <ModalBody className="d-flex p-0 m-2 info-container">
          <div className="img-card">
            <img
              src={image}
              className="img-fluid"
            />
          </div>
          <div className="info ms-4">
            <h3 className="title">{title}</h3>
            <div className="price">${(price * quantity).toFixed(2)}</div>
            <p className="category">
              <span className="category-color" color="secondary">
                {category}
              </span>{" "}
              {icon}
            </p>
            {rating.rate > 4.1 ? (
              <div className="bestseller">#1 Best Seller</div>
            ): <div className="shop-choice">Devs's<span className="choice"> choice</span></div>}

            <p className="stock">In Stock({rating.count})</p>
            <div className="holder">{stars}</div>
            <Wrapper>
              <UncontrolledDropdown>
                <DropdownToggle caret className="toggle-btn">
                  {quantity}
                  <span className="piece">pcs</span>
                </DropdownToggle>
                <DropdownMenu className="border-0 m-0 p-0 menu rounded-4">
                  {digits.map((digit) => {
                    return (
                      <DropdownItem
                        onClick={() => updateQuantity(digit, id)}
                        className="ps-3"
                        key={digit}
                      >
                        {digit}
                        <span className="piece">pcs</span>
                      </DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </UncontrolledDropdown>
              <button className="delete-btn">Delete</button>
              <button className="buy-btn">Buy now</button>
            </Wrapper>
          </div>
        </ModalBody>
        {/* <ModalFooter>
          
        </ModalFooter> */}
      </Modal>
    </>
  );
}

export default CartItemModal;
