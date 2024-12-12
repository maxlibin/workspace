"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export function TiptapEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Start writing your content here...</p>",
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none",
      },
    },
  });

  return (
    <div className="h-full w-full p-4">
      <EditorContent editor={editor} className="h-full" />
    </div>
  );
}
