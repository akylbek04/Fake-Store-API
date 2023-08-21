import { InputGroup, Button } from "reactstrap";
import "./Input.css";
import { BsSearch } from "react-icons/bs";
import { DebounceInput } from "react-debounce-input";

export const InputComponent = ({ handleChange, handleClick, input, display}) => {
  return (
    <>
      {!display ? (
        <InputGroup className="ms-0">
          <DebounceInput
            minLength={1}
            placeholder="Search by category..."
            className="ps-2 debounce-input"
            onChange={handleChange}
            debounceTimeout={1000}
            value={input}
          />
          <Button onClick={handleClick}>
            <BsSearch />
          </Button>
        </InputGroup>
      ) : (
        <InputGroup className="ms-0">
          <DebounceInput
            minLength={1}
            placeholder="Search items..."
            className="px-2 debounce"
            onChange={handleChange}
            debounceTimeout={1000}
            value={input}
          />
        </InputGroup>
      )}
    </>
  );
};
