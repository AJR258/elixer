'use server'
import { getSession } from "../login/action";

export async function getDashboard() {
  const session = await getSession()
  const res = await fetch("http://64.227.134.123:8080/admin/dashboard", {
    cache: "no-cache",
    headers: {
      "Authorization": session ?? ""
    },
  });
  if (!res.ok) {
    throw Error("something went wrong")
  }
  console.log("res",res)
  const data = await res.json()
  console.log(data.data)
  return data;
}
