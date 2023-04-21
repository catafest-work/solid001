//
import {A} from "@solidjs/router"
//
import { createResource } from "solid-js";
import Card from '../components/Card';
import { For } from "solid-js";

// need to by async function
const fetchProducts = async () => {
  const res = await fetch('http://localhost:4000/products')
  return res.json()
}

export default function Home() {
  // javascript 
  const [products] = createResource(fetchProducts)
  // return render
  return (
  <Show when={products()} fallback={<p>Loading ... </p>}>
    <div class="grid grid-cols-4 gap-10 my-4">
    {/* <Card title="catafest tee" rounded={true} flat={false}>
      <h2>catafest - author</h2>
    </Card>
    <Card title="green tee" rounded={true} flat={false}/>
    <Card title="black tee"/>
    <p>{console.log(products(), products.loading)}</p> */}
    <For each = {products()}>
      {(product) => (
        <Card rounded={true} flat={true} >
          <img src={product.img} alt="product img" />
          <h2 class="my-3 font-bold">{products.title}</h2>
          <A href={"/product/"+product.id} class="btn">View Product : {product.title}</A>
        </Card>
      )}
    </For>
    </div>
  </Show>
  )
}