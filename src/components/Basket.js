import React from 'react';


function Basket(props) {
  const { BasketItems, AddItems, RemoveItems } = props;
  const itemsPrice = BasketItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 200 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside className="block col-1">
      <h2>Basket Items</h2>
      <div>
        {BasketItems.length === 0 && <div>Basket is empty</div>}
        {BasketItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => RemoveItems(item)} className="remove">
              Delete Item
              </button>{' '}
              <button onClick={() => AddItems(item)} className="add">
              Add Item
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {BasketItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => alert('Moving to payment!')}>
                Buy Now
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}

export default Basket;