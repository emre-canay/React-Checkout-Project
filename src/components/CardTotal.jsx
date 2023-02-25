const CardTotal = () => {
  return (
    <div className="container w-100 mt-5">
      <p className="border-bottom p-2 d-flex justify-content-between">
        <span style={{ fontWeight: "700" }}>Subtotal</span>
        <span>11</span>
      </p>
      <p className="border-bottom p-2 d-flex justify-content-between">
        <span style={{ fontWeight: "700" }}>Tax(18%)</span>
        <span>22</span>
      </p>
      <p className="border-bottom p-2 d-flex justify-content-between">
        <span style={{ fontWeight: "700" }}>Shipping</span>
        <span>33</span>
      </p>
      <p className="border-bottom p-2 d-flex justify-content-between">
        <span style={{ fontWeight: "700" }}>Total</span>
        <span>44</span>
      </p>
    </div>
  );
};

export default CardTotal;
