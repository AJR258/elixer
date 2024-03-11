"use server"

import { getSession } from "../login/action";

export async function createCategory(formData: FormData) {
    const session = await getSession()

    const reqBody = JSON.stringify({
        name: formData.get("category_name"),
    });
    const res = await fetch("http://64.227.134.123:8080/admin/category", {
        cache: "no-cache",
        method: "POST",
        body: reqBody,
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": session ?? ""
        },
    });
    const data = await res.json();
    console.log(data);
    return data;
}


export async function updateCategory(formData: FormData) {
    const session = await getSession()

    const reqBody = JSON.stringify({
        name: formData.get("category_name"),
    });
    const res = await fetch("http://64.227.134.123:8080/admin/category", {
        cache: "no-cache",
        method: "PATCH",
        body: reqBody,
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": session ?? ""
        },
    });
    const data = await res.json();
    console.log(data);
    return data;
}

export async function deleteCategoryApiCall(categoryId: number) {
    const session = await getSession()

    const res = await fetch("http://64.227.134.123:8080/admin/category?id=" + categoryId, {
        cache: "no-cache",
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": session ?? ""
        },
    });
    const data = await res.json();
    console.log(data);
    return data;
}

