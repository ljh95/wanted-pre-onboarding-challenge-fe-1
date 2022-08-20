import instance from '@/api/axios';
import { useEffect, useState } from 'react';
import { useError } from './useError';
import { TodoForm } from './useTodo';

export const useTodoApi = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const { noUserError } = useError();

  const getTodoList = async () => {
    try {
      const res = await instance.get('/todos');

      setTodoList(res.data);
    } catch (error) {
      noUserError(error);
    }
  };

  const addTodo = async (todoForm: TodoForm, initForm: () => void) => {
    if (isInvalidTodoForm(todoForm)) {
      alert('todo must required');
      return;
    }

    try {
      const { title, content } = todoForm;

      await instance.post('/todos', {
        title,
        content
      });

      initForm();
      refetch();
    } catch (error) {
      noUserError(error);
    }
  };

  const updateTodo = async (todoId: string, title: string, content: string) => {
    if (isInvalidTodoForm({ title, content })) {
      alert('todo must required');
      return;
    }

    try {
      await instance.put(`todos/${todoId}`, {
        title,
        content
      });

      refetch();
    } catch (error) {
      noUserError(error);
    }
  };

  const deleteTodo = async (todoId: string) => {
    try {
      await instance.delete(`/todos/${todoId}`);

      refetch();
    } catch (error) {
      noUserError(error);
    }
  };

  useEffect(() => {
    getTodoList();
  }, []);

  const refetch = () => {
    getTodoList();
  };

  return { todoList, refetch, addTodo, updateTodo, deleteTodo };
};

export type Todo = {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

type GetTodoListResponse = {
  data: Todo[];
  message: string;
  details: string;
};
function isInvalidTodoForm(todoForm: TodoForm) {
  return todoForm.title.trim() === '' || todoForm.content.trim() === '';
}
