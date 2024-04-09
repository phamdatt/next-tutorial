import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Post Detail",
};
export async function generateStaticParams() {
  const posts = await fetch("http://localhost:8080/posts").then((res) =>
    res.json()
  );

  return posts.payload.map((post: any) => ({
    id: post.post_id.toString(),
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
