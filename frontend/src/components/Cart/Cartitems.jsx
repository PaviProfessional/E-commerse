import React , { useContext } from 'react'
import './Cartitems.css'
import { Shopcontext } from '../../context/Shopcontext'
import remove_icon from '../assets/cart_cross_icon.png'

export const Cartitems = () => {
    const {gettotalcartamount,all_product,cartitem,Removefromcart}=useContext(Shopcontext);
  return (
    <div className='cartitems'>
        <div className='cartitems-format-main'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartitem[e.id]>0)
            {
                return <div>
                <div className='cartitems-format cartitems-format-main'>
                    <img src={e.image} className='carticon-product-icon'></img>
                    <p>{e.name}</p>
                    <p>RS.{e.new_price}</p>
                    <button className='cartitrems-quantity'>{cartitem[e.id]}</button>
                    <p>RS.{e.new_price*cartitem[e.id]}</p>
                    <img className='cartitem-remove-icon' src={remove_icon} onClick={()=>{Removefromcart(e.id)}}></img>
                </div>
                <hr/>
            </div>
       
            }
        return null;
        })}
        <div className='cartitems-down'>
            <div className='cartitems-total'>
                <h1>Cart Totals</h1>
                <div>
                    <div className='cartitems-total-item'>
                        <p>SubTotal</p>
                        <p>RS.{gettotalcartamount()}</p>
                    </div>
                    <hr></hr>
                    <div className='cartitems-total-item'>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr></hr>
                    <div className='cartitems-total-item'>
                        <h3>Total</h3>
                        <h3>RS.{gettotalcartamount()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
        </div>
         </div>
  )
}
