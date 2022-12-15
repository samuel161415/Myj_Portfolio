import React from 'react'
import './productList.css'
import Product from '../product/Product'
import { products } from '../../assets/data'
function ProductList() {
  return (
    <div className='pl'>
        <div className="pl-texts">
            <h1 className="pl-title">
                Products
            </h1>
            <p className="pl-desc">
                 All this are products made by me. check them out 
            </p> 
        </div>
        <div className="pl-list">
          {products.map((item,idx)=>(
            <Product item={item} key={item.id} keyy={item.id}/>
          ))}
        
        
        </div>
    </div>
  )
}

export default ProductList