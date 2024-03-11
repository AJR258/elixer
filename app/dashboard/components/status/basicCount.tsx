import React from "react";
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJs.register(ArcElement, Tooltip, Legend);
export default function BasicCount(data: DashboardDataModel) {
  const pieData = {
    labels: [
      "Previous Year Exam",
      "Mock Exam",
      "Questions",
      "My contribution",
      "New users",
      "Current affairs",
    ],
    datasets: [
      {
        label: "Count",
        data: [
          data.data.count.previous_year_exam,
          data.data.count.mock_exam,
          data.data.count.questions,
          data.data.count.my_contribution,
          data.data.count.new_user,
          data.data.count.current_affair,
        ],
        backgroundColor: [
          "#8648F9",
          "#39C41F",
          "#FFAC21",
          "#00A6FC",
          "#FF3823",
          "#170133",
        ],
      },
    ],
  };
  const option = {};
  return (
    <div className="bg-white drop-shadow-xl rounded-lg p-4 ">
      <Doughnut data={pieData} options={option}></Doughnut>
    </div>
  );
}
