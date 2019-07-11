import React from "react";
import Card from "./card";
import Image1 from "../assets/img/image1.jpg";
import Image2 from "../assets/img/image2.png";
import Image3 from "../assets/img/image3.jpg";
import Image4 from "../assets/img/image4.jpg";
import Image5 from "../assets/img/image5.jpg";
import Image6 from "../assets/img/image6.jpg";
import Image7 from "../assets/img/image7.png";
import Image8 from "../assets/img/image8.jpg";

export default class Shop extends React.Component {
  render() {
    return (
      <div className="container">
        <h3 className="h3">Need some equipment ? </h3>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="product-grid">
              <div className="product-image">
                <a href="#">
                  <img className="pic-1" src={Image1} />
                  <img className="pic-2" src={Image1} />
                </a>
                <ul className="social">
                  <li>
                    <a href data-tip="Quick View">
                      <i className="fa fa-search" />
                    </a>
                  </li>
                  <li>
                    <a href data-tip="Add to Wishlist">
                      <i className="fa fa-shopping-bag" />
                    </a>
                  </li>
                  <li>
                    <a href data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart" />
                    </a>
                  </li>
                </ul>
                <span className="product-new-label">Sale</span>
                <span className="product-discount-label">20%</span>
              </div>
              <ul className="rating">
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="fa fa-star disable" />
              </ul>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Wheelchair</a>
                </h3>
                <div className="price">
                  $16.00
                  <span>$20.00</span>
                </div>
                <a className="add-to-cart" href>
                  + Add To Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid">
              <div className="product-image">
                <a href="#">
                  <img className="pic-1" src={Image2} />
                  <img className="pic-2" src={Image2} />
                </a>
                <ul className="social">
                  <li>
                    <a href data-tip="Quick View">
                      <i className="fa fa-search" />
                    </a>
                  </li>
                  <li>
                    <a href data-tip="Add to Wishlist">
                      <i className="fa fa-shopping-bag" />
                    </a>
                  </li>
                  <li>
                    <a href data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart" />
                    </a>
                  </li>
                </ul>
                <span className="product-new-label">Sale</span>
                <span className="product-discount-label">50%</span>
              </div>
              <ul className="rating">
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="fa fa-star" />
              </ul>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Men's Plain Tshirt</a>
                </h3>
                <div className="price">
                  $5.00
                  <span>$10.00</span>
                </div>
                <a className="add-to-cart" href>
                  + Add To Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid">
              <div className="product-image">
                <a href="#">
                  <img className="pic-1" src={Image3} />
                  <img className="pic-2" src={Image3} />
                </a>
                <ul className="social">
                  <li>
                    <a href data-tip="Quick View">
                      <i className="fa fa-search" />
                    </a>
                  </li>
                  <li>
                    <a href data-tip="Add to Wishlist">
                      <i className="fa fa-shopping-bag" />
                    </a>
                  </li>
                  <li>
                    <a href data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart" />
                    </a>
                  </li>
                </ul>
                <span className="product-new-label">Sale</span>
                <span className="product-discount-label">50%</span>
              </div>
              <ul className="rating">
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="fa fa-star" />
              </ul>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Men's Plain Tshirt</a>
                </h3>
                <div className="price">
                  $5.00
                  <span>$10.00</span>
                </div>
                <a className="add-to-cart" href>
                  + Add To Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid">
              <div className="product-image">
                <a href="#">
                  <img className="pic-1" src={Image4} />
                  <img className="pic-2" src={Image4} />
                </a>
                <ul className="social">
                  <li>
                    <a href data-tip="Quick View">
                      <i className="fa fa-search" />
                    </a>
                  </li>
                  <li>
                    <a href data-tip="Add to Wishlist">
                      <i className="fa fa-shopping-bag" />
                    </a>
                  </li>
                  <li>
                    <a href data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart" />
                    </a>
                  </li>
                </ul>
                <span className="product-new-label">Sale</span>
                <span className="product-discount-label">50%</span>
              </div>
              <ul className="rating">
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="fa fa-star" />
              </ul>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Men's Plain Tshirt</a>
                </h3>
                <div className="price">
                  $5.00
                  <span>$10.00</span>
                </div>
                <a className="add-to-cart" href>
                  + Add To Cart
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="product-grid">
              <div className="product-image">
                <a href="#">
                  <img className="pic-1" src={Image5} />
                  <img className="pic-2" src={Image5} />
                </a>
                <ul className="social">
                  <li>
                    <a href data-tip="Quick View">
                      <i className="fa fa-search" />
                    </a>
                  </li>
                  <li>
                    <a href data-tip="Add to Wishlist">
                      <i className="fa fa-shopping-bag" />
                    </a>
                  </li>
                  <li>
                    <a href data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart" />
                    </a>
                  </li>
                </ul>
                <span className="product-new-label">Sale</span>
                <span className="product-discount-label">20%</span>
              </div>
              <ul className="rating">
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="fa fa-star disable" />
              </ul>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Women's Blouse</a>
                </h3>
                <div className="price">
                  $16.00
                  <span>$20.00</span>
                </div>
                <a className="add-to-cart" href>
                  + Add To Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid">
              <div className="product-image">
                <a href="#">
                  <img className="pic-1" src={Image6} />
                  <img className="pic-2" src={Image6} />
                </a>
                <ul className="social">
                  <li>
                    <a href data-tip="Quick View">
                      <i className="fa fa-search" />
                    </a>
                  </li>
                  <li>
                    <a href data-tip="Add to Wishlist">
                      <i className="fa fa-shopping-bag" />
                    </a>
                  </li>
                  <li>
                    <a href data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart" />
                    </a>
                  </li>
                </ul>
                <span className="product-new-label">Sale</span>
                <span className="product-discount-label">50%</span>
              </div>
              <ul className="rating">
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="fa fa-star" />
              </ul>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Men's Plain Tshirt</a>
                </h3>
                <div className="price">
                  $5.00
                  <span>$10.00</span>
                </div>
                <a className="add-to-cart" href>
                  + Add To Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid">
              <div className="product-image">
                <a href="#">
                  <img className="pic-1" src={Image7} />
                  <img className="pic-2" src={Image7} />
                </a>
                <ul className="social">
                  <li>
                    <a href data-tip="Quick View">
                      <i className="fa fa-search" />
                    </a>
                  </li>
                  <li>
                    <a href data-tip="Add to Wishlist">
                      <i className="fa fa-shopping-bag" />
                    </a>
                  </li>
                  <li>
                    <a href data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart" />
                    </a>
                  </li>
                </ul>
                <span className="product-new-label">Sale</span>
                <span className="product-discount-label">50%</span>
              </div>
              <ul className="rating">
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="fa fa-star" />
              </ul>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Men's Plain Tshirt</a>
                </h3>
                <div className="price">
                  $5.00
                  <span>$10.00</span>
                </div>
                <a className="add-to-cart" href>
                  + Add To Cart
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="product-grid">
              <div className="product-image">
                <a href="#">
                  <img className="pic-1" src={Image8} />
                  <img className="pic-2" src={Image8} />
                </a>
                <ul className="social">
                  <li>
                    <a href data-tip="Quick View">
                      <i className="fa fa-search" />
                    </a>
                  </li>
                  <li>
                    <a href data-tip="Add to Wishlist">
                      <i className="fa fa-shopping-bag" />
                    </a>
                  </li>
                  <li>
                    <a href data-tip="Add to Cart">
                      <i className="fa fa-shopping-cart" />
                    </a>
                  </li>
                </ul>
                <span className="product-new-label">Sale</span>
                <span className="product-discount-label">50%</span>
              </div>
              <ul className="rating">
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="fa fa-star" />
                <li className="fa fa-star" />
              </ul>
              <div className="product-content">
                <h3 className="title">
                  <a href="#">Men's Plain Tshirt</a>
                </h3>
                <div className="price">
                  $5.00
                  <span>$10.00</span>
                </div>
                <a className="add-to-cart" href>
                  + Add To Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
