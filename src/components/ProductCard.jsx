import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const ProductCard = ({
  id,
  name,
  image,
  price,
  dampingRate,
  amount,
  getData,
}) => {
  const [count, setCount] = useState(Number(`${amount}`));

  const deleteData = async (id) => {
    const BASE_URL = "https://63fa3d35897af748dccbb376.mockapi.io/example1";
    try {
      await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  const putData = async () => {
    const BASE_URL = "https://63fa3d35897af748dccbb376.mockapi.io/example1";
    console.log(id, count);
    try {
      await axios.put(`${BASE_URL}/${id}`, {
        amount: count,
        name: name,
        image: image,
        price: price,
        dampingRate: dampingRate,
      });
    } catch (error) {
      console.log(error);
    }
  };
  putData();
  // console.log(id, count);

  // getData()

  // useEffect(() => {
  //     getData()
  //   }, [])

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
          <span className="m-2" onChange={() => putData()}>
            {count}
          </span>
          <button
            className="m-2"
            onClick={() => setCount(count > 1 ? count - 1 : (count = 0))}
          >
            <AiOutlineMinus />
          </button>
        </div>
        <div className="remove mt-4">
          <button
            id={id}
            type="button"
            className="btn btn-danger w-100"
            onClick={() => deleteData(id)}
          >
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
