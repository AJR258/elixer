import React from "react";

export default function WalletCount(data: DashboardDataModel) {
  return (
    <div className="stats stats-vertical shadow">
      <div className="stat">
        <div className="stat-title">Balance</div>
        <div className="stat-value">{data.data.count.wallet.balance}</div>
      </div>

      <div className="stat">
        <div className="stat-title">Redeemed</div>
        <div className="stat-value">{data.data.count.wallet.redeemed}</div>
      </div>

      <div className="stat">
        <div className="stat-title">Total</div>
        <div className="stat-value">{data.data.count.wallet.total}</div>
      </div>
    </div>
  );
}
