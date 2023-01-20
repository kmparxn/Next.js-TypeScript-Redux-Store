"use client";

import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "src/slices/basketSlice"
import { Producto } from "typings";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image, rating}: Producto) {

  const [rating2] = useState(5);
  const [hasPrime] = useState();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime,
      rating
    };

  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 ">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <div className="flex justify-center">
        <Image src={image} height={200} width={200} alt={""} />
      </div>

      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array(rating2)
          .fill("")
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" key={i} />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">Free Next-day Delivery</p>
        </div>
      )}

      <button className="mt-auto button">Add to basket</button>
    </div>
  );
}

export default Product;
