'use server'

import { cookies } from "next/headers";

export async function login(formData: FormData) {
  const reqBody = JSON.stringify({
    username: formData.get("username"),
    password: formData.get("password"),
  });
  console.log(formData)
  const res = await fetch("http://64.227.134.123:8080/admin/login", {
    cache: "no-cache",
    method: "POST",
    body: reqBody,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await res.json();
  console.log(data);

  if (data.status) {
    cookies().set("session", data.data.access)
  }
  return data;
}

export async function getSession() {
  const access = cookies().get("session")?.value
  console.log("session:")
  console.log(access)
  return access
}

export async function logout() {
  cookies().set("session", "")
  console.log("session clear")
  getSession();
  return "";
}