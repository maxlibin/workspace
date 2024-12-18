import { create } from "zustand";
import { persist } from "zustand/middleware";

interface EditorState {
  content: string;
  setContent: (content: string) => void;
  title: string;
  setTitle: (title: string) => void;
}

export const useEditorStore = create<EditorState>()(
  persist(
    (set) => ({
      content: "",
      setContent: (content) => set({ content }),
      title: "Untitled",
      setTitle: (title) => set({ title }),
    }),
    {
      name: "editor-storage",
    }
  )
);
