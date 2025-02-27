"use client";

import { Handle, Position, NodeProps } from "@xyflow/react";
import { MessageSquare } from "lucide-react";
import { NodeMenu } from "./NodeMenu";
import { useFlowStore } from "@/store/flow";
import { useEffect, useState } from "react";

import { CopilotKit } from "@copilotkit/react-core";
import { CopilotChat } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import { useCopilotReadable } from "@copilotkit/react-core";

interface ChatData {
  [key: string]: unknown;
}

interface ConnectedNodeData {
  id: string;
  type: string;
  data: ChatData;
}

interface ConnectedData {
  sourceNodes: ConnectedNodeData[];
  nodeData?: ChatData;
}

const Chat = ({ data, nodeId }: { data: ChatData; nodeId: string }) => {
  const getConnectedSourceNodes = useFlowStore(
    (state) => state.getConnectedSourceNodes
  );
  const [connectedData, setConnectedData] = useState<ConnectedData>({
    sourceNodes: [],
    nodeData: data,
  });

  // Effect to get data from connected source nodes
  useEffect(() => {
    const sourceNodes = getConnectedSourceNodes(nodeId);
    if (sourceNodes.length > 0) {
      // Format the connected nodes data
      const formattedNodes = sourceNodes.map((node) => ({
        id: node.id,
        type: node.type || "unknown",
        data: node.data as ChatData,
      }));

      setConnectedData({
        sourceNodes: formattedNodes,
        nodeData: data,
      });
    } else {
      setConnectedData({
        sourceNodes: [],
        nodeData: data,
      });
    }
  }, [nodeId, data, getConnectedSourceNodes]);

  // Make the connected data available to the Copilot
  useCopilotReadable(
    {
      description: "Data of the connected nodes",
      value: connectedData,
    },
    [connectedData]
  );

  return (
    <div className="border bg-white border-gray-500/20 w-64 rounded-md relative">
      <NodeMenu nodeId={nodeId} />
      <Handle
        type="target"
        position={Position.Top}
        className="!bg-teal-500 w-3 h-3"
      />
      <div className="flex items-center gap-2 p-2 border-b border-gray-200">
        <MessageSquare className="w-4 h-4 text-gray-500" />
        <span className="text-sm font-medium text-gray-700">Chat Node</span>
      </div>
      <div className="p-4">
        {connectedData.sourceNodes.length > 0 && (
          <div className="mb-2 text-xs text-gray-500">
            Connected to {connectedData.sourceNodes.length} source node(s)
          </div>
        )}
        <CopilotChat
          className="h-full"
          labels={{
            title: "Your Assistant",
            initial: "Hi! 👋 How can I assist you today?",
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
};

export function ChatNode({ data, id }: NodeProps) {
  return (
    <CopilotKit runtimeUrl="/api/copilotkit" showDevConsole={false}>
      <Chat data={data} nodeId={id} />
    </CopilotKit>
  );
}
