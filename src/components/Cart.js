import React, { useContext } from "react";
import { IoArrowForward, IoCartOutline, IoClose } from "react-icons/io5";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    setIsOpen,
    cart,
    removeFromCart,
    handleInput,
    handleSelect,
    total,
    clearCart,
  } = useContext(CartContext);

  return (
    <div className="w-full h-full px-4 text-white">
      <div className="overflow-y-auto overflow-x-hidden h-[75vh]">
        <div
          onClick={() => setIsOpen(false)}
          className="text-4xl w-20 h-[98px] flex justify-start items-center cursor-pointer"
        >
          <IoClose />
        </div>
        <div className="flex flex-col gap-y-10 px-2">
          {cart.map((item) => {

            return (
              <div className="flex gap-x-8" key={item.id}>
                <Link to={`product/${item.id}`} className="w-[70px] h-[70px]">
                  <img src={item.image} alt="item" />
                </Link>
                <div className="flex-1">
                  <div className="flex gap-x-4 mb-3">
                    <Link to={`product/${item.id}`}>{item.title}</Link>
                    <div
                      onClick={() => removeFromCart(item.id)}
                      className="curson-pointer text-[24px] hover:text-accent transition-all"
                    >
                      <IoClose />
                    </div>
                  </div>
                  <div className="flex items-center gap-x-12">
                    <div className="flex gap-x-4 mb-2">
                      <div className="flex gap-x-6 items-center text-primary">
                        {item.amount < 10 ? (
                          <select
                            onChange={(e) => handleSelect(e, item.id)}
                            value={item.amount}
                            className="p-2 rounded-lg w-[100px] h-12 outline-none text-primary"
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10+</option>
                          </select>
                        ) : (
                          <input
                            className="text-primary placeholder:text-primary h-12 rounded-md p-4 w-[120px] outline-accent"
                            type="number"
                            value={`${item.amount}`}
                            onChange={(e) => handleInput(e, item.id)}
                          />
                        )}
                      </div>
                    </div>
                    <div className="text-accent text-xl">
                      ₹ {item.price * item.amount}
                    </div>
                  </div>
                  <div>
                    <span className="text-accent">
                      ₹ {item.price} per piece
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {cart.length >= 1 && (
        <div className="px-6 py-10 flex flex-col">
          <div className="flex justify-between text-2xl">
            <div>Total</div>
            <div>₹ {total}</div>
          </div>
        </div>
      )}
      <div>
        {cart.length >= 1 ? (
          <div className="flex justify-between gap-x-4">
            <button
              onClick={() => clearCart()}
              className="btn btn-accent hover:bg-accent-hover text-primary"
            >
              clear cart
            </button>
            <button className="btn btn-accent hover:bg-accent-hover text-primary flex-1 px-2 gap-x-2">
              Checkout <IoArrowForward className="text-lg" />
            </button>
          </div>
        ) : (
          <div className="h-full absolute top-0 right-0 left-0 flex justify-center items-center -z-10 flex-col text-white/30">
            <div className="text-2xl">Your car is empty</div>
            <div className="text-6xl">
              <IoCartOutline />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
