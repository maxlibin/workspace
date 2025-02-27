"use client";

import { Handle, Position, NodeProps } from "@xyflow/react";
import { Link } from "lucide-react";
import { NodeMenu } from "./NodeMenu";

export function LinkNode({ data, id }: NodeProps) {
  return (
    <div className="border bg-white border-gray-500/20 w-64 rounded-md relative">
      <NodeMenu nodeId={id} />
      <Handle
        type="target"
        position={Position.Top}
        className="!bg-teal-500 w-3 h-3"
      />
      <div className="flex items-center gap-2 p-2 border-b border-gray-200">
        <Link className="w-4 h-4 text-gray-500" />
        <span className="text-sm font-medium text-gray-700">Link Node</span>
      </div>
      <div className="p-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {data.label || "Input"}
        </label>
        <input
          type={data.inputType || "text"}
          defaultValue={data.value || ""}
          placeholder={data.placeholder || "Enter value..."}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(evt) => {
            data.value = evt.target.value;
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
