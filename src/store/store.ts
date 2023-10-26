import { create } from "zustand";
import { persist } from "zustand/middleware";

type PopupStateType = {
    onePopupOpen: boolean;
    setOnePopupOpen: (onePopupOpen: boolean) => void;
};

export type ParentType = {
    parent: string | null;
    id: string;
    isSorted: boolean;
};

type SweaterStoreType = {
    parents: ParentType[];
    setParents: (parents: ParentType[]) => void;
};

export const initialParents: ParentType[] = [
    {
        parent: null,
        id: "sweater1",
        isSorted: false,
    },
    {
        parent: null,
        id: "sweater2",
        isSorted: false,
    },
    {
        parent: null,
        id: "sweater3",
        isSorted: false,
    },
    {
        parent: null,
        id: "sweater4",
        isSorted: false,
    },
    {
        parent: null,
        id: "sweater5",
        isSorted: false,
    },
    {
        parent: null,
        id: "sweater6",
        isSorted: false,
    },
    {
        parent: null,
        id: "sweater7",
        isSorted: false,
    },
    {
        parent: null,
        id: "sweater8",
        isSorted: false,
    },
    {
        parent: null,
        id: "sweater9",
        isSorted: false,
    },
    {
        parent: null,
        id: "sweater10",
        isSorted: false,
    },
    {
        parent: null,
        id: "sweater11",
        isSorted: false,
    },
    {
        parent: null,
        id: "sweater12",
        isSorted: false,
    },
];

export const usePopupStore = create<PopupStateType>()((set) => ({
    onePopupOpen: false,
    setOnePopupOpen: (onePopupOpen) => set({ onePopupOpen }),
}));

export const useSweaterStore = create<SweaterStoreType>()(
    persist(
        (set) => ({
            parents: initialParents,
            setParents: (parents) => set(() => ({ parents: parents })),
        }),
        { name: "sweaterStore" }
    )
);
