import { useState } from "react";
import { Button, TextField } from "@material-ui/core";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setText("");
    onAddTask(text);
  }  
  return (
    <form
      onSubmit={onSubmitHandler}
    >
      <TextField
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit">Add</Button>
    </form>
  );
}
