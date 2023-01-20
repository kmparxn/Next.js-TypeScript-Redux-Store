import {use} from "react"
import Banner from "./components/Banner";
import ProductFeed from "./components/ProductFeed";

async function getPost() {
  const posts = await fetch("https://fakestoreapi.com/products");

  return posts.json();
}

export default function Page() {
  const posts = use(getPost());
  
  return (
    <div>
      <Banner />
      <ProductFeed posts= {posts}/>
    </div>
  );
}