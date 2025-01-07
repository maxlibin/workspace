"use client";

import { useCallback } from "react";
import { useReactFlow, Node } from "@xyflow/react";
import { useFlowStore } from "@/store/flow";
import {
  Image as ImageIcon,
  Type as TypeIcon,
  Link as LinkIcon,
  Bot as BotIcon,
} from "lucide-react";

type NodeType = "textNode" | "imageNode" | "inputNode" | "copilotChatNode";

const items: { icon: React.ElementType; type: NodeType }[] = [
  {
    icon: TypeIcon,
    type: "textNode",
  },
  {
    icon: ImageIcon,
    type: "imageNode",
  },
  {
    icon: LinkIcon,
    type: "inputNode",
  },
  {
    icon: BotIcon,
    type: "copilotChatNode",
  },
];

export function Toolbar() {
  const reactFlowInstance = useReactFlow();
  const addNode = useFlowStore((state) => state.addNode);

  const createNode = useCallback(
    (type: NodeType) => {
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
      {items.map((item) => (
        <button
          key={item.type}
          onClick={() => createNode(item.type)}
          className="p-2 rounded-md hover:bg-gray-100"
        >
          <item.icon className="w-4 h-4" />
        </button>
      ))}
    </div>
  );
}
