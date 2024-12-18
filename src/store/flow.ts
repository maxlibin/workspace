import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Node, Edge } from "@xyflow/react";

const initialNodes: Node[] = [
  {
    id: "1",
    type: "custom",
    data: {
      label: "Input Node",
      subtitle: "Start here",
    },
    position: { x: 250, y: 25 },
  },
  {
    id: "2",
    type: "custom",
    data: {
      label: "Process Node",
      subtitle: "Middle step",
    },
    position: { x: 100, y: 125 },
  },
  {
    id: "3",
    type: "custom",
    data: {
      label: "Output Node",
      subtitle: "End result",
    },
    position: { x: 250, y: 250 },
  },
];

const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
];

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
}

export const useFlowStore = create<FlowState>()(
  persist(
    (set) => ({
      nodes: [],
      edges: [],
      initialized: false,
      setNodes: (nodes) => set({ nodes }),
      setEdges: (edges) => set({ edges }),
      addNode: (node) => set((state) => ({ nodes: [...state.nodes, node] })),
      updateNode: (id, data) =>
        set((state) => ({
          nodes: state.nodes.map((node) =>
            node.id === id ? { ...node, ...data } : node
          ),
        })),
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
    }),
    {
      name: "flow-storage",
      skipHydration: true,
    }
  )
);
