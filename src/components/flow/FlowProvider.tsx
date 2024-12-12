"use client";

import { ReactNode } from "react";
import { ReactFlowProvider } from "@xyflow/react";

interface FlowProviderProps {
  children: ReactNode;
}

export function FlowProvider({ children }: FlowProviderProps) {
  return <ReactFlowProvider>{children}</ReactFlowProvider>;
}
