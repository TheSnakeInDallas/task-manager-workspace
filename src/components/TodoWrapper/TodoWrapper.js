import React, { useState } from "react";
import { Todo } from "../Todo/Todo";
import { TodoForm } from "../TodoForm/TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "../EditTodoForm/EditTodoForm";
import styled from "styled-components";

const StyledTodoWrapper = styled.div`
  max-width: 500px;
  width: 100%;
  background: #2c2f36;
  margin-top: 5rem;
  padding: 2rem;
  border-radius: 5px;
`;

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodoId, setEditingTodoId] = useState(null);

  const addTodo = (task) => {
    if (task.trim() !== "") {
      const newTodo = {
        id: uuidv4(),
        task: task,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (task, id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          task: task,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEditingTodoId(null);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleEditTodo = (id) => {
    setEditingTodoId(id);
  };

  return (
    <StyledTodoWrapper>
      <h2>Your Tasks</h2>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <div key={todo.id}>
          {editingTodoId === todo.id ? (
            <EditTodoForm editTodo={editTodo} task={todo} />
          ) : (
            <Todo
              task={todo}
              deleteTodo={deleteTodo}
              editTodo={handleEditTodo}
              toggleComplete={toggleComplete}
            />
          )}
        </div>
      ))}
    </StyledTodoWrapper>
  );
};
