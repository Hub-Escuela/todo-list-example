import React from "react";

const ToDoList = (props) => {
    return (<ul>
        {props.list.map(value => <li>{value}</li>)}

    </ul>)
}

export { ToDoList }