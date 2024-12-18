"use client";

import { useCallback } from "react";
import { useReactFlow, Node } from "@xyflow/react";
import { useFlowStore } from "@/store/flow";

export function Toolbar() {
  const reactFlowInstance = useReactFlow();
  const addNode = useFlowStore((state) => state.addNode);

  const createNode = useCallback(
    (type: "textNode" | "imageNode" | "inputNode") => {
      const position = reactFlowInstance.screenToFlowPosition({
        x: window.innerWidth / 2,
        y: window.innerHeight / 3,
      });

      const newNode: Node = {
        id: `node-${Date.now()}`,
        type,
        position,
        data: {
          label: type === "inputNode" ? "Input Field" : "",
          placeholder: type === "inputNode" ? "Enter value..." : "",
          text: type === "textNode" ? "Enter your text here..." : "",
          imageUrl: type === "imageNode" ? "" : "",
        },
      };

      addNode(newNode);
    },
    [reactFlowInstance, addNode]
  );

  return (
    <div className="flex gap-2">
      <button
        onClick={() => createNode("textNode")}
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        <div className="flex items-center gap-2">
          <span className="text-lg">📝</span>
          Add Text
        </div>
      </button>
      <button
        onClick={() => createNode("imageNode")}
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        <div className="flex items-center gap-2">
          <span className="text-lg">🖼️</span>
          Add Image
        </div>
      </button>
      <button
        onClick={() => createNode("inputNode")}
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        <div className="flex items-center gap-2">
          <span className="text-lg">📥</span>
          Add Input
        </div>
      </button>
    </div>
  );
}
