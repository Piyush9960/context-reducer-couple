import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Button } from "@material-ui/core";

export const Task = ({ task, onDelete }) => (
  <TableRow>
    <TableCell>
      {task.id}
    </TableCell>
    <TableCell>{task.text}</TableCell>
    <TableCell>
      <Button variant="contained" onClick={() => onDelete(task.id)}>
        Delete
      </Button>
    </TableCell>
  </TableRow>
);
