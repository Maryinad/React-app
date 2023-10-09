import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import css from './TodoList.module.css';

const TodoListItem = ({ todo, deleteTodoItem }) => {
  return (
    <div key={todo.id} className={css.item}>
      <label className={css.itemlabel}>
        <input type="checkbox" name="hasTodo" />
        {todo.text}
      </label>
      <button onClick={() => deleteTodoItem(todo.id)} className={css.itembtn}>
        <AiOutlineDelete />
      </button>
    </div>
  );
};

export default TodoListItem;
