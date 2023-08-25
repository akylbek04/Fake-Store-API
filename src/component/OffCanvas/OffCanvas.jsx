import "./OffCanvas.css";
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

function Canvas({ category, setActiveCategory, activecategory }) {
  const [isOpen, setIsOpen] = useState(false);
  // console.log(category);

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button
        color="secondary"
        className="canvas-btn"
        onClick={toggleOffcanvas}
      >
        <AiOutlineMenu className="fs-6 menu" />
      </Button>
      <Offcanvas className="canvas" isOpen={isOpen} toggle={toggleOffcanvas}>
        <OffcanvasHeader toggle={toggleOffcanvas}></OffcanvasHeader>
        <OffcanvasBody>
          <div className="headline">Shop by Department</div>
          {category.map((el, index) => {
            return (
              <Link key={index} to={`category/${el}`}>
                <Button
                  className="category-btn"
                  onClick={() => setActiveCategory(el)}
                  active={el === activecategory}
                >
                  {el}
                  <MdOutlineKeyboardArrowRight className="fs-6 arrow " />
                </Button>
              </Link>
            );
          })}
          <div className="headline">Others</div>
              <Link  to='/favourites'>
                <Button
                  className="category-btn"
                  onClick={() => setActiveCategory('favourites')}
                  active={'favourites' === activecategory}
                >
                  favourites
                  <MdOutlineKeyboardArrowRight className="fs-6 arrow " />
                </Button>
              </Link>

        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
}

export default Canvas;
