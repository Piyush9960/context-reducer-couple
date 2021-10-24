import { useContext, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { dispatchContext, stateContext } from "../context/contextProvider";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useContext(dispatchContext);
  const state = useContext(stateContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setText("");
    // onAddTask(text);
    dispatch({
      type: "added",
      id: state.nextId,
      text,
    });
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <TextField
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit">Add</Button>
    </form>
  );
}
