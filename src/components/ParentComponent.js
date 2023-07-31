// ParentComponent.js

import React from "react";
import TreeStruct from "./TreeStruct";

const ParentComponent = () => {
  const initialData = [
    {
      id: "parent1",
      label: "Parent 1",
      children: [
        {
          id: "child1",
          label: "Child 1",
          children: [
            { id: "grandchild1", label: "Grandchild 1" },
            { id: "grandchild2", label: "Grandchild 2" },
          ],
        },
        {
          id: "child2",
          label: "Child 2",
          children: [],
        },
      ],
    },
  ];

  return (
    <div>
      <TreeStruct data={initialData} />
    </div>
  );
};

export default ParentComponent;
