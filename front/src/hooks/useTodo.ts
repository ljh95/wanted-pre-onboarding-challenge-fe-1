import { useState } from 'react';

export const useTodoForm = () => {
  const [todoForm, setTodoForm] = useState<TodoForm>(initTodoForm);

  const setTitle = (title: string) => {
    setTodoForm((t) => ({ ...t, title }));
  };
  const setContent = (content: string) => {
    setTodoForm((t) => ({ ...t, content }));
  };

  return {
    todoForm,
    setTitle,
    setContent
  };
};

export const initTodoForm = {
  title: '',
  content: ''
};
export type TodoForm = {
  title: string;
  content: string;
};
