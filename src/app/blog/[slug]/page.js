import BlogSlugClient from "@/components/BlogSlugClient"
import { blogData } from "@/data/blogData"



export async function generateMetadata({params}){
  const {slug} =await params;
  const blogPost = blogData.find(item=>item.slug===slug);

  if(!blogData){
    return{
      title: "Blog Not Found - Bayharbor Exports",
      description:"The requested blog post does not exist."
    }
  }
  return {
    title:`${blogPost.title}- Bayharbor Exports`,
    description:
      blogPost.excerpt ||
      `Read expert insights on ${blogPost.title} from Bayharbor Exports.`,
  };
}
export default async function Page({params}){
  const {slug} = await params;
    return <BlogSlugClient slug={slug} />
}