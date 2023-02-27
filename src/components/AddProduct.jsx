import axios from "axios";
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import Button2 from "./Button2";

const AddProduct = ({ data }) => {
  console.log(data);
  const [button2, setButton2] = useState(true);
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name: productName,
      amount: productQuantity,
      image: productImage,
      price: productPrice,
      dampingRate: 0.8,
    };
    postData(newProduct);
    setProductImage("");
    setProductName("");
    setProductPrice("");
    setProductQuantity("");
  };

  const BASE_URL = "https://63fa3d35897af748dccbb376.mockapi.io/shoping";
  const postData = async (newProduct) => {
    try {
      await axios.post(BASE_URL, newProduct);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div onSubmit={handleSubmit}>
      <div onClick={(e) => setButton2(!button2)}>
        {button2 ? <Button2 /> : null}
      </div>
      {button2 ? (
        <form>
          <div className="mb-3">
            <label className="form-label">Product Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Product Price</label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Product Quantity</label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              value={productQuantity}
              onChange={(e) => setProductQuantity(Number(e.target.value))}
            />
          </div>
          <div>
            <label>Product Image</label>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">
                  https://example.com/users/
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
                value={productImage}
                onChange={(e) => setProductImage(e.target.value)}
              />
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-success"
              onClick={handleSubmit}
            >
              {" "}
              <FaCartPlus size="22px" className="m-2" /> Add To Cart
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
};

export default AddProduct;
