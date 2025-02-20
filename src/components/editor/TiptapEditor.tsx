"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEditorStore } from "@/store/editor";
import "./editor.scss";
import FixedMenu from "./FixedMenu";
import BubbleMenuComponent from "./BubbleMenuComponent";
import FloatingMenuComponent from "./FloatingMenuComponent";

export function TiptapEditor() {
  const { content, setContent } = useEditorStore();

  const editor = useEditor({
    extensions: [StarterKit],
    content:
      content ||
      `
      <p>Try to select <em>this text</em> to see what we call the bubble menu.</p>
      <p>Neat, isn't it? Add an empty paragraph to see the floating menu.</p>
    `,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="h-full w-full p-4">
      <FixedMenu editor={editor} />
      {editor && <BubbleMenuComponent editor={editor} />}
      {editor && <FloatingMenuComponent editor={editor} />}
      <EditorContent editor={editor} className="h-full" />
    </div>
  );
}
