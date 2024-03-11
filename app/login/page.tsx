"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import "./login.css";
import Brand from "../components/brand/Brand";
import ColumnGap from "../components/sizedBox/ColumnGap";
import { Toaster, toast } from "sonner";
import { login } from "./action";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <div className="login">
      <Toaster richColors />

      <div className="login-card">
        {/* brand name */}
        <Brand className="brand" />

        <ColumnGap gap={25} />
        {/* details */}
        <h3>Welcome to Elixer! 👋🏻</h3>
        <p className="sub-title">
          Please sign-in to your account and start the adventure
        </p>

        <ColumnGap gap={25} />

        <form
          action={async (formData) => {
            setLoading(true);
            const data = await login(formData);
            setLoading(false);
            if (data.status) {
              toast.success("Login success");
              router.replace("/dashboard");
            } else {
              toast.error(data.message ?? "something went wrong");
            }
          }}
        >
          <input type="text" placeholder="Username" name="username"></input>
          <input type="password" placeholder="Password" name="password"></input>
          <button
            className={loading ? "button-loading" : "button"}
            type="submit"
          >
            {loading ? (
              <span className="loading loading-dots loading-lg"></span>
            ) : (
              "Login"
            )}
          </button>
        </form>
        <ColumnGap gap={20} />
      </div>
    </div>
  );
};

export default LoginPage;
