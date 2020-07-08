import React from "react";

export const NewToDo = (props) => {
  return (
    <form>
      <input type="text" onChange={handleChange} />
      <button type="submit">hola</button>
    </form>
  );
};
