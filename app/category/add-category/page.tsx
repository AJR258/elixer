"use client";
import { createCategory } from "@/app/action/categoryAction";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const AddCategoryPage = () =>  {
  const router = useRouter();
  const [addCategory, setAddCategory] = useState(false);
  return (
    <div className="flex items-start flex-col justify-center">
      <h1 className="mx-auto text-center text-white bg-purple-600 font-bold text-lg p-4">ADD CATEGORY</h1>
      <div className="pb-4" />
      <form
        className="flex flex-col mx-auto "
        action={async (formData) => {
          setAddCategory(true);
          const data = await createCategory(formData);
          setAddCategory(false);
          if (data.status) {
            toast.success(data.message);
            router.replace("/category");
          } else {
            toast.error(data.message);
          }
        }}
      >
        <input
          placeholder="Category name"
          name="category_name"
          className="input input-bordered input-accent w-full max-w-xs"
        ></input>
        <div className="pt-2" />
        <button className="btn btn-success">Add Category</button>
      </form>
    </div>
  );
}

export default AddCategoryPage;