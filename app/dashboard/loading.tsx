"use client";
export default function loading() {
  return (
    <div className="hero-content text-center min-h-[100vh] items-center">
      <div>
        <span className="loading loading-dots loading-lg bg-purple-600"></span>
        <h1>Please wait we are fetching your data </h1>
      </div>
    </div>
  );
}
