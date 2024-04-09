"use client";
import React from "react";
import { useAppSelector } from "../../store/store";
export default function BlogPage() {
  const authState = useAppSelector((state) => state.auth.authState);
  return (
    <div>
      <p>Is Logged: {authState.toString()}</p>
    </div>
  );
}
