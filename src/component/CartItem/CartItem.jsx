import "bootstrap/dist/css/bootstrap.css";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { BsTrash3Fill } from "react-icons/bs";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { MdOutlineElectricBolt } from "react-icons/md";
import { FaRegGem } from "react-icons/fa";
import { LuFileDigit } from "react-icons/lu";
import CartItemModal from "../Modal/Modal";
import "./CartItem.css";

export const TableItem = ({
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
  updateQuantity
}) => {
  const popularity = rating.rate > 4.5 && "Best Seller";

  /* Pricing */
  const half = parseFloat(price).toString().split(".");
  const secondHalf = half[1] ? half[1] : "00";
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
  const digits = [1,2,3,4,5,6,7,8,9,10]

  return (
    <tr className="table-item">
      <td colSpan={1} width="60" className="tdata">
        <img
          className="img-fluid ms-2"
          src={image}
          alt={description.substring(0, 10)}
        />
      </td>
      <td colSpan={3} className=" tdata description">
        {description.substring(0, 150)}
        <button className="read-btn" color="primary">
          Read more...
        </button>
      </td>
      <td className=" tdata left " colSpan={1}>
        ${price}
      </td>

      <td className="tdata left" colSpan={3}>
        <UncontrolledDropdown>
          <DropdownToggle caret>{quantity}<span className="piece">pcs</span></DropdownToggle>
          <DropdownMenu className="border-0 m-0 p-0 menu rounded-4">
            {digits.map((digit) => {
              return (
                <DropdownItem  onClick={() => updateQuantity(digit,id)} className="ps-3" key={digit}>
                  {digit}<span className="piece">pcs</span>
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </UncontrolledDropdown>
      </td>
      <td className=" tdata left" colSpan={1}>
        <strong>${(price * quantity).toFixed(2)}</strong>
      </td>
      <td className="tdata left " colSpan={1}>
        <BsTrash3Fill
          onClick={() => handleDelete(id)}
          className="add-cart  me-3"
        />
      </td>
    </tr>
    // <Card className="border border-1 rounded-1">
    //   <CardImg top width="100%" src={image} alt="Card image cap" />
    //   <div className="rating">{popularity}</div>
    //   <CardBody className=" p-1">
    //     <CardTitle className="fw-bold text-left m-0">{title}</CardTitle>
    //     <CardSubtitle className="category">
    //       {category} {icon}
    //     </CardSubtitle>
    //     <CardSubtitle className="pricing">
    //       Price:
    //       <span className="dollar"> $</span>
    //       <span className="number">{parseInt(half[0])}</span>
    //       <span className="dollar">{secondHalf}</span>
    //       <CardText className="quantity">
    //         <LuFileDigit className="count" />{" "}
    //         <span className="number">{quantity}</span>
    //         <span className="dollar">pc</span>
    //       </CardText>
    //     </CardSubtitle>
    //     <Button
    //       onClick={() => handleDelete(id)}
    //       className="border-0 p-0 m-0 me-1 rounded-0 bg-white"
    //     >
    //       <BsTrash3Fill className="add-cart" />
    //     </Button>
    //   </CardBody>
    // </Card>
  );
};
