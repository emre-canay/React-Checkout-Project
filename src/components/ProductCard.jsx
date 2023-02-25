import { useState } from "react";
import { AiFillDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const ProductCard = ({ id, name, image, price, dampingRate, amount }) => {
  const [count, setCount] = useState(Number(`${amount}`));

  return (
    <div className="d-flex w-100 border mt-3 shadow">
      <div className="img m-3 w-50 text-center pt-5">
        <img src={image} alt="" style={{ width: "80%" }} />
      </div>
      <div className="w-50 pt-3">
        <div className="items">
          <h5 className="mt-2">{name}</h5>
          <p>
            <span className="text-warning fs-3">
              ${Number(price * dampingRate).toFixed(2)}
            </span>

            <span className="text-decoration-line-through fs-5">
              {Number(price).toFixed(2)}
            </span>
          </p>
        </div>

        <div className="button border p-2 d-flex justify-content-center w-100">
          <button
            className="m-2"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            {""} <AiOutlinePlus />
            {""}
          </button>
          <span className="m-2">{count}</span>
          <button
            className="m-2"
            onClick={() => setCount(count > 1 ? count - 1 : (count = 0))}
          >
            <AiOutlineMinus />
          </button>
        </div>
        <div className="remove mt-4">
          <button type="button" className="btn btn-danger w-100">
            <AiFillDelete />
            Remove
          </button>
        </div>
        <div className="productTotal">
          <p>
            Product Total:$
            <span>{Number(count * price * dampingRate).toFixed(2)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
