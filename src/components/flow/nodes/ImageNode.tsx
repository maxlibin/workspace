"use client";

import { Handle, Position, NodeProps } from "@xyflow/react";
import { useState } from "react";

export function ImageNode({ data }: NodeProps) {
  const [imageUrl, setImageUrl] = useState(data.imageUrl || "");

  return (
    <div className="shadow-md border-2 bg-white border-gray-400 w-64 rounded-lg">
      <Handle
        type="target"
        position={Position.Top}
        className="!bg-teal-500 w-3 h-3"
      />
      <div className="p-4">
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => {
            setImageUrl(e.target.value);
            data.imageUrl = e.target.value;
          }}
          className="w-full p-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter image URL..."
        />
        {imageUrl && (
          <div className="relative w-full pt-[56.25%]">
            <img
              src={imageUrl}
              alt="Node content"
              className="absolute top-0 left-0 w-full h-full object-cover rounded"
            />
          </div>
        )}
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-teal-500 w-3 h-3"
      />
    </div>
  );
}
