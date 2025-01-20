import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import star_icon from '../assets/star_icon.png'
import start_dull_icon from "../assets/star_dull_icon.png"
import  {ShopContext}  from '../../Context/ShopContext'



const ProductDisplay = (props) => {
  const {product} = props;
  const {addTocart} = useContext(ShopContext)
  return (
    <div className='product-display'>
      <div className="left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={start_dull_icon} alt="" />
          <p>{122}</p>
        </div>
       <div className="right-prices">
        <div className="old-price">${product.old_price}</div>
        <div className="new-price">${product.new_price}</div>
       </div>
       <div className="productdisplay-right-description">
       Immerse yourself in timeless sophistication with our Graceful Blossom Midi Dress.
        Crafted with meticulous attention to detail, this dress seamlessly blends modern trends with classic charm.
       </div>
       <div className="productdisplay-right-size">
        <h1>Select Size</h1>
        <div className="productdisplay-right-sizes">
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
        </div>
       </div>
       <button onClick={()=>{addTocart(product.id)}}>ADD TO CART</button>
      <p className='productdisplay-right-category'><span>Category :</span>Women , T-Shirt , Croptop</p>
      <p className='productdisplay-right-category'><span>Tags :</span>Modern , Latest </p>
      </div>

    </div>
  )
}

export default ProductDisplay