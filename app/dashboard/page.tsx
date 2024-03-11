"use client";
import React, { useEffect } from "react";
import "./components/status/dashboardCount";
import DashboardCount from "./components/status/dashboardCount";
import CategoryList from "./components/categories/categoryList";
import UserData from "./components/users/user";
import { useDashboardStore } from "../zustandStore/dashboardStore";
import { toast } from "sonner";

export default async function Dashboard() {
  const fetchDashboardData = useDashboardStore((state) => state.getData);

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  return (
    <div className="dashboard w-full">
      <DashboardCount />
      <div className="p-6" />
      <CategoryList />
      <div className="p-6" />
      <UserData />
    </div>
  );
}
