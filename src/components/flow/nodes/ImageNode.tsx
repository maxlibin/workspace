"use client";

import { Handle, Position, NodeProps } from "@xyflow/react";
import { useState, useEffect } from "react";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import { NodeMenu } from "./NodeMenu";
import { useFlowStore } from "@/store/flow";

export function ImageNode({ data, id }: NodeProps) {
  const updateNode = useFlowStore((state) => state.updateNode);
  const propagateDataToTargets = useFlowStore(
    (state) => state.propagateDataToTargets
  );
  const [imageUrl, setImageUrl] = useState<string>(
    (data?.imageUrl as string) || ""
  );

  // Sync local state with store data when it changes externally
  useEffect(() => {
    if (data?.imageUrl !== imageUrl) {
      setImageUrl((data?.imageUrl as string) || "");
    }
  }, [data?.imageUrl, imageUrl]);

  return (
    <div className="border bg-white border-gray-500/20 w-64 rounded-md relative">
      <NodeMenu nodeId={id} />
      <Handle
        type="target"
        position={Position.Top}
        className="!bg-teal-500 w-5 h-5"
      />
      <div className="flex items-center gap-2 p-2 border-b border-gray-200">
        <ImageIcon className="w-4 h-4 text-gray-500" />
        <span className="text-sm font-medium text-gray-700">Image Node</span>
      </div>
      <div className="p-4">
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => {
            const newUrl = e.target.value;
            setImageUrl(newUrl);

            updateNode(id, {
              data: {
                ...data,
                imageUrl: newUrl,
              },
            });

            setTimeout(() => propagateDataToTargets(id), 0);
          }}
          className="w-full p-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter image URL..."
        />
        {imageUrl && (
          <div className="relative w-full pt-[56.25%]">
            <img
              src={imageUrl}
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
