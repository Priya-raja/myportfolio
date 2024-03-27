import blogs from "@/contents/blogs.json"
import portfolios from "@/contents/portfolios.json"
export default function Home() {
  return (
    <>
    <div>Hello</div>
    {JSON.stringify(blogs)}
    {JSON.stringify(portfolios)}
    </>
   
  );
}
