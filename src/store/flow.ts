import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Node, Edge } from "@xyflow/react";

const initialNodes: Node[] = [
  {
    id: "1",
    type: "chatNode",
    position: { x: 250, y: 25 },
    data: {
      text: "",
    },
  },
];

const initialEdges: Edge[] = [{ id: "e1-2", source: "1", target: "2" }];

interface FlowState {
  nodes: Node[];
  edges: Edge[];
  initialized: boolean;
  setNodes: (nodes: Node[]) => void;
  setEdges: (edges: Edge[]) => void;
  addNode: (node: Node) => void;
  updateNode: (id: string, data: Partial<Node>) => void;
  removeNode: (id: string) => void;
  addEdge: (edge: Edge) => void;
  removeEdge: (id: string) => void;
  initializeStore: () => void;
  getNodeById: (id: string) => Node | undefined;
  getConnectedSourceNodes: (nodeId: string) => Node[];
  getConnectedTargetNodes: (nodeId: string) => Node[];
  propagateDataToTargets: (sourceId: string) => void;
}

export const useFlowStore = create<FlowState>()(
  persist(
    (set, get) => ({
      nodes: [],
      edges: [],
      initialized: false,
      setNodes: (nodes) => set({ nodes }),
      setEdges: (edges) => set({ edges }),
      addNode: (node) => set((state) => ({ nodes: [...state.nodes, node] })),
      updateNode: (id, data) =>
        set((state) => {
          const updatedNodes = state.nodes.map((node) =>
            node.id === id ? { ...node, ...data } : node
          );
          return { nodes: updatedNodes };
        }),
      removeNode: (id) =>
        set((state) => ({
          nodes: state.nodes.filter((node) => node.id !== id),
          edges: state.edges.filter(
            (edge) => edge.source !== id && edge.target !== id
          ),
        })),
      addEdge: (edge) => set((state) => ({ edges: [...state.edges, edge] })),
      removeEdge: (id) =>
        set((state) => ({
          edges: state.edges.filter((edge) => edge.id !== id),
        })),
      initializeStore: () =>
        set((state) => ({
          nodes: state.nodes.length ? state.nodes : initialNodes,
          edges: state.edges.length ? state.edges : initialEdges,
          initialized: true,
        })),
      getNodeById: (id) => {
        return get().nodes.find((node) => node.id === id);
      },
      getConnectedSourceNodes: (nodeId) => {
        const { nodes, edges } = get();
        // Find all edges where this node is the target
        const sourceEdges = edges.filter((edge) => edge.target === nodeId);
        // Get the source nodes
        return sourceEdges
          .map((edge) => nodes.find((node) => node.id === edge.source))
          .filter((node): node is Node => node !== undefined);
      },
      getConnectedTargetNodes: (nodeId) => {
        const { nodes, edges } = get();
        // Find all edges where this node is the source
        const targetEdges = edges.filter((edge) => edge.source === nodeId);
        // Get the target nodes
        return targetEdges
          .map((edge) => nodes.find((node) => node.id === edge.target))
          .filter((node): node is Node => node !== undefined);
      },
      propagateDataToTargets: (sourceId) => {
        const { getNodeById, getConnectedTargetNodes, updateNode } = get();
        const sourceNode = getNodeById(sourceId);
        if (!sourceNode) return;

        const targetNodes = getConnectedTargetNodes(sourceId);

        // Propagate data to all target nodes
        targetNodes.forEach((targetNode) => {
          // Update the target node with source node data
          updateNode(targetNode.id, {
            data: {
              ...targetNode.data,
              connectedData: sourceNode.data,
            },
          });
        });
      },
    }),
    {
      name: "flow-storage",
      skipHydration: true,
    }
  )
);
