import React, { createContext, useState } from "react";
import all_product from '../components/assets/all_product';



export const Shopcontext =createContext(null);
const getDefaultcart =()=>{
    let cart=[]                                  //empty cart
    for (let index = 0; index < all_product.length; index++) {
        cart[index]=0;
    }
    return cart;
}
const ShopcontextProvider=(props) =>{
    const [cartitem,setcartitem]=useState(getDefaultcart());
    const Addtocart=(itemid)=>{
        setcartitem((prev)=>({...prev,[itemid]:prev[itemid]+1}))
        console.log(cartitem)
    }
    const Removefromcart=(itemid)=>{
        setcartitem((prev)=>({...prev,[itemid]:prev[itemid]-1}))
    }
    const gettotalcartamount=()=>{
        let totalamount=0;
        for(const item in cartitem)
        {
           if(cartitem[item]>0)
           {
            let iteminfo = all_product.find((product)=>product.id===Number(item))
            totalamount += cartitem[item]* iteminfo.new_price;
           }
        }
        return totalamount;
    }
        const gettotalcartitems=()=>{
            let totalitem=0;
            for( const item in cartitem)
            {
               if(cartitem[item]>0)
               {
                totalitem += cartitem[item];
               }
            }
            return totalitem
        }
    const contextValue={gettotalcartitems,gettotalcartamount,all_product,cartitem,Addtocart,Removefromcart}

    return(
        <Shopcontext.Provider value={contextValue}>
            {props.children}
        </Shopcontext.Provider>
    )
}
export default ShopcontextProvider;