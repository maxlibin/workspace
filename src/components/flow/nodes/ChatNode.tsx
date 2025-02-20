"use client";

import { Handle, Position, NodeProps } from "@xyflow/react";

import { CopilotKit } from "@copilotkit/react-core";
import { CopilotChat } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import { useCopilotReadable } from "@copilotkit/react-core";

const Chat = ({ data }: { data: any }) => {
  useCopilotReadable(
    {
      description: "Data of the connected nodes",
      value: data,
    },
    [data]
  );

  return (
    <div className="shadow-md border-2 bg-white border-gray-400 w-64 rounded-lg">
      <Handle
        type="target"
        position={Position.Top}
        className="!bg-teal-500 w-3 h-3"
      />
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

export function ChatNode({ data }: NodeProps) {
  return (
    <CopilotKit runtimeUrl="/api/copilotkit">
      <Chat data={data} />
    </CopilotKit>
  );
}
