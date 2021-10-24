import React, { useContext } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./taskStyle.css";
import { Task } from "./Task";
import { dispatchContext, stateContext } from "../context/contextProvider";

export default function TaskList() {
  const classes = useStyles();
  const state = useContext(stateContext);

  const dispatch = useContext(dispatchContext);

  const onDeleteTask = (id) => {
    dispatch({
      type: "deleted",
      id,
    });
  };


  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Sr. No</TableCell>
            <TableCell>Task Name</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.tasks && state.tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={() => onDeleteTask(task.id)}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
