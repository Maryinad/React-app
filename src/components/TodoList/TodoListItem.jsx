import React from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import css from './TodoList.module.css';

const TodoListItem = ({ todo, deleteTodoItem, onChange, changeTodoItem }) => {
  return (
    <div key={todo.id} className={css.item}>
      <label className={css.itemlabel}>
        <input
          type="checkbox"
          name="hasTodo"
          checked={todo.checked}
          onChange={e => {
            onChange(todo.id, e.target.checked);
          }}
        />

        {todo.text}
      </label>
      <div>
        <button className={css.itembtn} ooClick={() => changeTodoItem(todo.id)}>
          <AiOutlineEdit />
        </button>
        <button onClick={() => deleteTodoItem(todo.id)} className={css.itembtn}>
          <AiOutlineDelete className={css.icon_delete} />
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
