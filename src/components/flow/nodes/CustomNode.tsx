"use client";

import { Handle, Position, NodeProps } from "@xyflow/react";

const getNodeStyle = (type: string) => {
  switch (type) {
    case "Decision":
      return "bg-yellow-50 border-yellow-500 rotate-45";
    case "Process":
      return "bg-blue-50 border-blue-500";
    default: // Task
      return "bg-white border-gray-400";
  }
};

const getNodeShape = (type: string) => {
  switch (type) {
    case "Decision":
      return "w-24 h-24 -rotate-45 transform"; // Diamond shape
    case "Process":
      return "w-64 h-20"; // Rectangle
    default: // Task
      return "w-48 h-auto rounded-lg"; // Rounded rectangle
  }
};

export function CustomNode({ data, type: nodeType }: NodeProps) {
  const style = getNodeStyle(data.type || "Task");
  const shape = getNodeShape(data.type || "Task");

  return (
    <div className={`shadow-md border-2 ${style} ${shape}`}>
      <Handle
        type="target"
        position={Position.Top}
        className="!bg-teal-500 w-3 h-3"
      />
      <div className="p-4">
        <div className="text-lg font-bold">{data.label}</div>
        <div className="text-gray-500 text-sm">{data.subtitle}</div>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-teal-500 w-3 h-3"
      />
    </div>
  );
}
