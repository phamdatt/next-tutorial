import { Metadata } from "next";
import Link from "next/link";
import { GET } from "../api/route";
export const metadata: Metadata = {
  title: "Post",
};

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  }); //similar getStaticProps SSG
  // const response = await fetch("http://localhost:8080/posts", {
  //   cache: "no-store",
  // }); //-> similar getServerProps SSR
  // const response = await fetch("http://localhost:8080/posts", {
  //   next: {
  //     revalidate: 100,
  //   },
  // });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

// export async function generateStaticParams() {
//   const posts = await fetch('http://localhost:8080/posts').then((res) => res.json())
//   return posts.payload.map((post:any) => ({
//     postId: post.post_id,
//   }))
// }
async function Post() {
  const posts = await getPosts();
  await GET();
  return (
    <>
      <h1>List of Posts</h1>
      {posts.map((post: any) => {
        return (
          <div key={post.id}>
            <Link href={`post/${post.id}`}>
              <h2>
                {post.id} {post.title}
              </h2>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default Post;
