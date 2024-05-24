"use client";
import React, { useState, Suspense, useEffect } from "react";
import { useAppSelector } from "@/store/store";
import Loading from "./loading";
const AboutPage = () => {
  const authState = useAppSelector((state) => state.auth.authState);
  const [count, setCount] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  });
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
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
            </Suspense>
          )}
        </>
      )}
    </div>
  );
};
export default AboutPage;
