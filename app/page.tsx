"use server";
import { redirect } from "next/navigation";
import { getSession } from "./login/action";

export default async function Home() {
  const access = await getSession();
  console.log(access);
  if (access == null || access == "") {
    redirect("/login");
  } else {
    redirect("/dashboard");
  }

  return (
    <main>
      <h1>Loading page</h1>
    </main>
  );
}
