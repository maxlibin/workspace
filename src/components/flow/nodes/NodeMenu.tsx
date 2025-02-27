"use client";

import { MoreHorizontal, Trash2 } from "lucide-react";
import { useCallback, useState } from "react";
import { useReactFlow } from "@xyflow/react";

interface NodeMenuProps {
  nodeId: string;
}

export function NodeMenu({ nodeId }: NodeMenuProps) {
  const { deleteElements } = useReactFlow();
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = useCallback(() => {
    deleteElements({ nodes: [{ id: nodeId }] });
    setIsOpen(false);
  }, [nodeId, deleteElements]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute top-2 right-2 z-10">
      <div className="relative inline-block text-left">
        <button
          type="button"
          className="flex items-center justify-center w-6 h-6 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={toggleDropdown}
        >
          <MoreHorizontal className="w-4 h-4" />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-1 w-36 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <button
                className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                onClick={handleDelete}
              >
                <Trash2 className="w-4 h-4 mr-2 text-red-500" />
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
