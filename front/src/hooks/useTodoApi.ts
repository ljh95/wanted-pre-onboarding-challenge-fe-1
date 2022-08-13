import instance from '@/api/axios';
import { useEffect, useState } from 'react';
import { TodoForm } from './useTodo';

export const useTodoApi = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const getTodoListApi = async (): Promise<GetTodoListResponse> => {
    return instance.get('/todos');
  };

  const getTodoList = async () => {
    try {
      const res = await getTodoListApi();

      if (!res.data) {
        return;
      }

      setTodoList(res.data);
    } catch (error: any) {
      alert(error.response.data.details);
    }
  };

  useEffect(() => {
    getTodoList();
  }, []);

  const refetch = () => {
    getTodoList();
  };

  const addTodo = async (todoForm: TodoForm, initForm: () => void) => {
    try {
      const { title, content } = todoForm;
      const res = await instance.post('/todos', {
        title,
        content
      });

      initForm();
      refetch();
    } catch (error: any) {
      console.log(error.response);
    }
  };

  const updateTodo = async (todoId: string, title: string, content: string) => {
    try {
      const res = await instance.put(`todos/${todoId}`, {
        title,
        content
      });

      refetch();
    } catch (error: any) {
      console.log(error.response);
    }
  };

  const deleteTodo = async (todoId: string) => {
    try {
      const res = await instance.delete(`/todos/${todoId}`);

      refetch();
    } catch (error: any) {
      console.log(error.response);
    }
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
