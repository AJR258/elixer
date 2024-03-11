import { create } from "zustand"
import { getDashboard } from "../action/dashboardAction";
import { useCategoryStore } from "./categoryStore";
import { useSubcategoryStore } from "./subCategorystore";

type DashboardStore = {
    data: DashboardDataModel | null
    getData: () => Promise<void>
}

export const useDashboardStore = create<DashboardStore>((set) => ({
    data: null,
    getData: async () => {
        try {
            const dashBoardData: Promise<DashboardDataModel> = getDashboard();
            const resp = await dashBoardData;
            set({ data: resp })
        } catch (e) {
            console.log(e)
        }
    },
}));