"use client";

import React from "react";

export default function ErrorPage({ err }: { err: Error }) {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Error </h1>
          <p className="py-6">
            something went wrong please reload the application
          </p>
        </div>
      </div>
    </div>
  );
}
