"use client";

import { Handle, Position, NodeProps } from "@xyflow/react";
import { FileText } from "lucide-react";
import { NodeMenu } from "./NodeMenu";

export function TextNode({ data, id }: NodeProps) {
  return (
    <div className="border bg-white border-gray-500/20 w-64 rounded-md relative">
      <NodeMenu nodeId={id} />
      <Handle
        type="target"
        position={Position.Top}
        className="!bg-teal-500 w-3 h-3"
      />
      <div className="flex items-center gap-2 p-2 border-b border-gray-200">
        <FileText className="w-4 h-4 text-gray-500" />
        <span className="text-sm font-medium text-gray-700">Text Node</span>
      </div>
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
