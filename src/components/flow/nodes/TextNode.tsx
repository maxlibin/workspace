"use client";

import { Handle, Position, NodeProps } from "@xyflow/react";

export function TextNode({ data }: NodeProps) {
  return (
    <div className="shadow-md border-2 bg-white border-gray-400 w-64 rounded-lg">
      <Handle
        type="target"
        position={Position.Top}
        className="!bg-teal-500 w-3 h-3"
      />
      <div className="p-4">
        <textarea
          defaultValue={data.text || "Enter your text here..."}
          className="w-full h-24 p-2 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your text here..."
          onChange={(evt) => {
            data.text = evt.target.value;
          }}
        />
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-teal-500 w-3 h-3"
      />
    </div>
  );
}
