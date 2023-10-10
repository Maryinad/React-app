import React from 'react';

import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { useState } from 'react';

import css from './TodoList.module.css';

import TodoListItem from './TodoListItem';

const TodoList = () => {
  const [todoData, setTodoData] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addNewTodoData = () => {
    const trimmedTodoData = todoData.trim();
    if (trimmedTodoData !== '') {
      const todoExist = todoList.some(
        todo => todo.text.trim() === trimmedTodoData
      );
      if (!todoExist) {
        const newTodo = {
          id: nanoid(),
          text: todoData,
          checked: false,
        };
        setTodoList([...todoList, newTodo]);
        setTodoData('');
      } else {
        Notify.warning('This todo already exist');
      }
    }
  };

  const deleteTodoItem = todoId => {
    setTodoList(todoList.filter(todo => todo.id !== todoId));
  };

  // const changeTodoItem = todoId => {};

  const handleChangeChecked = (todoId, checked) => {
    const updatedTodoList = todoList.map(todo => {
      if (todo.id === todoId) {
        return {
          ...todo,
          checked: checked,
        };
      }
      return todo;
    });

    setTodoList(updatedTodoList);
  };

  const uncheckedCount = todoList.filter(todo => !todo.checked).length;

  return (
    <div className={css.container}>
      <h1 className={css.title}>Todo</h1>
      <div className={css.inputfield}>
        <input
          className={css.input}
          type="text"
          placeholder="Add your todo..."
          value={todoData}
          onChange={e => {
            setTodoData(e.target.value);
          }}
        ></input>
        <button className={css.btnadd} onClick={addNewTodoData}>
          +
        </button>
      </div>
      <div>
        {todoList.map(todo => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            deleteTodoItem={deleteTodoItem}
            onChange={handleChangeChecked}
          />
        ))}
        <p className={css.quantity}>You have {todoList.length} todos</p>
        <p> You have {uncheckedCount} uncomplited todos</p>
      </div>
    </div>
  );
};

export default TodoList;
