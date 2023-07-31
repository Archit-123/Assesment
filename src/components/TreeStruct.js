import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  TextField,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import Tooltip from "./Tooltip";

export default function TreeStruct({ data }) {
  const [options, setOptions] = useState(data);

  const addParentOption = () => {
    setOptions((prevOptions) => [
      ...prevOptions,
      {
        id: `parent${prevOptions.length + 1}`,
        label: `Parent ${prevOptions.length + 1}`,
        children: [],
      },
    ]);
  };

  const removeParentOption = (parentId) => {
    setOptions((prevOptions) =>
      prevOptions.filter((option) => option.id !== parentId)
    );
  };

  const addChildOption = (parentId) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === parentId
          ? {
              ...option,
              children: option.children
                ? [
                    ...option.children,
                    {
                      id: `child${option.children.length + 1}`,
                      label: `Child ${option.children.length + 1}`,
                      children: [],
                    },
                  ]
                : [],
            }
          : option
      )
    );
  };

  const removeChildOption = (parentId, childId) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === parentId
          ? {
              ...option,
              children: option.children
                ? option.children.filter((child) => child.id !== childId)
                : [],
            }
          : option
      )
    );
  };

  const addGrandchildOption = (parentId, childId) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === parentId
          ? {
              ...option,
              children: option.children.map((child) =>
                child.id === childId
                  ? {
                      ...child,
                      children: [
                        ...(child.children || []),
                        {
                          id: `grandchild${child.children.length + 1}`,
                          label: `Grandchild ${child.children.length + 1}`,
                          children: [],
                        },
                      ],
                    }
                  : child
              ),
            }
          : option
      )
    );
  };

  const removeGrandchildOption = (parentId, childId, grandchildId) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === parentId
          ? {
              ...option,
              children: option.children.map((child) =>
                child.id === childId
                  ? {
                      ...child,
                      children: child.children
                        ? child.children.filter(
                            (grandchild) => grandchild.id !== grandchildId
                          )
                        : [],
                    }
                  : child
              ),
            }
          : option
      )
    );
  };

  const addSubGrandchildOption = (parentId, childId, grandchildId) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === parentId
          ? {
              ...option,
              children: option.children.map((child) =>
                child.id === childId
                  ? {
                      ...child,
                      children: child.children.map((grandchild) =>
                        grandchild.id === grandchildId
                          ? {
                              ...grandchild,
                              children: [
                                ...(grandchild.children || []),
                                {
                                  id: `subgrandchild${
                                    (grandchild.children?.length || 0) + 1
                                  }`,
                                  label: `Sub-Grandchild ${
                                    (grandchild.children?.length || 0) + 1
                                  }`,
                                  children: [],
                                },
                              ],
                            }
                          : grandchild
                      ),
                    }
                  : child
              ),
            }
          : option
      )
    );
  };

  const removeSubGrandchildOption = (
    parentId,
    childId,
    grandchildId,
    subGrandchildId
  ) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === parentId
          ? {
              ...option,
              children: option.children.map((child) =>
                child.id === childId
                  ? {
                      ...child,
                      children: child.children.map((grandchild) =>
                        grandchild.id === grandchildId
                          ? {
                              ...grandchild,
                              children: grandchild.children
                                ? grandchild.children.filter(
                                    (subGrandchild) =>
                                      subGrandchild.id !== subGrandchildId
                                  )
                                : [],
                            }
                          : grandchild
                      ),
                    }
                  : child
              ),
            }
          : option
      )
    );
  };

  return (
    <div>
      <FormControl fullWidth>
        {options.map((option) => (
          <div key={option.id}>
            <IconButton onClick={() => removeParentOption(option.id)}>
              <Tooltip text="Remove Item">
                <Remove />
              </Tooltip>
            </IconButton>

            <TextField
              value={option.label}
              onChange={(e) =>
                setOptions((prevOptions) =>
                  prevOptions.map((o) =>
                    o.id === option.id ? { ...o, label: e.target.value } : o
                  )
                )
              }
            />
            <IconButton onClick={() => addChildOption(option.id)}>
              <Tooltip text="Create Item">
                <Add />
              </Tooltip>
            </IconButton>
            {option.children &&
              option.children.map((child) => (
                <div key={child.id}>
                  <IconButton
                    onClick={() => removeChildOption(option.id, child.id)}
                  >
                    <Tooltip text="Remove Item">
                      <Remove />
                    </Tooltip>
                  </IconButton>
                  <TextField
                    value={child.label}
                    onChange={(e) =>
                      setOptions((prevOptions) =>
                        prevOptions.map((o) =>
                          o.id === option.id
                            ? {
                                ...o,
                                children: o.children.map((c) =>
                                  c.id === child.id
                                    ? { ...c, label: e.target.value }
                                    : c
                                ),
                              }
                            : o
                        )
                      )
                    }
                  />
                  <IconButton
                    onClick={() => addGrandchildOption(option.id, child.id)}
                  >
                    <Tooltip text="Create Sub-Item">
                      <Add />
                    </Tooltip>
                  </IconButton>
                  {child.children &&
                    child.children.map((grandchild) => (
                      <div key={grandchild.id}>
                        <IconButton
                          onClick={() =>
                            removeGrandchildOption(
                              option.id,
                              child.id,
                              grandchild.id
                            )
                          }
                        >
                          <Tooltip text="Remove Item">
                            <Remove />
                          </Tooltip>
                        </IconButton>
                        <TextField
                          value={grandchild.label}
                          onChange={(e) =>
                            setOptions((prevOptions) =>
                              prevOptions.map((o) =>
                                o.id === option.id
                                  ? {
                                      ...o,
                                      children: o.children.map((c) =>
                                        c.id === child.id
                                          ? {
                                              ...c,
                                              children: c.children.map((gc) =>
                                                gc.id === grandchild.id
                                                  ? {
                                                      ...gc,
                                                      label: e.target.value,
                                                    }
                                                  : gc
                                              ),
                                            }
                                          : c
                                      ),
                                    }
                                  : o
                              )
                            )
                          }
                        />
                        <IconButton
                          onClick={() =>
                            addSubGrandchildOption(
                              option.id,
                              child.id,
                              grandchild.id
                            )
                          }
                        >
                          <Tooltip text="Create Sub-Item">
                            <Add />
                          </Tooltip>
                        </IconButton>
                        {grandchild.children &&
                          grandchild.children.map((subGrandchild) => (
                            <div key={subGrandchild.id}>
                              <IconButton
                                onClick={() =>
                                  removeSubGrandchildOption(
                                    option.id,
                                    child.id,
                                    grandchild.id,
                                    subGrandchild.id
                                  )
                                }
                              >
                                <Tooltip text="Remove Item">
                                  <Remove />
                                </Tooltip>
                              </IconButton>
                              <TextField
                                value={subGrandchild.label}
                                onChange={(e) =>
                                  setOptions((prevOptions) =>
                                    prevOptions.map((o) =>
                                      o.id === option.id
                                        ? {
                                            ...o,
                                            children: o.children.map((c) =>
                                              c.id === child.id
                                                ? {
                                                    ...c,
                                                    children: c.children.map(
                                                      (gc) =>
                                                        gc.id === grandchild.id
                                                          ? {
                                                              ...gc,
                                                              children:
                                                                gc.children.map(
                                                                  (sgc) =>
                                                                    sgc.id ===
                                                                    subGrandchild.id
                                                                      ? {
                                                                          ...sgc,
                                                                          label:
                                                                            e
                                                                              .target
                                                                              .value,
                                                                        }
                                                                      : sgc
                                                                ),
                                                            }
                                                          : gc
                                                    ),
                                                  }
                                                : c
                                            ),
                                          }
                                        : o
                                    )
                                  )
                                }
                              />
                            </div>
                          ))}
                      </div>
                    ))}
                </div>
              ))}
          </div>
        ))}
        <IconButton onClick={addParentOption}>
          <Add />
        </IconButton>
      </FormControl>
    </div>
  );
}
