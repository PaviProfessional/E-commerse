import React from 'react'
import { useContext } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import { useParams } from 'react-router-dom'
import { Breadcrums } from '../components/Breadcrums/Breadcrums'
import { Productdisplay } from '../components/Productdisplay/Productdisplay'
import { Relatedproduct } from '../components/relatedproduct/Relatedproduct'

export const Product = () => {
  const {all_product}=useContext(Shopcontext)
  const {productId}=useParams();
  const product=all_product.find((e)=>e.id === Number(productId))
  return (
    <div>
      <Breadcrums product={product}/>
      <Productdisplay product={product}/>
      <Relatedproduct/>
    </div>
  )
}
