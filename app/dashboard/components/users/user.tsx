import SkeltonLoading from "@/app/components/loading/skeltonLoading";
import { useDashboardStore } from "@/app/zustandStore/dashboardStore";
import React from "react";

export default function UserData() {
  const data = useDashboardStore((state) => state.data);
  if (data == null) {
    return (
      <div>
        <SkeltonLoading />
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Phone number</th>
            <th>Email</th>
            <th>Username</th>
            <th>Type</th>
            <th>Created at</th>
            <th>Updated at</th>
          </tr>
        </thead>
        <tbody>
          {data?.data.users.map((user, index) => (
            <tr className="bg-base-200" key={user.Username}>
              <th>{index + 1}</th>
              <td>{user.Name}</td>
              <td>{user.PhoneNumber}</td>
              <td>{user.Gmail}</td>
              <td>{user.Username}</td>
              <td>{user.UserType}</td>
              <td>{user.CreatedAt}</td>
              <td>{user.UpdatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
