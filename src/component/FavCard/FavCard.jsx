import "./FavCard.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { MdOutlineElectricBolt } from "react-icons/md";
import { FaRegGem, FaHeart } from "react-icons/fa";

export const FavCard = ({
  title,
  price,
  description,
  category,
  image,
  addToCart,
  id,
  check,
  rating,
  handleFav,
  isInFav,
  handleDelete
}) => {
  // console.log(quantity)

  /* Status */
  const text = check ? "...Pending" : "inactive";
  const customClass = check ? "text-warning" : "text-danger";
  const popularity = rating.rate > 4.5 && "Best Seller";
  const favClass = isInFav ? "add-fav-active" : "add-fav";

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

  return (
    <Card className="border border-1 rounded-1">
      <CardImg top width="100%" src={image} alt="Card image cap" />
      <div className="rating">{popularity}</div>
      <CardBody className=" p-1">
        <CardTitle className="fw-bold text-left m-0">{title}</CardTitle>
        <CardSubtitle className="category">
          {category} {icon}
        </CardSubtitle>
        <CardSubtitle className="pricing">
          Price:
          <span className="dollar"> $</span>
          <span className="number">{parseInt(half[0])}</span>
          <span className="dollar">{secondHalf}</span>
        </CardSubtitle>
        {/* <CardText color="dark" >{quantity}</CardText> */}
        <CardSubtitle className="status">
          Status: <span className={customClass}>{text}</span>
        </CardSubtitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </CardText>
        <Button
          onClick={() => addToCart(id)}
          className="border-0 p-0 m-0 me-1 rounded-0 bg-white btn-add"
        >
          <MdOutlineAddShoppingCart className="add-cart" />
        </Button>
        <Button
          onClick={() => handleDelete(id)}
          className="border-0 p-0 m-0 me-1 rounded-0 bg-white btn-fav"
        >
          <FaHeart className={favClass} />
        </Button>
      </CardBody>
    </Card>
  );
};
