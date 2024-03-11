import { create } from "zustand"

type CategoryStore = {
    selectedCategory: number | null;
    setSelectedCategory: (id: number | null) => void
}

export const useCategoryStore = create<CategoryStore>((set) => ({
    selectedCategory: null,
    setSelectedCategory: (id: any) => {
        set({ selectedCategory: id })
    }
}));


