"use client";
import React, { useEffect } from "react";
import CategoryList from "../dashboard/components/categories/categoryList";
import { useDashboardStore } from "../zustandStore/dashboardStore";

export default function CategoryPage() {
  const fetchDashboardData = useDashboardStore((state) => state.getData);

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);
  return (
    <div>
      <CategoryList />
    </div>
  );
}
