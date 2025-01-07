"use client";

import { Handle, Position, NodeProps } from "@xyflow/react";

import { CopilotKit } from "@copilotkit/react-core";
import { CopilotChat } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";

export function CopilotChatNode({ data }: NodeProps) {
  return (
    <div className="shadow-md border-2 bg-white border-gray-400 w-64 rounded-lg">
      <Handle
        type="target"
        position={Position.Top}
        className="!bg-teal-500 w-3 h-3"
      />
      <div className="p-4">
        <CopilotKit runtimeUrl="/api/copilot">
          <CopilotChat
            labels={{
              title: "Your Assistant",
              initial: "Hi! 👋 How can I assist you today?",
            }}
          />
        </CopilotKit>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-teal-500 w-3 h-3"
      />
    </div>
  );
}
