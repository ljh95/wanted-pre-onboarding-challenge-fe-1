import { Todo } from '@/hooks/useTodoApi';
import React from 'react';
import { ModeType } from './TodoList';

type Props = {
  todo: Todo;
  setCurrentTodoId: React.Dispatch<React.SetStateAction<string>>;
  setMode: React.Dispatch<React.SetStateAction<ModeType>>;
  setUpdateTitle: (title: string) => void;
  setUpdateContent: (content: string) => void;
  deleteTodo: (todoId: string) => Promise<void>;
};

export const TodoItem = ({
  todo,
  setCurrentTodoId,
  setMode,
  setUpdateTitle,
  setUpdateContent,
  deleteTodo
}: Props) => {
  return (
    <li key={todo.id}>
      <p>title: {todo.title}</p>
      <p>content: {todo.content}</p>
      <br />
      <button
        onClick={() => {
          setCurrentTodoId(todo.id);
          setMode('update');
          setUpdateTitle(todo.title);
          setUpdateContent(todo.content);
        }}>
        수정
      </button>

      <button
        onClick={() => {
          deleteTodo(todo.id);
        }}>
        삭제
      </button>
    </li>
  );
};
