"use client";

import { Handle, Position, NodeProps } from "@xyflow/react";

export function LinkNode({ data }: NodeProps) {
  return (
    <div className="shadow-md border-2 bg-white border-gray-400 w-64 rounded-lg">
      <Handle
        type="target"
        position={Position.Top}
        className="!bg-teal-500 w-3 h-3"
      />
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
