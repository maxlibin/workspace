import { FC } from "react";
import { Editor, BubbleMenu } from "@tiptap/react";
import MenuItems from "./MenuItems";

export const BubbleMenuComponent: FC<{ editor: Editor }> = ({ editor }) => {
  return (
    <BubbleMenu
      editor={editor}
      tippyOptions={{ duration: 100 }}
      className="flex gap-2 p-2 border border-gray-200 rounded-md bg-white shadow-lg"
    >
      <MenuItems editor={editor} />
    </BubbleMenu>
  );
};

export default BubbleMenuComponent;
