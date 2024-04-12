"use client";
import React from "react";
import { useTranslation } from "react-i18next";
export default function BlogPage() {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto">
      <div className="columns-2 md:columns-3 lg:columns-4">
        <div className="bg-indigo-500">
          <p className="text-blue-light">asdas</p>
        </div>
        <div className="bg-indigo-500">
          <p className="text-blue">asdas</p>
        </div>
        <div className="bg-indigo-500">
          <p className="text-blue-dark">asdas</p>
        </div>
      </div>
      <div className="columns-2">
        <div className="flex flex-row">
          <div className="basis-1/4 bg-pink">01</div>
          <div className="basis-1/4 bg-pink-light">02</div>
          <div className="basis-1/2 bg-pink-dark">03</div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="basis-1/4 bg-gray">01</div>
        <div className="basis-1/4 bg-gray-light">02</div>
        <div className="basis-1/2 bg-gray-dark">03</div>
      </div>
    </div>
  );
}
