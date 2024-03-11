'use client';
import { updateCategory } from '@/app/action/editCategoryAction';
import { useRouter } from 'next/navigation';
import React,{useState} from 'react'
import { toast } from "sonner";
const EditCategory = () => {
   const router = useRouter();
   const [editCategory,setEditCategory] = useState(false);

  return (
    <div>
      <h1>EDIT CATEGORY</h1>
      <div className="pb-4" />
      <form
        className="flex flex-col mx-auto "
        action={async (formData) => {
          setEditCategory(true);
          const data = await updateCategory(formData);
          setEditCategory(false);
          if (data.status) {
            toast.success(data.message);
            router.replace("/category");
          } else {
            toast.error(data.message);
          }
        }}
      ></form>
      <input type="text" placeholder='Enter category'/>
      <button>Edit</button>
      
    </div>
  )
}

export default EditCategory