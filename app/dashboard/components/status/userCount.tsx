import React from "react";

export default function UserCount(data: DashboardDataModel) {
  return (
    <div className="stats stats-vertical shadow">
      <div className="stat">
        <p className="text-lg font-bold	pt-3">User details</p>
        <div className="stat-title">
          <div>Admin</div>
        </div>
        <div className="stat-value">{data.data.count.user.admin}</div>
      </div>

      <div className="stat">
        <div className="stat-title">Staff</div>
        <div className="stat-value">{data.data.count.user.staff}</div>
      </div>

      <div className="stat">
        <div className="stat-title">Users</div>
        <div className="stat-value">{data.data.count.user.user}</div>
      </div>
    </div>
  );
}
