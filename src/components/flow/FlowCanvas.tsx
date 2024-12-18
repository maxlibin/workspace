"use client";

import { useCallback, useEffect, useState } from "react";
import {
  ReactFlow,
  Controls,
  Background,
  MiniMap,
  Connection,
  Edge,
  Node,
  NodeChange,
  EdgeChange,
  applyNodeChanges,
  applyEdgeChanges,
  Panel,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useFlowStore } from "@/store/flow";
import { TextNode } from "./nodes/TextNode";
import { ImageNode } from "./nodes/ImageNode";
import { InputNode } from "./nodes/InputNode";
import { Toolbar } from "./Toolbar";

const nodeTypes = {
  textNode: TextNode,
  imageNode: ImageNode,
  inputNode: InputNode,
};

const proOptions = { hideAttribution: true };

export function FlowCanvas() {
  const [initialized, setInitialized] = useState(false);
  const {
    nodes,
    edges,
    setNodes,
    setEdges,
    addEdge: storeAddEdge,
    removeNode,
    removeEdge,
    initializeStore,
  } = useFlowStore();

  useEffect(() => {
    if (!initialized) {
      initializeStore();
      setInitialized(true);
    }
  }, [initialized, initializeStore]);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      setNodes(applyNodeChanges(changes, nodes));
    },
    [nodes, setNodes]
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => {
      setEdges(applyEdgeChanges(changes, edges));
    },
    [edges, setEdges]
  );

  const onConnect = useCallback(
    (connection: Connection) => {
      const newEdge = {
        id: `e${connection.source}-${connection.target}`,
        ...connection,
      } as Edge;
      storeAddEdge(newEdge);
    },
    [storeAddEdge]
  );

  const onNodeDelete = useCallback(
    (nodes: Node[]) => {
      nodes.forEach((node) => removeNode(node.id));
    },
    [removeNode]
  );

  const onEdgeDelete = useCallback(
    (edges: Edge[]) => {
      edges.forEach((edge) => removeEdge(edge.id));
    },
    [removeEdge]
  );

  if (!initialized) {
    return null;
  }

  return (
    <div className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodesDelete={onNodeDelete}
        onEdgesDelete={onEdgeDelete}
        nodeTypes={nodeTypes}
        proOptions={proOptions}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
        <Panel
          position="bottom-left"
          className="bg-white/50 p-2 rounded-lg top-[50%]"
        >
          <Toolbar />
        </Panel>
      </ReactFlow>
    </div>
  );
}
