import { FC } from "react";
import { Editor } from "@tiptap/react";
import MenuItems from "./MenuItems";

export const FixedMenu: FC<{ editor: Editor }> = ({ editor }) => {
  return (
    <div className="fixed-menu mb-4 flex gap-2 p-2 border border-gray-200 rounded-md">
      <MenuItems editor={editor} />
      <div className="border-l border-gray-200 mx-2" />
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`p-2 rounded ${
          editor.isActive("heading", { level: 1 }) ? "bg-gray-200" : ""
        }`}
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`p-2 rounded ${
          editor.isActive("heading", { level: 2 }) ? "bg-gray-200" : ""
        }`}
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-2 rounded ${
          editor.isActive("bulletList") ? "bg-gray-200" : ""
        }`}
      >
        Bullet List
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-2 rounded ${
          editor.isActive("orderedList") ? "bg-gray-200" : ""
        }`}
      >
        Numbered List
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`p-2 rounded ${
          editor.isActive("blockquote") ? "bg-gray-200" : ""
        }`}
      >
        Quote
      </button>
    </div>
  );
};

export default FixedMenu;
