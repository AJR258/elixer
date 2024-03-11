import React from "react";
import UserCount from "./userCount";
import CategoryCount from "./categoryCount";
import BasicCount from "./basicCount";
import WalletCount from "./walletCount";
import { useDashboardStore } from "@/app/zustandStore/dashboardStore";
import SkeltonLoading from "@/app/components/loading/skeltonLoading";

export default function DashboardCount() {
  const data = useDashboardStore((state) => state.data);

  if (data == null) {
    return (
      <div>
        <SkeltonLoading />
      </div>
    );
  }

  return (
    <div className="grid gap-4 grid-flow-col-dense">
      <BasicCount {...data!} />
      <UserCount {...data!} />
      <CategoryCount {...data!} />
      <WalletCount {...data!} />
    </div>
  );
}
