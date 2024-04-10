"use client";
import React, { useState, Suspense } from "react";
import { useAppSelector } from "@/store/store";
const BlogPage = React.lazy(() => import("../blog/page"));
const AboutPage = () => {
  const authState = useAppSelector((state) => state.auth.authState);
  const [count, setCount] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  return (
    <div>
      <p>AboutPage :{authState.toString()}</p>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <label>
        <input
          type="checkbox"
          checked={showPreview}
          onChange={(e) => setShowPreview(e.target.checked)}
        />
        Show preview
      </label>
      {showPreview && (
        <Suspense fallback={<div>Loading...</div>}>
          <h2>Preview</h2>
          <BlogPage />
        </Suspense>
      )}
    </div>
  );
};
export default AboutPage;
