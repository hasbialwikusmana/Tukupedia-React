import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../Components/Modules/Navbar/Navbar";
import "../../assets/css/style.css";
// import ImageProducts from "../../assets/images/products/gez-xavier-mansfield-b34E1vh1tYU-unsplash 1.png";
import Rating from "../../assets/images/Rating 5 stars.svg";
// import { useNavigate } from "react-router-dom";

const Home = () => {
  // const Image =
  //   "http://localhost:4000/img/2022-05-28T17-52-24.620Z-gez-xavier-mansfield-b34E1vh1tYU-unsplash%201.png";
  // const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  async function fetchData() {
    try {
      const result = await axios({
        method: "GET",
        baseURL: "http://localhost:4000/v2",
        url: "/products",
      });
      setProducts(result.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  // const deleteProducts = (products_id) => {
  //   axios
  //     .delete(`http://localhost:4000/v2/products/${products_id}`)
  //     .then(() => {
  //       alert("delete success");
  //       fetchData();
  //       navigate("/");
  //     });
  // };
  return (
    <div>
      <Navbar />
      <section className="container mt-5">
        <div className="row">
          <div className="col-12">
            <p className="header-product">New</p>
            <p className="header-product-text mt-n4">
              You’ve never seen it before!
            </p>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-sm-around justify-content-center">
          <div className="flex-item">
            {products.map((item) => {
              return (
                <div className="card" key={item.products_id}>
                  <img
                    className="img-fluid"
                    // src={`"http://localhost:4000/img/${item.products_images}`}
                    src={`http://${item.products_images}`}
                    // src={ImageProducts}
                    alt=""
                  />
                  <div className="card-body">
                    {/* <a
                      href="./product.html" */}
                    <div className="card-product-title stretched-link">
                      {item.products_name}
                    </div>
                    <p className="card-product-price mt-1">
                      {item.products_price}
                    </p>
                    <p className="card-product-brand mt-n3">Zalora Cloth</p>
                    <ul className="list-rating-product p-0 mt-n3">
                      <li className="">
                        <img
                          className="img-fluid"
                          src={Rating}
                          alt="icon-rating"
                        />
                      </li>
                    </ul>
                    {/* <button
                      className="btn btn-danger"
                      onClick={() => deleteProducts(item.products_id)}
                    >
                      Delete
                    </button> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
