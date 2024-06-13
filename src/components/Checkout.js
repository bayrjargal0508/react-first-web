import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./cartItem";
import BoxImage from "../assets/images/box.png";
import Bin from "../assets/images/bin.png";
import axios from "axios";
import { clearCart } from "../stores/cart";
import { products } from "../products";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; 

const Checkout = () => {
  const carts = useSelector((store) => store.cart.items);
  const statusTab = useSelector((store) => store.cart.statusTab);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState('');
  const [subDistrict, setSubdistrict] = useState('');
  const [residentialArea, setResidentialArea] = useState('');
  const [apartmentNumber, setApartmentNumber] = useState('');
  const [message] = useState('');

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = carts.reduce((total, cartItem) => {
    const product = products.find((product) => product.id === cartItem.productId);
    return total + (product ? product.price * cartItem.quantity : 0);
  }, 0);

  const totalQuantity = carts.reduce((total, cartItem) => {
    return total + cartItem.quantity;
  }, 0);

  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/checkout", {
        email,
        phone,
        district,
        subDistrict,
        residentialArea,
        apartmentNumber
      });
      console.log("Response:", response.data);
      Swal.fire({
        title: "Sweet!",
        text: "Modal with a custom image.",
        imageUrl: "https://i.pinimg.com/564x/ca/b3/d0/cab3d0bb31baa6bbd47df212eba4e256.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
      
      navigate('/nuur'); 
    } catch (error) {
      console.log("Error:", error);
      Swal.fire({
        title: "Custom animation with Animate.css",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
    }
  }

  return (
    <div>
     <div
  className={`border border-gray-300 mt-[5%] lg:ml-[35%] sm:ml-[-200%] shadow-2xl lg:w-[500px] md:w-[250px] sm:w-[100px] rounded-xl lg:h-[650px] h-[300px] lg:overflow-y-auto lg:flex lg:flex-col
  lg:transition-transform lg:duration-500 ${
      statusTab === false ? "translate-x-full" : ""
    }`}
>

  <div className="flex justify-between items-center px-5">
    <h2 className="text-black text-2xl">Shopping Cart</h2>
    <button
      className="bg-amber-600 text-white rounded-md px-4 w-48 py-2 mt-8 hover:bg-amber-900 flex items-center"
      onClick={handleClearCart}
    >
      <img src={Bin} alt="bin" className="w-6" />
      <p className="ml-2">Сагс хоослох</p>
    </button>
  </div>
  

  <div className="p-5">
    <b>Total Price: ${totalPrice.toFixed(2)}</b>
  </div>

  <div className="flex-grow p-5 lg:mt-0 mt-[-400px]">
    {carts.map((item, key) => (
      <CartItem
        key={key}
        data={item}
        image={
          products.find((product) => product.id === item.productId)?.image
        }
      />
    ))}
  </div>
</div>

    

      <div className="lg:mt-[-10%] mt-0">
        <div className="lg:mt-[-50%] mt-[-20%] lg:ml-[-10%] ml-10">
          <div className="border border-gray-300 p-6 rounded-lg shadow-lg xl:w-[990px] lg:w-[770px] md:w-[550px] w-[440px] lg:h-[90px] h-[200px] ml-[-29px] ">
            <img src={BoxImage} alt="box" className="w-12" />
            <div className="mt-[-50px]">
              <b className="ml-20 text-xl">Энгийн хүргэлт</b>
              <h1 className="ml-20">24-48 цагийн хооронд хүргэгдэнэ.</h1>
            </div>
            <p className="lg:mt-[-40px] mt-0 lg:ml-[70%] ml-0">
              Бүтээгдэхүүний тоо ширхэг: {totalQuantity}
            </p>
          </div>
          <div className="p-5 grid grid-cols-2">
            {message && <p>{message}</p>}
            <center>
              <div className="lg:ml-[-50px] ml-[-180px] border border-gray-300 p-6 rounded-lg shadow-lg lg:w-[160%] w-[70%]">
              <form onSubmit={submit} >
                  <div className="lg:mb-8 mb-40 grid grid-cols-2 gap-4">
                    <div className="lg:w-96 w-40">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="border border-gray-300 rounded-md px-3 py-2 mb-2 w-full"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        title="Please enter a valid email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="lg:w-96 w-40">
                      <input
                        type="number"
                        name="phone"
                        placeholder="Утасны дугаар"
                        className="border border-gray-300 rounded-md px-3 py-2 mb-2 w-full"
                        pattern="\d{8}"
                        title="Please enter an 8-digit phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>

                    <div className="lg:w-96 w-40">
                      <input
                        type="text"
                        name="district"
                        placeholder="Дүүрэг"
                        className="border border-gray-300 rounded-md px-3 py-2 mb-2 w-full"
                        title="Please enter a valid integer"
                        onChange={(e) => setDistrict(e.target.value)}
                        value={district}
                        required
                      />
                    </div>

                    <div className="lg:w-96 w-40">
                      <input
                        type="text"
                        name="subDistrict"
                        placeholder="Хороо"
                        className="border border-gray-300 rounded-md px-3 py-2 mb-2 w-full"
                        min="1"
                        step="1"
                        title="Please enter a valid integer"
                        value={subDistrict}
                        onChange={(e) => setSubdistrict(e.target.value)}
                        required
                      />
                    </div>

                    <div className="lg:w-96 w-40">
                      <input
                        type="text"
                        name="residentialArea"
                        placeholder="Хотхон"
                        className="border border-gray-300 rounded-md px-3 py-2 mb-2 w-full"
                        value={residentialArea}
                        onChange={(e) => setResidentialArea(e.target.value)}
                        required
                      />
                    </div>

                    <div className="lg:w-96 w-40">
                      <input
                        type="text"
                        name="apartmentNumber"
                        placeholder="Орц тоот"
                        className="border border-gray-300 rounded-md px-3 py-2 mb-2 w-full"
                        value={apartmentNumber}
                        onChange={(e) => setApartmentNumber(e.target.value)}
                        required
                      />
                    </div>

                    <div className="col-span-2 lg:w-96 w-24">
                      <button
                        type="submit"
                        className="bg-amber-600 text-white rounded-md px-4 py-2 w-full hover:bg-amber-900 ml-56"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </center>
          </div>
        </div>
      </div>
      <p className="mt-44"></p>
    </div>
  );
};

export default Checkout;
