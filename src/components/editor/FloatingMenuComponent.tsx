import { FC } from "react";
import { Editor, FloatingMenu } from "@tiptap/react";

export const FloatingMenuComponent: FC<{ editor: Editor }> = ({ editor }) => {
  return (
    <FloatingMenu
      editor={editor}
      tippyOptions={{ duration: 100 }}
      className="flex gap-2 p-2 border border-gray-200 rounded-md bg-white shadow-lg"
    >
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className="p-2 rounded hover:bg-gray-200"
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className="p-2 rounded hover:bg-gray-200"
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className="p-2 rounded hover:bg-gray-200"
      >
        Bullet List
      </button>
    </FloatingMenu>
  );
};

export default FloatingMenuComponent;
