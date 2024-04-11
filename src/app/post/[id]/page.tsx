import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Post Detail",
};
export async function generateStaticParams() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts").then((resp) => resp.json());

  return response.map((post: any) => ({
    id: post.id.toString(),
  }));
}
async function Post({ params }: any) {
  const { id } = params;
  return (
    <>
      <h1>Post Detail {id}</h1>
    </>
  );
}

export default Post;
