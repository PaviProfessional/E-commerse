import React, { useContext } from 'react'
import  './Productdisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { Shopcontext } from '../../context/Shopcontext'

export const Productdisplay = (props) => {
    const {product} =props
    const {Addtocart}=useContext(Shopcontext);
  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
                <img src={product.image}/>
                <img src={product.image}/>
                <img src={product.image}/>
                <img src={product.image}/>
            </div>
            <div className='productdisplay-img'>
                <img className='productdisplay-main-img' src={product.image}/>
            </div>
        </div>
        <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className='productdisplay-right-star'>
                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={star_icon}/>
                <img src={star_dull_icon}/>
                <p>(100)</p>
         </div>
         <div className='productdisplay-right-prices'>
         <div className='productdisplay-right-prices-old'>
             RS.{product.old_price}
         </div>
         <div className='productdisplay-right-prices-new'>
             RS.{product.new_price}
         </div>
         </div>
         <div className='productdisplay-right-description'>
         Casual shirt to wear out alert! Check out our new all-cotton flannel shirt! 
         This shirt is made from 100% cotton, making it soft to the touch and gentle on the skin. 
         The long-sleeve design is perfect for those cooler days or nights, while the button-up closure
         makes it easy to take on and off. The plaid design is perfect for any casual occasion,
         whether going to a barbecue or running errands. The shirt is made in India, 
         so you know you’re getting a high-quality product.


         </div>
         <div className='productdisplay-right-size'>
            <h1> Select Size</h1>
            <div className='productdisplay-right-sizes'>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XLL</div>
                </div>
                </div>

        <button onClick={()=>{Addtocart(product.id)}}> ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category :</span>Women, T-Shirt, Croptop</p>
        <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>

        </div>
    </div>
  )
}
