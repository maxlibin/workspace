"use client";

import { Handle, Position, NodeProps } from "@xyflow/react";
import { Link } from "lucide-react";
import { NodeMenu } from "./NodeMenu";
import { useFlowStore } from "@/store/flow";
import { useEffect, useState } from "react";

// Define a type for node data
interface NodeData {
  value?: string;
  text?: string;
  label?: string;
  inputType?: string;
  placeholder?: string;
  [key: string]: unknown;
}

export function LinkNode({ data, id }: NodeProps) {
  const updateNode = useFlowStore((state) => state.updateNode);
  const getConnectedSourceNodes = useFlowStore(
    (state) => state.getConnectedSourceNodes
  );
  const propagateDataToTargets = useFlowStore(
    (state) => state.propagateDataToTargets
  );
  const [sourceData, setSourceData] = useState<NodeData | null>(null);

  // Effect to get data from connected source nodes
  useEffect(() => {
    const sourceNodes = getConnectedSourceNodes(id);
    if (sourceNodes.length > 0) {
      // Get data from the first connected source node
      const connectedData = sourceNodes[0].data as NodeData;
      setSourceData(connectedData);

      // If the source has a value and this node doesn't, use the source value
      if (connectedData.value && !data.value) {
        updateNode(id, {
          data: {
            ...data,
            value: connectedData.value,
          },
        });
      }
    }
  }, [id, data, getConnectedSourceNodes, updateNode]);

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
          {(data.label as string) || "Input"}
        </label>
        {sourceData && (
          <div className="mb-2 text-xs text-gray-500">
            Connected to source with value:{" "}
            {sourceData.value || sourceData.text || "N/A"}
          </div>
        )}
        <input
          type={(data.inputType as string) || "text"}
          value={(data.value as string) || ""}
          placeholder={(data.placeholder as string) || "Enter value..."}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(evt) => {
            const newValue = evt.target.value;

            // Update this node's data in the store
            updateNode(id, {
              data: {
                ...data,
                value: newValue,
              },
            });

            // Propagate the data to connected target nodes
            setTimeout(() => propagateDataToTargets(id), 0);
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
