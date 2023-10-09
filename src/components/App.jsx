import React from 'react';

import TodoList from './TodoList/TodoList';
import { GlobalStyle } from 'utils/GlobalStyles';

export const App = () => {
  return (
    <div>
      <TodoList />
      <GlobalStyle />
    </div>
  );
};
