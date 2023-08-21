import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Merger } from "../Styled-components/Style";

import "./Dropdown.css";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function DropdownComponent({ direction, handleFilter }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <>
      <Dropdown
        isOpen={dropdownOpen}
        toggle={toggle}
        direction={direction}
        className=""
      >
        <DropdownToggle>
          <AiOutlineMenu className="fs-6" />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => handleFilter("men")}>
            <Merger>
              <div className="dropdown-text">Men</div>
              <MdOutlineKeyboardArrowRight />
            </Merger>
          </DropdownItem>
          <DropdownItem onClick={() => handleFilter("women")}>
            <Merger>
              <div className="dropdown-text">Women</div>
              <MdOutlineKeyboardArrowRight />
            </Merger>
          </DropdownItem>
          <DropdownItem onClick={() => handleFilter("jewelery")}>
            <Merger>
              <div className="dropdown-text">Jewelery</div>
              <MdOutlineKeyboardArrowRight />
            </Merger>
          </DropdownItem>
          <DropdownItem onClick={() => handleFilter("electronics")}>
            <Merger>
              <div className="dropdown-text">Electronics</div>
              <MdOutlineKeyboardArrowRight />
            </Merger>
          </DropdownItem>
          <DropdownItem onClick={() => handleFilter("price")}>
            <Merger>
              <div className="dropdown-text">Price</div>
              <MdOutlineKeyboardArrowRight />
            </Merger>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}

export default DropdownComponent;
