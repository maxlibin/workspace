import { FC } from "react";
import { Editor } from "@tiptap/react";

export const MenuItems: FC<{ editor: Editor }> = ({ editor }) => {
  return (
    <>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-2 rounded ${
          editor.isActive("bold") ? "bg-gray-200" : ""
        }`}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-2 rounded ${
          editor.isActive("italic") ? "bg-gray-200" : ""
        }`}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`p-2 rounded ${
          editor.isActive("strike") ? "bg-gray-200" : ""
        }`}
      >
        Strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={`p-2 rounded ${
          editor.isActive("code") ? "bg-gray-200" : ""
        }`}
      >
        Code
      </button>
    </>
  );
};

export default MenuItems;
