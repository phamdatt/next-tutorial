"use client";
export default function GlobalError({ error }) {
  return (
    <html>
      <body>
        <h2>Something went wrong! {error.message}</h2>
      </body>
    </html>
  );
}
