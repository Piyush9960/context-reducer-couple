import { useState } from "react";
import { Grid } from "@material-ui/core";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { useStyles } from "./components/taskStyle.css";
import { initialState } from "./store/initialState";
import { StateProvider } from "./context/contextProvider";

export default function App() {
  const classes = useStyles();
  const [nextId, setNextId] = useState(4);
  const [tasks, setTasks] = useState(initialState);

  // function handleAddTask(text) {
  //   const tempTask = [
  //     ...tasks,
  //     {
  //       id: nextId,
  //       text,
  //     },
  //   ];
  //   setNextId((prevId) => prevId + 1);
  //   setTasks(tempTask);
  // }

  // function handleDeleteTask(taskId) {
  //   const tempTask = tasks.filter((t) => t.id !== taskId);
  //   setTasks(tempTask);
  // }

  return (
    <StateProvider>
      <Grid className={classes.mainGrid}>
        <AddTask />
        <hr />
        <TaskList />
      </Grid>
    </StateProvider>
  );
}
