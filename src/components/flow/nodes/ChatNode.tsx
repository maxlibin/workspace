"use client";

import { Handle, Position, NodeProps } from "@xyflow/react";
import { MessageSquare } from "lucide-react";
import { NodeMenu } from "./NodeMenu";

import { CopilotKit } from "@copilotkit/react-core";
import { CopilotChat } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import { useCopilotReadable } from "@copilotkit/react-core";

interface ChatData {
  [key: string]: unknown;
}

const Chat = ({ data, nodeId }: { data: ChatData; nodeId: string }) => {
  useCopilotReadable(
    {
      description: "Data of the connected nodes",
      value: data,
    },
    [data]
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
