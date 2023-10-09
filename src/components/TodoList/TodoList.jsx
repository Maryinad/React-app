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
    if (todoData.trim() !== '') {
      const todoExist = todoList.some(todo => todo.text === todoData);
      if (!todoExist) {
        const newTodo = {
          id: nanoid(),
          text: todoData,
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
          <TodoListItem todo={todo} deleteTodoItem={deleteTodoItem} />
        ))}
        <p className={css.quantity}>You have {todoList.length}</p>
      </div>
    </div>
  );
};

export default TodoList;
