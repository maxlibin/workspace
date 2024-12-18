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
    <div className="flex flex-col gap-2 bg-white p-2 rounded-md border border-gray-200">
      <button onClick={() => createNode("textNode")}>
        <div className="flex items-center gap-2">
          <span className="text-lg">📝</span>
        </div>
      </button>
      <button onClick={() => createNode("imageNode")}>
        <div className="flex items-center gap-2">
          <span className="text-lg">🖼️</span>
        </div>
      </button>
      <button onClick={() => createNode("inputNode")}>
        <div className="flex items-center gap-2">
          <span className="text-lg">📥</span>
        </div>
      </button>
    </div>
  );
}
