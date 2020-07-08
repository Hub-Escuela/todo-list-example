import React from "react";

export const NewToDo = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" onChange={props.handleChange} />
      <button type="submit">hola</button>
    </form>
  );
};
