import { useState } from "react";
import { Grid } from "@material-ui/core";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { useStyles } from "./components/taskStyle.css";
import { initialState } from "./store/initialState";

export default function App() {
  const classes = useStyles();
  const [nextId, setNextId] = useState(4);

  const [tasks, setTasks] = useState(initialState.tasks);

  function handleAddTask(text) {
    const tempTask = [
      ...tasks,
      {
        id: nextId,
        text,
      },
    ];
    setNextId((prevId) => prevId + 1);
    setTasks(tempTask);
  }

  function handleDeleteTask(taskId) {
    const tempTask = tasks.filter((t) => t.id !== taskId);
    setTasks(tempTask);
  }

  return (
    <Grid className={classes.mainGrid}>
      <AddTask onAddTask={handleAddTask} />
      <hr />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </Grid>
  );
}
