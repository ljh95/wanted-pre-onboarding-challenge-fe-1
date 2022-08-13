import { useTodoForm } from '@/hooks/useTodo';
import { Todo } from '@/hooks/useTodoApi';
import { useState } from 'react';
import { TodoItem } from './TodoItem';
import { UpdateTodoItem } from './UpdateTodoItem';

type Props = {
  todoList: Todo[];
  updateTodo: (todoId: string, title: string, content: string) => Promise<void>;
  deleteTodo: (todoId: string) => Promise<void>;
};

export const TodoList = ({ todoList, updateTodo, deleteTodo }: Props) => {
  const [mode, setMode] = useState<ModeType>('create');
  const {
    todoForm: updateTodoForm,
    setTitle: setUpdateTitle,
    setContent: setUpdateContent
  } = useTodoForm();

  const [currentTodoId, setCurrentTodoId] = useState('');

  const makeTodoItem = (todoList: Todo[]) => {
    return todoList.map((todo) => {
      if (mode === 'create' || todo.id !== currentTodoId)
        return (
          <TodoItem
            todo={todo}
            setCurrentTodoId={setCurrentTodoId}
            setMode={setMode}
            setUpdateTitle={setUpdateTitle}
            setUpdateContent={setUpdateContent}
            deleteTodo={deleteTodo}
          />
        );
      return (
        <UpdateTodoItem
          todo={todo}
          updateTodoForm={updateTodoForm}
          setUpdateTitle={setUpdateTitle}
          setUpdateContent={setUpdateContent}
          setMode={setMode}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          currentTodoId={currentTodoId}
        />
      );
    });
  };

  return <ul>{makeTodoItem(todoList)}</ul>;
};

export type ModeType = 'create' | 'update';
