import { TodoForm } from '@/hooks/useTodo';
import { Todo } from '@/hooks/useTodoApi';
import React from 'react';
import { ModeType } from './TodoList';

type Props = {
  todo: Todo;
  updateTodoForm: TodoForm;
  currentTodoId: string;

  setMode: React.Dispatch<React.SetStateAction<ModeType>>;
  setUpdateTitle: (title: string) => void;
  setUpdateContent: (content: string) => void;
  updateTodo: (todoId: string, title: string, content: string) => Promise<void>;

  deleteTodo: (todoId: string) => Promise<void>;
};

export const UpdateTodoItem = ({
  todo,
  updateTodoForm,
  setUpdateTitle,
  setUpdateContent,
  setMode,
  updateTodo,
  deleteTodo,
  currentTodoId
}: Props) => {
  return (
    <li key={todo.id}>
      <p>
        title:{' '}
        <input
          type="text"
          value={updateTodoForm.title}
          onChange={(e) => setUpdateTitle(e.target.value)}
        />
      </p>
      <p>
        content:{' '}
        <input
          type="text"
          value={updateTodoForm.content}
          onChange={(e) => setUpdateContent(e.target.value)}
        />
      </p>
      <br />
      <button
        onClick={() => {
          setMode('create');
          updateTodo(
            currentTodoId,
            updateTodoForm.title,
            updateTodoForm.content
          );
        }}>
        수정 적용
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
