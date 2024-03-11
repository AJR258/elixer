"use client";
import SkeltonLoading from "@/app/components/loading/skeltonLoading";
import { useDashboardStore } from "@/app/zustandStore/dashboardStore";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { deleteCategoryApiCall } from "@/app/action/categoryAction";
import { toast } from "sonner";

export default function CategoryList() {
  const router = useRouter();

  const data = useDashboardStore((state) => state.data);
  const fetchDashboardData = useDashboardStore((state) => state.getData);

  if (data == null) {
    return (
      <div>
        <SkeltonLoading />
      </div>
    );
  }

  function openCategoryDetailsPage(id: number) {
    router.push("/category/" + id);
  }

  function openEditCategoryPage(id: number) {
    console.log("clicked");
    router.push("/category/" + id + "/edit");  
  }

  async function deleteCategory(id: number) {
    console.log('deleteCategory called with id:', id);
  
    const confirmDelete = confirm('Are you sure you want to delete this category?');
  
    if (confirmDelete) {
      try {
        const data = await deleteCategoryApiCall(id);
  
        if (data.status) {
          toast.success(data.message);
          console.log('Category deleted successfully');
          fetchDashboardData();
        } else {
          toast.error(data.message);
          console.error('Error deleting category:', data.message);
        }
      } catch (error) {
        console.error('Error deleting category:', error);
      }
    }
  }

  return (
    <div className=" bg-green-50 rounded-lg">
      <div className="pt-4" />
      <div className="ps-4 pe-6 pb-2 flex">
        <div className="text-green-700">Categories</div>
        <div className="grow" />
        <Link href={"/category/add-category"}>
          <div className="bg-green-700 px-4 text-white rounded-md">Add</div>
        </Link>
      </div>
      <div className="ps-4 pe-4 pt-2 pb-4">
        <div className="overflow-x-auto rounded-lg">
          <table className="table">
            {/* head */}
            <thead className="bg-green-700 text-white">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Status</th>
                <th>Created at</th>
                <th>Updated at</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.data.category.map((cat, index) => (
                <tr
                  onClick={() => openCategoryDetailsPage(cat.ID)}
                  className={index % 2 == 0 ? "bg-green-100" : "bg-green-200"}
                  key={cat.ID}
                >
                  <th>{index + 1}</th>
                  <td>{cat.name}</td>
                  <td>{cat.status ? "true" : "false"}</td>
                  <td>{cat.CreatedAt}</td>
                  <td>{cat.UpdatedAt}</td>
                  <td>
                    <div>
                      <button
                        onClick={(e) => {
                          openEditCategoryPage(cat.ID);
                          e.stopPropagation();
                        }}
                        className="text-blue-600"
                      >
                        Edit
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={(e) => {
                          deleteCategory(cat.ID);
                          e.stopPropagation();
                        }}
                        className="text-red-600 hover:text-red-800 focus:outline-none"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
