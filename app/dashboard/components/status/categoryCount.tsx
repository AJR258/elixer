import React from "react";

export default function CategoryCount(data: DashboardDataModel) {
  return (
    <div className="stats stats-vertical shadow">
      <div className="stat">
        <p className="text-lg font-bold	pt-3">Category </p>

        <div className="stat-title">Category</div>
        <div className="stat-value">{data.data.count.category.category}</div>
      </div>

      <div className="stat">
        <div className="stat-title">Sub Category</div>
        <div className="stat-value">
          {data.data.count.category.sub_category}
        </div>
      </div>
    </div>
  );
}
