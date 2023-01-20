import { Console } from 'console';
import React from 'react'
import { Producto } from 'typings'
import Product from "./Product"

function ProductFeed({ posts } : any) {
  // I'M GETTING THE ERROR HERE

  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
        {posts.slice(0,4).map(({ id , title, price, description, category, image, rating } : Producto) => (
        <Product
        key ={id}
        id={id}
        title={title}
        price={price}
        description = {description}
        category = {category}
        image = {image}
        rating = {rating}
        />
        ))}

        <img className="md:col-span-full" 
        src="https://links.papareact.com/dyz" 
        alt="" />
        
        <div className="md:col-span-2">
        {posts.slice(4, 5).map(({ id, title, price, description, category, image, rating } : Producto) => (
        <Product 
        key={id}
        id={id}
        title={title}
        price={price}
        description = {description}
        category = {category}
        image = {image}
        rating = {rating}
        />
        ))}       
        </div>

        {posts.slice(5, posts.length).map(({ id, title, price, description, category, image, rating } : Producto) => (
        <Product 
        key={id}
        id={id}
        title={title}
        price={price}
        description = {description}
        category = {category}
        image = {image}
        rating = {rating}
        />
        ))}           
    </div>
  )
}

export default ProductFeed