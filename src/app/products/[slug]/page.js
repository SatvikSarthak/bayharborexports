import ProductSlugClient from "@/components/ProductSlugClient";
import { productsData } from "@/data/productsData";

export async function generateMetadata({params}){
  const {slug} = await params;

  const product = productsData.find(item=> item.slug=== slug);
 console.log(product);

  if(!product){
    return {
      title:"Product Not Found "
    }
  }

  return {
    title:`${product.name}`,
    description:`${product.description} - Bayharbor Exports`
  }
}

export default async function Page ({params}){
  const {slug} = await params;
  return <ProductSlugClient slug={slug} />
}