import { TableItem } from "../CartItem/CartItem";
import "./CartList.css";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Table } from "reactstrap";

export const CartList = ({
  activecategory,
  handleDelete,
  input,
  check,
  filteredCart,
  updateQuantity
}) => {
  let filtered = filteredCart;

  if (activecategory === "price") {
    const copy = data.slice().sort((a, b) => {
      const yearDifference = parseInt(b.price) - parseInt(a.price);
      if (yearDifference !== 0) return yearDifference;
    });
    filtered = copy;
  } else {
    /*   Searching   */
    filtered = filteredCart.filter((item) =>
      item.title.toLowerCase().includes(input.toLowerCase())
    );
    console.log(filtered)
  }
  return (
    <div className="container-fluid px-5 py-0 m-0">
      <Table responsive>
        <thead className="">
          <tr>
            <td colSpan={10} className="text-center  header">
              Cart
            </td>
          </tr>
        </thead>
        <tbody>
          {filteredCart.length > 0 ? (
            filtered.length > 0 ? (
              filtered.map((item) => {
                return (
                  <TableItem
                    key={item.id}
                    {...item}
                    handleDelete={handleDelete}
                    updateQuantity={updateQuantity}
                  />
                );
              })
            ) : (
              <tr>
                <td colSpan={10} className="text-center">
                  <MdOutlineRemoveShoppingCart className="cart-icon my-4" />
                </td>
              </tr>
            )
          ) : (
            <tr>
              <td colSpan={10} className="text-center">
                <MdOutlineRemoveShoppingCart className="cart-icon my-4" />
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};
