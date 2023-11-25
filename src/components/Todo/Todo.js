import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const StyledTodo = styled.div`
  justify-content: space-between;
  align-items: center;
  background: #75637b;
  color: #ffffff;
  padding: 0.75rem 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  display: flex;

  .task {
    &.completed {
      color: #b1b1b1;
      text-decoration: line-through;
      cursor: pointer;
    }

    &.incompleted {
      color: #ffffff;
      cursor: pointer;
    }
  }

  .fa-trash {
    margin-left: 0.75rem;
  }

  .edit-icon,
  .delete-icon {
    cursor: pointer;
  }
`;

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  const handleEditClick = () => {
    editTodo(task.id);
  };

  const handleDeleteClick = () => {
    deleteTodo(task.id);
  };

  return (
    <StyledTodo>
      <p
        className={`task ${task.completed ? "completed" : "incompleted"}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          className="edit-icon"
          icon={faPenToSquare}
          onClick={handleEditClick}
        />
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          onClick={handleDeleteClick}
        />
      </div>
    </StyledTodo>
  );
};
