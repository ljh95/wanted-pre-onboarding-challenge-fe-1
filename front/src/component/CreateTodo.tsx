import { TodoForm, useTodoForm } from '@/hooks/useTodo';

type Props = {
  addTodo: (todoForm: TodoForm, initForm: () => void) => Promise<void>;
};

export const CreateTodo = ({ addTodo }: Props) => {
  const { todoForm, setTitle, setContent } = useTodoForm();

  const initFormData = () => {
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <label htmlFor="title">제목: </label>
      <input
        id="title"
        type="text"
        value={todoForm.title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />

      <label htmlFor="content">내용: </label>
      <input
        id="content"
        type="text"
        value={todoForm.content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br />
      <button onClick={() => addTodo(todoForm, initFormData)}>투두 추가</button>
    </div>
  );
};
